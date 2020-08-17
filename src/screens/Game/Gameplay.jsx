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
import { AsyncStorage } from "react-native";

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
const totalTime = 300;

const storeDifficultyScore = async (score) => {
  await AsyncStorage.setItem("difficultyScore", score);
};

const pullDifficultyScore = async () => {
  const score = await AsyncStorage.getItem("difficultyScore");
  if (score !== null) {
    return score;
  }
  return 100;
};

function Gameplay({ route, navigation }) {
  const [problem, setProblem] = useState(firstQ());
  const [message, setMessage] = useState("");
  const [remainingTime, setRemainingTime] = useState(totalTime);
  const [answered, setAnswered] = useState(false);
  let pBar = React.createRef();

  function firstQ() {
    const a = Math.floor(Math.random() * 10 + 1);
    const b = Math.floor(Math.random() * 10 + 1);
    const choosePlus = Math.floor(Math.random() * 2 + 1) % 2 === 0;
    const operator = choosePlus ? " + " : " - ";
    const solution = choosePlus ? a + b : a - b;
    let choices = [
      solution,
      solution + Math.floor(Math.random() * 15),
      solution - Math.floor(Math.random() * 15),
    ];
    choices.sort(() => Math.random() - 0.5);
    return {
      expression: a + operator + b,
      solution,
      choices,
    };
  }

  const right = () => (
    <Button
      title="⏸"
      titleStyle={{
        color: "white",
        fontSize: 16,
      }}
      buttonStyle={{
        backgroundColor: "transparent",
        marginRight: 10,
      }}
      type="clear"
      onPress={() => navigation.navigate("Pause")}
    />
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: right,
    });
  }, [navigation]);

  function getNewProblem() {
    setMessage("");
    setAnswered(false);

    AsyncStorage.getItem("difficultyScore").then((difficultyScore) => {
      const score = parseInt(difficultyScore);
      if (score < 200) {
        setProblem(getProblem(problem, 1));
      } else if (score < 300) {
        setProblem(getProblem(problem, 2));
      } else if (score < 400) {
        setProblem(getProblem(problem, 3));
      } else if (score < 500) {
        setProblem(getProblem(problem, 4));
      } else {
        setProblem(getProblem(problem));
      }
    });
  }

  function checkAnswer(choiceValue) {
    if (!answered) {
      const timeToAnswer = pBar.current.getCurrentTime() - remainingTime;

      pullDifficultyScore().then((score) => {
        let difficultyScore = parseInt(score);
        if (timeToAnswer > 60) {
          difficultyScore = Math.max(difficultyScore - 10, 100);
        }
        if (timeToAnswer < 30) {
          if (timeToAnswer < 10) {
            difficultyScore = Math.min(difficultyScore + 5, 499);
          } else {
            difficultyScore = Math.min(difficultyScore + 2, 499);
          }
        }

        if (choiceValue === problem.solution) {
          setMessage(`Correct! Great job!`);
          difficultyScore = Math.min(difficultyScore + 10, 499);
        } else {
          setMessage("You’re so quick! Keep going!");
        }

        storeDifficultyScore(difficultyScore.toString());
      });

      setRemainingTime(pBar.current.getCurrentTime());
      if (choiceValue === problem.solution) {
        setMessage(`Correct! Great job!`);
      } else {
        setMessage("You’re so quick! Keep going!");
      }
      setAnswered(true);

      setTimeout(() => {
        getNewProblem();
      }, 5000);
    }
  }

  const choicesArray = problem.choices;
  const [picked, setPicked] = React.useState(0);
  const choices = choicesArray.map((choiceValue, choiceKey) => {
    return (
      <Button
        title={`${choiceValue}`}
        titleStyle={styles.buttonTitle}
        buttonStyle={
          answered && choiceKey === picked
            ? styles.selectedButton
            : styles.button
        }
        key={choiceKey}
        onPress={() => {
          setPicked(choiceKey);
          checkAnswer(choiceValue);
        }}
      />
    );
  });

  return (
    <View style={styles.root}>
      <ProgressBar
        seconds={totalTime}
        red={60}
        func={() => {
          navigation.navigate(route.params.nextScreen);
        }}
        ref={pBar}
        shouldNotRender
      />
      <View style={styles.textContainer}>
        <Text style={styles.expressionText}>{problem.expression}</Text>
      </View>
      <Text style={{ backgroundColor: "#eaeaea" }}>{message}</Text>
      <View style={styles.container}>{choices}</View>
    </View>
  );
}

Gameplay.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default Gameplay;
