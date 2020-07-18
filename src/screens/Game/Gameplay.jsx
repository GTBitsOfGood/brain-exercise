/* eslint-disable no-alert */
import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import getProblem from "../../scripts/game-logic";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
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
    backgroundColor: "rgba(0, 138, 252, 0.2)",
    borderRadius: 25,
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

function Gameplay({ navigation }) {
  const [problem, setProblem] = useState(getProblem());
  const right = () => (
    <Button
      titleStyle={{
        color: "white",
        fontSize: 16,
      }}
      buttonStyle={{
        backgroundColor: 'transparent',
        marginRight: 10,
      }}
      onPress={() => navigation.navigate("Pause")} title="Pause"
    />
  )

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: right,
    });
  }, [navigation]);

  function getNewProblem() {
    setProblem(getProblem());
  }

  function checkAnswer(choiceValue) {
    if (choiceValue === problem.solution) {
      alert(`Correct!`);
    } else {
      alert(`Try Again.`);
    }
    getNewProblem();
  }

  const choicesArray = problem.choices;
  const choices = choicesArray.map((choiceValue, choiceKey) => {
    return (
      <Button
        key={choiceKey}
        buttonStyle={styles.button}
        title={`${choiceValue}`}
        titleStyle={styles.buttonTitle}
        onPress={() => checkAnswer(choiceValue)}
      />
    );
  });

  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.expressionText}>{problem.expression}</Text>
      </View>
      <View style={styles.container}>{choices}</View>
    </View>
  );
}

Gameplay.propTypes = {
  navigation: PropTypes.object,
};

export default Gameplay;
