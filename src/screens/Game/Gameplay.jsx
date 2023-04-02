/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button as BaseButton } from 'react-native-elements';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';
import Text from '../../components/Text';
import getProblem from '../../scripts/game-logic';
import ScoreValues from './ScoreValues';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  expressionText: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingBottom: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 40,
    paddingTop: 80,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    minWidth: 99,
    height: 99,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#005AA3',
    backgroundColor: '#fff',
  },
  gameMessage: {
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
  },
  selectedButton: {
    alignSelf: 'center',
    width: 99,
    height: 99,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#005AA3',
    backgroundColor: '#005AA3',
  },
  selectedButtonTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  buttonTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  disabledButtonTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'dimgrey',
  },
});
const totalTime = 300;

const storeDifficultyScore = async (score) => {
  await AsyncStorage.setItem('difficultyScore', score);
};

const pullDifficultyScore = async () => {
  const score = await AsyncStorage.getItem('difficultyScore');
  if (score !== null) {
    return score;
  }
  return 100;
};

function Gameplay({ route, navigation, paused }) {
  const [problem, setProblem] = useState(getProblem());
  const [message, setMessage] = useState('');
  const [remainingTime, setRemainingTime] = useState(totalTime);
  const [answered, setAnswered] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(1);
  const [attempted, setAttempted] = useState(1);
  const [disableSkip, setDisableSkip] = useState(false);

  let pBar = React.createRef();

  function getNewProblem() {
    setMessage('');
    setAnswered(false);

    AsyncStorage.getItem('difficultyScore').then((difficultyScore) => {
      const score = parseInt(difficultyScore);
      if (score < 200) {
        setProblem(getProblem(1));
      } else if (score < 300) {
        setProblem(getProblem(2));
      } else if (score < 400) {
        setProblem(getProblem(3));
      } else if (score < 500) {
        setProblem(getProblem(4));
      } else {
        setProblem(getProblem());
      }
    }).catch(err => console.log(err));
  }

  function checkAnswer(choiceValue, skip = false) {
    let correct = false;
    if (skip) {
    } else if (!answered) {
      const timeToAnswer = pBar.current.getCurrentTime() - remainingTime;

      pullDifficultyScore().then((score) => {
        let difficultyScore = parseInt(score);
        if (timeToAnswer > 60 || skip === true) {
          difficultyScore = Math.max(difficultyScore - 10, 100);
        }
        if (timeToAnswer < 30) {
          if (timeToAnswer < 10) {
            difficultyScore = Math.min(difficultyScore + 5, 499);
          } else {
            difficultyScore = Math.min(difficultyScore + 2, 499);
          }
        }

        if (skip === false && choiceValue === problem.solution) {
          difficultyScore = Math.min(difficultyScore + 10, 499);
          Toast.show({
            type: 'success',
            text1: 'Correct!',
          });
          correct = true;
          setCorrectAnswers(correctAnswers + 1);
          ScoreValues.correct = correctAnswers;
        } else {
          Toast.show({
            type: 'error',
            text1: 'Wrong. Please Try Again!',
          });
        }

        storeDifficultyScore(difficultyScore.toString());
      }).catch(err => console.log(err));

      setRemainingTime(pBar.current.getCurrentTime());
      setAnswered(true);

      if (choiceValue === problem.solution) {
        setTimeout(() => {
          getNewProblem();
        }, 500);
      } else {
        setAnswered(false);
        setPicked(0);
      }
    }
  }

  const choicesArray = problem.choices;
  const [picked, setPicked] = React.useState(0);
  const choices = choicesArray.map((choiceValue, choiceKey) => {
    return (
      <BaseButton
        title={`${choiceValue}`}
        titleStyle={styles.buttonTitle}
        disabledTitleStyle={
          answered && choiceKey === picked
            ? styles.selectedButtonTitle
            : styles.disabledButtonTitle
        }
        buttonStyle={styles.button}
        disabled={answered}
        disabledStyle={
          answered && choiceKey === picked
            ? styles.selectedButton
            : styles.button
        }
        key={choiceKey}
        onPress={() => {
          setPicked(choiceKey);
          setAttempted(attempted + 1);
          checkAnswer(choiceValue);
          ScoreValues.total = attempted;
        }}
      />
    );
  });

  return (
    <View style={styles.root}>
      <ProgressBar
        seconds={totalTime}
        remainingTime={remainingTime}
        setRemainingTime={setRemainingTime}
        red={60}
        func={() => {
          if (route.params.shouldReturn) {
            navigation.navigate('HomeScreen');
          } else {
            navigation.navigate(route.params.nextScreen);
          }
        }}
        ref={pBar}
        paused={paused}
      />
      <Toast visibilityTime={1000} position='bottom' bottomOffset={90} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Tap the answer to the math problem.</Text>
        <Text style={styles.expressionText}>{problem.expression}</Text>
      </View>
      <Text style={styles.gameMessage}>{message}</Text>
      <View style={styles.container}>{choices}</View>
      <Button
        title='Skip'
        buttonStyle={{
          width: '90%',
          alignSelf: 'center',
          marginBottom: '5%',
          backgroundColor: '#005AA3',
        }}
        disabled={disableSkip}
        onPress={() => {
          let correctAnswer = 0;
          choicesArray.map((choiceValue, choiceKey) => {
            if (problem.solution === choiceValue) {
              correctAnswer = choiceKey;
            }
          });
          setPicked(correctAnswer);
          checkAnswer(0, true);
          setAnswered(true);
          setDisableSkip(true);
          setTimeout(() => {
            getNewProblem();
            setDisableSkip(false);
          }, 2000);
        }}
      />
    </View>
  );
}

Gameplay.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  paused: PropTypes.bool,
};

export default Gameplay;
