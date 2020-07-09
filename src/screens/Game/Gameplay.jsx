/* eslint-disable no-alert */
import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import ProgressBar from "../../components/ProgressBar";
import getProblem from "../../scripts/game-logic";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#eaeaea",
  },
  expressionText: {
    fontSize: 50,
    fontWeight: "bold",
    paddingBottom: 40,
  },
  textContainer: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "center",
    backgroundColor: "#eaeaea",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    textAlign: "center",
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
    width: 99,
    height: 99,
    backgroundColor: "#eaeaea",
    borderRadius: 25,
    borderColor: "rgba(0, 138, 252, 0.2)",
    borderWidth: 5,
    marginTop: 20,
    alignSelf: "center",
  },
  selectedButton: {
    width: 99,
    height: 99,
    backgroundColor: "rgba(0, 138, 252, 0.2)",
    borderRadius: 25,
    borderColor: "rgba(0, 138, 252, 0.2)",
    borderWidth: 5,
    marginTop: 20,
    alignSelf: "center",
  },
  buttonTitle: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "100",
    color: "#2f4f4f",
  },
});

function Gameplay( {navigation} ) {
  const [problem, setProblem] = useState(getProblem());
  const [message, setMessage] = useState("")
  const [remainingTime, setRemainingTime] = useState(300)
  const [answered, setAnswered] = useState(false)
  let pBar = React.createRef()

  function getNewProblem() {
    setMessage("")
    setAnswered(false)
    setProblem(getProblem());
  }

  function checkAnswer(choiceValue) {
    if (!answered) {
      setRemainingTime(pBar.current.getCurrentTime())
      if (choiceValue === problem.solution) {
        setMessage(`Correct! Great job!`);
      } else {
        setMessage('You’re so quick! Keep going!');
      }
      setAnswered(true)
      setTimeout(() => {getNewProblem()}, 5000)
    }
  }

  const choicesArray = problem.choices;
  const [picked, setPicked] = React.useState(0)
  const choices = choicesArray.map((choiceValue, choiceKey) => {
    return (
      <Button
        key={choiceKey}
        onPress={() => {
          setPicked(choiceKey)
          checkAnswer(choiceValue)
        }}
        buttonStyle={answered && choiceKey === picked ? styles.selectedButton : styles.button}
        title={`${choiceValue}`}
        titleStyle={styles.buttonTitle}
      />
    );
  });

  return (
    <View style={styles.root}>
      <View /*style={{opacity: 0}}*/>
        <ProgressBar seconds = {300} red = {60} func = {() => {navigation.navigate("FinishedScreen")}} ref = {pBar}/>
      </View>
      
      <View style={styles.textContainer}>
        <Text style={styles.expressionText}>{problem.expression}</Text>
      </View>
      <Text style={{backgroundColor: "#eaeaea"}}>{message}</Text>
      <View style={styles.container}>
        {choices}
      </View>
    </View>
  );
}

/*Gameplay.navigationOptions = ({ navigation }) => ({
  headerRight: <PauseButton onPress={() => navigation.navigate("Pause")} />,
});*/

Gameplay.propTypes = {
  navigation: PropTypes.object,
};

export default Gameplay;
