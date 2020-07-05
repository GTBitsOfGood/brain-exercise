import React from "react";
import { getProblem } from "../src/game-logic";
import { Button } from "react-native-elements";
import { View, StyleSheet, Text } from "react-native";
import "react-native-gesture-handler";

class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    const problem = getProblem();
    this.state = {
      problem: problem,
    };
  }

  getNewProblem = () => {
    const newProblem = getProblem();
    this.setState({ problem: newProblem });
  };
  checkAnswer = (choiceValue) => {
    if (choiceValue === this.state.problem.solution) {
      alert(`Correct!`);
    } else {
      alert(`Try Again.`);
    }
  };

  render() {
    const choicesArray = this.state.problem.choices;
    const choices = choicesArray.map((choiceValue, choiceKey) => {
      return (
        <View key={choiceKey}>
          <Button
            buttonStyle={styles.button}
            title={`${choiceValue}`}
            titleStyle={styles.buttonTitle}
            onPress={() => this.checkAnswer(choiceValue)}
          />
        </View>
      );
    });
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.expressionText}>
            {this.state.problem.expression}
          </Text>
        </View>
        <View style={styles.container}>{choices}</View>
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
  expressionText: {
    fontSize: 50,
    fontWeight: "bold",
    paddingBottom: 40,
  },
  container: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-around",
    backgroundColor: "#eaeaea",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    width: 91,
    height: 88,
    backgroundColor: "rgba(0, 138, 252, 0.2)",
    borderRadius: 25,
    marginTop: 20,
    borderWidth: 1,
  },
  buttonTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "100",
    color: "#2f4f4f",
  },
  incorrectChoice: {},
  correctChoice: {},
});

export default GameScreen;
