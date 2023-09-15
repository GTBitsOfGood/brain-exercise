import { useCallback, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "TriviaMain">;
export default function useTriviaProblems({ navigation, route }: Props) {
  const [questionsAttempted, setQuestionsAttempted] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const updateStatsOnAnswer = useCallback(
    (isCorrect: boolean, timeTaken: number) => {
      setQuestionsAttempted((prev) => prev + 1);
      if (isCorrect) {
        setQuestionsCorrect((prev) => prev + 1);
      }
      setTotalTime((prev) => prev + timeTaken);
    },
    [],
  );

  const onTimeComplete = useCallback(() => {
    const average = questionsAttempted > 0 ? totalTime / questionsAttempted : 0;
    navigation.replace(...route.params.nextScreenArgs);

    return {
      questionsAttempted,
      questionsCorrect,
      timePerQuestion: average,
    };
  }, [
    questionsAttempted,
    questionsCorrect,
    totalTime,
    navigation,
    route.params.nextScreenArgs,
  ]);

  return {
    updateStatsOnAnswer,
    onTimeComplete,
  };
}
