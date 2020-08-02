/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import ProgressBar from "../../components/ProgressBar";
import getProblem from "../../scripts/game-logic";
import Text from "../../components/Text";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  expressionText: {
    fontSize: 50,
    fontWeight: "bold",
    paddingBottom: 40,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 30,
    backgroundColor: "#eaeaea",
  },
  container: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-around",
    backgroundColor: "#eaeaea",
  },
  button: {
    alignSelf: "center",
    marginTop: 20,
    width: 99,
    height: 99,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "rgba(0, 138, 252, 0.2)",
    backgroundColor: "#eaeaea",
  },
  selectedButton: {
    alignSelf: "center",
    marginTop: 20,
    width: 99,
    height: 99,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "rgba(0, 138, 252, 0.2)",
    backgroundColor: "rgba(0, 138, 252, 0.2)",
  },
  buttonTitle: {
    fontSize: 40,
    fontWeight: "100",
    textAlign: "center",
    color: "#2f4f4f",
  },
});

function Gameplay( {navigation} ) {
  const [problem, setProblem] = useState(getProblem());
  const [message, setMessage] = useState("")
  const [remainingTime, setRemainingTime] = useState(300)
  const [answered, setAnswered] = useState(false)
  let pBar = React.createRef()
  
  const right = () => (
    <Button
      title="⏸"
      titleStyle={{
        color: "white",
        fontSize: 16,
      }}
      buttonStyle={{
        backgroundColor: 'transparent',
        marginRight: 10,
      }}
      type="clear"
      onPress={() => navigation.navigate("Pause")}
    />
  )

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: right,
    });
  }, [navigation]);

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
        title={`${choiceValue}`}
        titleStyle={styles.buttonTitle}
        buttonStyle={answered && choiceKey === picked ? styles.selectedButton : styles.button}
        key={choiceKey}
        onPress={() => {
          setPicked(choiceKey)
          checkAnswer(choiceValue)
        }}
      />
    );
  });

  return (
    <View style={styles.root}>
      <ProgressBar seconds = {300} red = {60} func = {() => {navigation.navigate("FinishedScreen")}} ref = {pBar} shouldNotRender/>
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

Gameplay.propTypes = {
  navigation: PropTypes.object,
};

export default Gameplay;
