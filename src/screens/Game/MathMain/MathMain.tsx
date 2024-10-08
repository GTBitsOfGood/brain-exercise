import React, { useState, useRef, useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import { Button } from "react-native-elements";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import Toast from "react-native-toast-message";

import Text from "../../../components/Text";
import useMathProblems, { TOTAL_TIME } from "../../../hooks/useMathProblems";
import { RemainingTimeGetter, RootStackParamList } from "../../../types";
import styles from "./MathMain.style";
import PauseButton from "../../../components/PauseButton";

type Props = NativeStackScreenProps<RootStackParamList, "MathMain">;

function MathMain({ route, navigation }: Props) {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [skipped, setSkipped] = useState(false);

  const remainingTimeRef = useRef<RemainingTimeGetter>();
  const prevProblemRemainingTimeRef = useRef<number>(TOTAL_TIME);
  const {
    problem,
    getNewProblem,
    updateStatsOnAnswer,
    updateStatsOnSkip,
    onTimeComplete,
  } = useMathProblems({ route, navigation });

  const resetAndNewProblem = useCallback(
    (waitSeconds: number) => {
      setButtonsDisabled(true);
      setTimeout(() => {
        if (remainingTimeRef.current.getRemainingTime() <= 0) {
          onTimeComplete();
        }
        setButtonsDisabled(false);
        setSkipped(false);
        getNewProblem();
        prevProblemRemainingTimeRef.current =
          remainingTimeRef.current.getRemainingTime();
      }, waitSeconds * 1000);
    },
    [getNewProblem, remainingTimeRef, onTimeComplete],
  );

  const onPressChoice = (choiceValue: number) => {
    const isCorrect = choiceValue === problem.solution;
    updateStatsOnAnswer(
      isCorrect,
      prevProblemRemainingTimeRef.current -
        remainingTimeRef.current.getRemainingTime(),
    );
    if (isCorrect) {
      Toast.show({
        type: "success",
        text1: "Correct!",
      });
      resetAndNewProblem(1);
    } else {
      Toast.show({
        type: "error",
        text1: "Wrong. Please Try Again!",
      });
    }
  };

  const onPressSkip = () => {
    updateStatsOnSkip();
    if (remainingTimeRef.current.getRemainingTime() <= 0) {
      onTimeComplete();
      return;
    }
    resetAndNewProblem(2);
  };

  const choices = problem.choices.map((choiceValue: number, i) => (
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
    <View
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "space-between",
        padding: 20,
        paddingTop: "16%",
        paddingHorizontal: "4%",
        paddingBottom: "6%",
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#2B3674",
              alignSelf: "left",
            }}
          >
            Math
          </Text>
          <PauseButton
            maxSeconds={TOTAL_TIME}
            remainingTimeRef={remainingTimeRef}
          />
        </View>
        {/* <ProgressBar
          maxSeconds={TOTAL_TIME}
          remainingTimeRef={remainingTimeRef}
          redThreshold={60}
          onTimeComplete={onTimeComplete}
        /> */}
        {/* <Toast visibilityTime={1000} position="bottom" bottomOffset={120} /> */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E3EAFC",
            padding: 16,
            borderRadius: 12,
            marginTop: "8%",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#2B3674",
              textAlign: "center",
            }}
          >
            {"Tap the answer to the\nmath problem."}
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E3EAFC",
            paddingVertical: 40,
            paddingHorizontal: 16,
            borderRadius: 12,
            marginTop: "8%",
          }}
        >
          <Text
            style={{
              fontSize: 48,
              fontWeight: "bold",
              color: "#EA4335",
              textAlign: "center",
            }}
          >
            {problem.expression}
          </Text>
        </View>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={onPressSkip}
          style={{
            alignSelf: "center",
            marginTop: "8%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#2B3674",
              fontSize: 24,
              fontWeight: 600,
              textDecorationLine: "underline",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "30%",
        }}
      >
        {choices}
      </View>
    </View>
  );
}

export default MathMain;
