import React, { useState, useRef, useCallback } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import Toast from "react-native-toast-message";

import CustomButton from "../../../components/Button";
import ProgressBar from "../../../components/ProgressBar";
import Text from "../../../components/Text";
import useMathProblems from "../../../hooks/useMathProblems";
import { RemainingTimeGetter, RootStackParamList } from "../../../types";
import styles from "./MathMain.style";
import { TOTAL_TIME } from "../../../hooks/useMathProblems";

type Props = NativeStackScreenProps<RootStackParamList, "MathMain">;

function MathMain({ route, navigation }: Props) {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [skipped, setSkipped] = useState(false);
  let firstTry = useRef(true);
  // const statsMap = useRef({"QUESTION_ATTEMPT": 0, "QUESTION_CORRECT": 0, "AVERAGE_TIME": 0});

  const remainingTimeRef = useRef<RemainingTimeGetter>();
  const prevProblemRemainingTimeRef = useRef<number>(TOTAL_TIME);
  const {
    problem,
    getNewProblem,
    updateStatsOnAnswer,
    updateStatsOnSkip,
    onTimeComplete,
    statsMap,
  } = useMathProblems();

  const resetAndNewProblem = useCallback(
    (waitSeconds: number) => {
      setButtonsDisabled(true);
      setTimeout(() => {
        setButtonsDisabled(false);
        setSkipped(false);
        firstTry.current = true;
        getNewProblem();
        prevProblemRemainingTimeRef.current =
          remainingTimeRef.current.getRemainingTime();
      }, waitSeconds * 1000);
    },
    [getNewProblem, remainingTimeRef],
  );

  const onPressChoice = (choiceValue: number) => {
    const isCorrect = choiceValue === problem.solution;
    updateStatsOnAnswer(
      isCorrect,
      prevProblemRemainingTimeRef.current -
        remainingTimeRef.current.getRemainingTime(),
    );
    if (isCorrect) {
      if (firstTry.current) {
        statsMap.current["questionsAttemped"] += 1;
        statsMap.current["questionsCorrect"] += 1;
      }
      Toast.show({
        type: "success",
        text1: "Correct!",
      });
      resetAndNewProblem(1);
    } else {
      if (firstTry.current) {
        statsMap.current["questionsAttemped"] += 1;
      }
      firstTry.current = false;
      Toast.show({
        type: "error",
        text1: "Wrong. Please Try Again!",
      });
    }
  };

  const onPressSkip = () => {
    if (remainingTimeRef.current.getRemainingTime() === 0) {
      onTimeComplete(route, navigation);
    }

    // FIXME: I have created such that skip questions are not counted in numAttempted

    updateStatsOnSkip();
    resetAndNewProblem(2);
  };

  const choices = problem.choices.map((choiceValue, i) => (
    <Button
      title={`${choiceValue}`} // Formatted like this because 0 number is not displayed otherwise
      buttonStyle={styles.button}
      titleStyle={styles.buttonTitle}
      disabled={buttonsDisabled}
      disabledTitleStyle={[
        styles.buttonTitle,
        choiceValue === problem.solution || skipped
          ? styles.selectedButtonTitle
          : styles.disabledButtonTitle,
      ]}
      disabledStyle={[
        styles.button,
        (choiceValue === problem.solution || skipped) && styles.selectedButton,
      ]}
      key={i}
      onPress={() => onPressChoice(choiceValue)}
    />
  ));

  return (
    <View style={styles.root}>
      <ProgressBar
        maxSeconds={TOTAL_TIME}
        remainingTimeRef={remainingTimeRef}
        redThreshold={60}
        onTimeComplete={() => onTimeComplete(route, navigation)}
      />
      <Toast visibilityTime={1000} position="bottom" bottomOffset={120} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Tap the answer to the math problem.</Text>
        <Text style={styles.expressionText}>{problem.expression}</Text>
      </View>
      <View style={styles.container}>{choices}</View>
      <CustomButton
        title="Skip"
        buttonStyle={{
          marginBottom: "10%",
        }}
        disabled={buttonsDisabled}
        onPress={onPressSkip}
      />
    </View>
  );
}

export default MathMain;
