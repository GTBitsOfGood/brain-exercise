import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import ProgressBar from "../../components/ProgressBar";
import getProblem from "../../assets/trivia";
import Text from "../../components/Text";
import Button from "../../components/Button";

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
const totalTime = 300;

function TriviaScreen({ navigation, route }) {
  const [problem, setProblem] = useState(getProblem());
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  function getNewProblem() {
    setProblem(getProblem());
    setAnswered(false);
  }

  return (
    <View style={styles.root}>
      <View>
        <ProgressBar
          seconds={totalTime}
          red={60}
          func={() => {
            setFinished(true);
          }}
          shouldNotRender
        />
        {
          !answered &&
          <Text style={styles.instructionText}>
            Write the question, then your answer
          </Text>
        }
      </View>
      <Text style={styles.questionText}>{problem.question}</Text>
      <View>
        <Text style={styles.answerText}>{answered ? "Answer:" : ""}</Text>
        <Text style={styles.actualAnswerText}>
          {answered ? problem.answer : ""}
        </Text>
      </View>
      <View>
        <Button
          // eslint-disable-next-line no-nested-ternary
          title={
            finished
              ? "Finish Writing Section"
              : answered
              ? "Next"
              : "Show Answer"
          }
          buttonStyle={styles.button}
          onPress={() => {
            if (!answered) {
              setAnswered(true);
            } else if (!finished) {
              getNewProblem();
            } else if (route.params.shouldReturn) {
              navigation.navigate("HomeScreen");
            } else {
              navigation.navigate("ReadingIntro");
            }
          }}
        />
      </View>
    </View>
  );
};

TriviaScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default TriviaScreen;
