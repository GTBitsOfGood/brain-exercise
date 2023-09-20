import { useState, useCallback, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import Button from "../../components/Button";
import ProgressBar from "../../components/ProgressBar";
import Text from "../../components/Text";
import gameDescriptions from "../Stacks/gameDescriptions";
import { RemainingTimeGetter, RootStackParamList } from "../../types";

import useTriviaProblems from "../../hooks/useTriviaProblems";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  instructionText: {
    paddingTop: 75,
    paddingHorizontal: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  questionText: {
    fontSize: 24,
    textAlign: "center",
  },
  answerText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  actualAnswerText: {
    fontSize: 25,
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  showButton: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  yesButton: {
    marginBottom: 20,
    marginRight: 10,
    width: 150,
  },
  noButton: {
    marginBottom: 20,
    marginLeft: 10,
    width: 150,
  },
  buttonTitle: {
    color: "white",
  },
  showButtonTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
});

const TOTAL_TIME = gameDescriptions.Trivia.minutes * 60;
type Props = NativeStackScreenProps<RootStackParamList, "TriviaMain">;

export default function TriviaScreen({ navigation, route }: Props) {
  const [answered, setAnswered] = useState(false);
  const { problem, updateStatsOnAnswer, onTimeComplete, getNewProblem } =
    useTriviaProblems({
      navigation,
      route,
    });
  const remainingTimeRef = useRef<RemainingTimeGetter>();

  const nextProblem = useCallback(() => {
    getNewProblem();
    setAnswered(false);
  }, [getNewProblem]);

  const onPressShowButton = useCallback(() => {
    if (!answered) {
      setAnswered(true);
    } else {
      nextProblem();
    }
  }, [answered, nextProblem]);

  const onAnswerClick = useCallback(
    (isCorrect: boolean) => {
      updateStatsOnAnswer(isCorrect);
      nextProblem();
    },
    [nextProblem, updateStatsOnAnswer],
  );

  return (
    <View style={styles.root}>
      <View>
        <ProgressBar
          maxSeconds={TOTAL_TIME}
          remainingTimeRef={remainingTimeRef}
          redThreshold={60}
          onTimeComplete={onTimeComplete}
        />
        <Text style={styles.instructionText}>
          Write the question, then your answer
        </Text>
      </View>
      <Text style={styles.questionText}>{problem.question}</Text>

      {answered ? (
        <>
          <Text style={styles.answerText}>Answer:</Text>
          <Text style={styles.actualAnswerText}>{String(problem.answer)}</Text>
          <Text style={styles.questionText}>Did you answer it correctly?</Text>

          <View style={styles.buttonContainer}>
            <Button
              title="Yes"
              buttonStyle={styles.yesButton}
              titleStyle={styles.buttonTitle}
              onPress={() => onAnswerClick(true)}
            />
            <Button
              title="No"
              buttonStyle={styles.noButton}
              titleStyle={styles.buttonTitle}
              onPress={() => onAnswerClick(false)}
            />
          </View>
        </>
      ) : (
        <Button
          title="Show Answer"
          buttonStyle={styles.showButton}
          titleStyle={styles.showButtonTitle}
          onPress={onPressShowButton}
        />
      )}
    </View>
  );
}
