import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import ProgressBar from "../../components/ProgressBar";
import getProblem from "../../assets/prompts";
import Text from "../../components/Text";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
    padding: 20,
    backgroundColor: "white"
  },
  instructionText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  questionText: {
    fontSize: 24,
    textAlign: "center",
  },
  answerText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  actualAnswerText: {
    fontSize: 25,
    textAlign: "center",
  },
});

function PromptScreen({ navigation, route }) {
  const [problem, setProblem] = useState(getProblem());
  const [finished, setFinished] = useState(false);

  function getNewProblem() {
    setProblem(getProblem());
  }

  return (
    <View style={styles.root}>
      <View>
        <ProgressBar seconds = {300} red = {60} func = {() => {setFinished(true)}} shouldNotRender/>
        <Text style={styles.instructionText}>Write the question, then you answer</Text>
      </View>
      <Text style = {styles.questionText}>{problem}</Text>
      <Button
        // eslint-disable-next-line no-nested-ternary
        title={finished ? "Finish Writing Section" : "Next" }
        shouldNotPlay
        onPress={() => {
          if (!finished) {
            getNewProblem()
          } else if (route.params.shouldReturn) {
            navigation.navigate("HomeScreen");
          } else {
            navigation.navigate("FinishedScreen");
          }
        }}
      />
    </View>
  );
}

PromptScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
export default PromptScreen;
