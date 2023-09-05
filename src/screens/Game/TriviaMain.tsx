import { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import getProblem from "../../assets/trivia";
import Button from "../../components/Button";
import ProgressBar from "../../components/ProgressBar";
import Text from "../../components/Text";
import gameDescriptions from "../Stacks/gameDescriptions";
import { RootStackParamList } from "../../types";

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
  showButton: {
    marginBottom: 20,
  },
  showButtonTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
});

const TOTAL_TIME = gameDescriptions.Trivia.minutes * 60;
type Props = NativeStackScreenProps<RootStackParamList, "TriviaMain">;

function TriviaScreen({ navigation, route }: Props) {
  const [problem, setProblem] = useState(getProblem());
  const [answered, setAnswered] = useState(false);

  const getNewProblem = () => {
    setProblem(getProblem());
    setAnswered(false);
  };

  const onPressShowButton = useCallback(() => {
    if (!answered) {
      setAnswered(true);
    } else {
      getNewProblem();
    }
  }, [answered]);

  const onTimeComplete = useCallback(() => {
    navigation.navigate(...route.params.nextScreenArgs);
  }, [navigation, route.params.nextScreenArgs]);

  return (
    <View style={styles.root}>
      <View>
        <ProgressBar
          maxSeconds={TOTAL_TIME}
          redThreshold={60}
          onTimeComplete={onTimeComplete}
        />
        <Text style={styles.instructionText}>
          Write the question, then your answer
        </Text>
      </View>
      <Text style={styles.questionText}>{problem.question}</Text>
      <View>
        <Text style={styles.answerText}>{answered ? "Answer:" : ""}</Text>
        <Text style={styles.actualAnswerText}>
          {answered ? `${problem.answer}` : ""}
        </Text>
      </View>
      <View>
        <Button
          title={answered ? "Next" : "Show Answer"}
          buttonStyle={styles.showButton}
          titleStyle={styles.showButtonTitle}
          shouldNotPlay
          onPress={onPressShowButton}
        />
      </View>
    </View>
  );
}

export default TriviaScreen;
