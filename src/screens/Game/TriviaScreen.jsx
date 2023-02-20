import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import getProblem from '../../assets/trivia';
import Button from '../../components/Button';
import ProgressBar from '../../components/ProgressBar';
import Text from '../../components/Text';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  instructionText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionText: {
    fontSize: 24,
    textAlign: 'center',
  },
  answerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actualAnswerText: {
    fontSize: 25,
    textAlign: 'center',
  },
  button: {
    marginVertical: '5%',
  },
  buttonTitle: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
const totalTime = 300;
// const totalTime = 3;

function TriviaScreen({ navigation, route }) {
  const [problem, setProblem] = useState(getProblem());
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  function getNewProblem() {
    setProblem(getProblem());
    setAnswered(false);
  }

  return (
    <View style={styles.root}>
      <View>
        <ProgressBar
          seconds={totalTime}
          red={60}
          func={() => {
            setFinished(true);
          }}
        />
        {!answered && (
          <Text style={styles.instructionText}>
            Write the question, then your answer
          </Text>
        )}
      </View>
      <Text style={styles.questionText}>{problem.question}</Text>
      <View>
        <Text style={styles.answerText}>{answered ? 'Answer:' : ''}</Text>
        <Text style={styles.actualAnswerText}>
          {answered ? problem.answer : ''}
        </Text>
      </View>
      <View>
        <Button
          // eslint-disable-next-line no-nested-ternary
          title={
            finished
              ? 'Finish Writing Section'
              : answered
              ? 'Next'
              : 'Show Answer'
          }
          titleStyle={styles.buttonTitle}
          shouldNotPlay
          onPress={() => {
            if (!answered) {
              setAnswered(true);
            } else if (!finished) {
              getNewProblem();
            } else if (route.params.shouldReturn) {
              navigation.navigate('HomeScreen');
            } else {
              navigation.navigate('ReadingIntro');
            }
          }}
        />
        <Button
          title='Skip'
          titleStyle={styles.buttonTitle}
          onPress={() => {
            if (finished) {
              navigation.navigate('ReadingIntro');
            } else {
              console.log('SKIPPED!');
              getNewProblem();
            }
          }}
        />
      </View>
    </View>
  );
}

TriviaScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default TriviaScreen;
