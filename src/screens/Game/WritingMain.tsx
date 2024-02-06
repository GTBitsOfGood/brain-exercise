import { ScrollView, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRef } from "react";
import Button from "../../components/Button";
import ProgressBar from "../../components/ProgressBar";
import Text from "../../components/Text";
import { RootStackParamList, RemainingTimeGetter } from "../../types";
import gameDescriptions from "../Stacks/gameDescriptions";
import useWritingProblems from "../../hooks/useWritingProblems";
import { useCallback } from "react";
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  instructions: {
    fontSize: 30,
    paddingTop: 75,
    fontWeight: "bold",
    textAlign: "center",
  },
  questionText: {
    fontSize: 24,
    textAlign: "center",
  },
  articleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  article: {
    fontSize: 20,
    textAlign: "center",
  },
});

const TOTAL_TIME = gameDescriptions.Writing.minutes * 60;
type Props = NativeStackScreenProps<RootStackParamList, "WritingMain">;

export default function WritingMain({ navigation, route }: Props) {
  const memoizedOnTimeComplete = useCallback(
    () => onTimeComplete(false),
    []
  );

  const { problem, updateStatsOnAnswer, onTimeComplete, getNewProblem } =
    useWritingProblems({
      navigation,
      route,
    });

  const remainingTimeRef = useRef<RemainingTimeGetter>();

  return (
    <View style={styles.root}>
      <View>
        <ProgressBar
          maxSeconds={TOTAL_TIME}
          redThreshold={30}
          onTimeComplete={memoizedOnTimeComplete}
          // onTimeComplete={() => onTimeComplete(0)}
          remainingTimeRef={remainingTimeRef}
        />
        <Text style={styles.instructions}>
          Write the question, then you answer.
        </Text>
        <ScrollView contentContainerStyle={styles.articleWrapper}>
          <Text style={styles.article}>{problem}</Text>
        </ScrollView>
        <Button
          title="Next Question"
          onPress={() => {
            getNewProblem();
            updateStatsOnAnswer();
          }}
          buttonStyle={{ marginBottom: 10 }}
          shouldNotPlay
        />
        <Button
          title="Skip Section"
          onPress={() => {
            // getNewProblem();
            onTimeComplete(remainingTimeRef.current.getRemainingTime());
            updateStatsOnAnswer();
          }}
          buttonStyle={{ marginBottom: 40 }}
        />
      </View>
    </View>
  );
}
