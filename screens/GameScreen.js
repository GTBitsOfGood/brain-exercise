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
        <Button
          key={choiceKey}
          buttonStyle={styles.button}
          title={`${choiceValue}`}
          titleStyle={styles.buttonTitle}
          onPress={() => this.checkAnswer(choiceValue)}
        />
      );
    });
    return (
      <View style={styles.root}>
        <View style={styles.textContainer}>
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

export default GameScreen;
