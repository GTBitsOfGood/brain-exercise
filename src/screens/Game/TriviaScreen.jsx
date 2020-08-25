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
    justifyContent: "center",
    paddingHorizontal: 25,
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
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  actualAnswerText: {
    fontSize: 28,
    textAlign: "center",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
  },
  container: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});
const totalTime = 300;

function TriviaScreen({ navigation }) {
  const [problem, setProblem] = useState(getProblem());
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  function getNewProblem() {
    setProblem(getProblem());
    setAnswered(false);
  }

  return (
    <View style={styles.root}>
      <ProgressBar
        seconds={totalTime}
        red={60}
        func={() => {
          setFinished(true);
        }}
        shouldNotRender
      />
      <View style={styles.textContainer}>
        <Text style={styles.instructionText}>
          Write down both the question and answer to:{" "}
        </Text>
        <Text style={styles.questionText}>{problem.question}</Text>
        <View>
          <Text style={styles.answerText}>{answered ? "Answer:" : ""}</Text>
          <Text style={styles.actualAnswerText}>
            {answered ? problem.answer : ""}
          </Text>
        </View>
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
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
          onPress={() => {
            if (!finished) {
              if (!answered) {
                setAnswered(true);
              } else {
                getNewProblem();
              }
            } else {
              navigation.navigate("MathIntro", {
                nextScreen: "WritingIntro",
              });
            }
          }}
        />
      </View>
    </View>
  );
};

TriviaScreen.propTypes = {
  navigation: PropTypes.object,
};

export default TriviaScreen;
