import React from "react";
import { getProblem } from "../src/game-logic";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import "react-native-gesture-handler";

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problem: {
        expression: "1 + 2",
        solution: 3,
        choices: [5, 7, 3],
      },
    };
  }

  checkAnswer = (choiceKey) => {
    return null;
  };

  render() {
    const choicesArray = this.state.problem.choices;
    const choices = choicesArray.map((choiceValue, choiceKey) => {
      return (
        <li key={choiceKey}>
          <Button
            onClick={() => this.alert(`You chose ${choiceKey}`)}
          >
            {choiceValue}
          </Button>
        </li>
      );
    });
    return (
      <View>
        <Text>{this.state.problem.expression}</Text>
        <View style={styles.button}>{choices}</View>
      </View>
    );
  }
}

// modify styles
var styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "green",
    width: "40%",
    height: 40,
  },
});

export default GameScreen;
