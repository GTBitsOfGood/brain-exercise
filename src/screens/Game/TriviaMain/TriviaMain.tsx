import { useState, useCallback, useRef } from "react";
import { View, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import Text from "../../../components/Text";
import gameDescriptions from "../../Stacks/gameDescriptions";
import { RemainingTimeGetter, RootStackParamList } from "../../../types";
import PauseButton from "../../../components/PauseButton";
import ContinueButton from "../../../components/ContinueButton";

import useTriviaProblems from "../../../hooks/useTriviaProblems";

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     backgroundColor: "white",
//   },
//   instructionText: {
//     paddingTop: 75,
//     paddingHorizontal: 20,
//     fontSize: 30,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   questionText: {
//     fontSize: 24,
//     textAlign: "center",
//   },
//   answerText: {
//     fontSize: 25,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   actualAnswerText: {
//     fontSize: 25,
//     textAlign: "center",
//   },
//   container: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   showButton: {
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   yesButton: {
//     marginBottom: 20,
//     marginRight: 10,
//     width: 150,
//   },
//   noButton: {
//     marginBottom: 20,
//     marginLeft: 10,
//     width: 150,
//   },
//   buttonTitle: {
//     color: "white",
//   },
//   showButtonTitle: {
//     alignSelf: "center",
//     fontWeight: "bold",
//     color: "white",
//   },
// });

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
            Trivia
          </Text>
          <PauseButton
            maxSeconds={TOTAL_TIME}
            remainingTimeRef={remainingTimeRef}
            onTimeComplete={onTimeComplete}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#E3EAFC",
            borderRadius: 12,
            marginTop: "8%",
            display: "flex",
            justifyContent: "center",
            paddingVertical: 64,
            paddingHorizontal: 32,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#34BC99",
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            Question:
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: "#2B3674",
              textAlign: "center",
              lineHeight: 32,
            }}
          >
            {problem.question}
          </Text>
        </View>
        {answered ? (
          <View
            style={{
              borderWidth: 1,
              borderColor: "#E3EAFC",
              borderRadius: 12,
              marginTop: "8%",
              paddingVertical: 64,
              paddingHorizontal: 32,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: "#34BC99",
                textAlign: "center",
                marginBottom: 12,
              }}
            >
              Answer:
            </Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#2B3674",
                textAlign: "center",
                lineHeight: 32,
              }}
            >
              {String(problem.answer)}
            </Text>
          </View>
        ) : (
          <>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#E3EAFC",
                borderRadius: 12,
                marginTop: "8%",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#2B3674",
                  textAlign: "center",
                  padding: 16,
                }}
              >
                Write down both the question and the answer
              </Text>
            </View>
            <TouchableOpacity
              accessibilityRole="button"
              onPress={() => onAnswerClick(false)}
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
          </>
        )}
      </View>
      <View>
        {answered ? (
          <ContinueButton
            title="Next"
            backgroundColor="#34BC99"
            titleColor="white"
            onPressFn={() => onAnswerClick(true)}
          />
        ) : (
          <ContinueButton
            title="Show Answer"
            backgroundColor="#34BC99"
            titleColor="white"
            onPressFn={onPressShowButton}
          />
        )}
      </View>
    </View>
  );
}
