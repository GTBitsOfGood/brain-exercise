import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import ProgressBar from "../../components/ProgressBar";
import getProblem from "../../assets/trivia";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#eaeaea",
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    justifyContent: "space-between",
    backgroundColor: "#eaeaea",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
  },
  container: {
    flex: 3,
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#eaeaea",
    flexWrap: "wrap",
    alignContent: "stretch",
  },
  button: {
    width: 300,
    height: 50,
    marginTop: 20,
    marginBottom: 50,
    alignSelf: "center",
  },
  buttonTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "100",
    color: "white",
  },
});

function TriviaScreen( {navigation} ) {
  const [problem, setProblem] = useState(getProblem());
  const [answered, setAnswered] = useState(false)
  const [finished, setFinished] = useState(false)

  function getNewProblem() {
    setProblem(getProblem());
    setAnswered(false)
  }

  return (
    <View style={styles.root}>
      <View style={{opacity: 0}}>
        <ProgressBar seconds = {300} red = {60} func = {() => {setFinished(true)}}/>
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.instructionText}>Write down both the question and answer to: </Text>
        <Text style = {styles.questionText}>{problem.question}</Text>
        <View>
          <Text style = {styles.answerText}>{answered ? "Answer:" : ""}</Text>
          <Text style = {styles.actualAnswerText}>{answered ? problem.answer : ""}</Text>
        </View>
      </View>
      <View>
        <Button
          // eslint-disable-next-line no-nested-ternary
          title={finished ? "Finish Writing Section" : (answered ? "Next" : "Show Answer")}
          buttonStyle={styles.button}
          titleStyle = {styles.buttonTitle}
          onPress={() => {
            if (!finished) {
              if (!answered) {
                setAnswered(true)
              } else {
                getNewProblem()
              }
            } else {
              navigation.navigate("FinishedScreen")
            }
          }}
        />
      </View>
    </View>
  );
}

TriviaScreen.propTypes = {
  navigation: PropTypes.object,
};

export default TriviaScreen;
