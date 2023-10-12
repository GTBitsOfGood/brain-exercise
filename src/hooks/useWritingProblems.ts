import { useCallback, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { HttpMethod, RootStackParamList } from "../types";
import getProblem from "../assets/prompts";

import gameDescriptions from "../screens/Stacks/gameDescriptions";
import { completedWriting } from "../redux/reducers/gameDetailsReducer";
import { internalRequest } from "../requests";

type Props = NativeStackScreenProps<RootStackParamList, "TriviaMain">;

const TOTAL_TIME = gameDescriptions.Trivia.minutes * 60;
export default function useWritingProblems({ navigation, route }: Props) {
  const dispatch = useDispatch();
  const [problem, setProblem] = useState(getProblem());
  const [questionsAttempted, setQuestionsAttempted] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);

  const updateStatsOnAnswer = useCallback((isCorrect: boolean) => {
    setQuestionsAttempted((prev) => prev + 1);
    if (isCorrect) {
      setQuestionsCorrect((prev) => prev + 1);
    }
  }, []);

  const getNewProblem = useCallback(() => {
    setProblem(getProblem());
  }, []);

  const onTimeComplete = useCallback(() => {
    const average =
      questionsAttempted > 0 ? TOTAL_TIME / questionsAttempted : 0;
    const statistics = {
      skipped: questionsAttempted - questionsCorrect,
      questionsAnswered: questionsCorrect,
      timePerQuestion: average,
    };
    internalRequest({
      url: "api/patient/analytics/record-writing",
      method: HttpMethod.POST,
      body: statistics,
      authRequired: true,
    });
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    dispatch(completedWriting());
    navigation.replace(...route.params.nextScreenArgs);
  }, [
    questionsAttempted,
    questionsCorrect,
    navigation,
    route.params.nextScreenArgs,
    dispatch,
  ]);

  return {
    problem,
    updateStatsOnAnswer,
    onTimeComplete,
    getNewProblem,
  };
}
