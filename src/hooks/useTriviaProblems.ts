import { useCallback, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { HttpMethod, RootStackParamList } from "../types";
import getProblem from "../assets/trivia";

import gameDescriptions from "../screens/Stacks/gameDescriptions";
import { completedTrivia } from "../redux/reducers/gameDetailsReducer";
import { internalRequest } from "../requests";

type Props = NativeStackScreenProps<RootStackParamList, "TriviaMain">;

const TOTAL_TIME = gameDescriptions.Trivia.minutes * 60;
export default function useTriviaProblems({ navigation, route }: Props) {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const statistics = {
      questionsAttempted,
      questionsCorrect,
      timePerQuestion: average,
    };
    internalRequest({
      url: "/api/patient/analytics/record-trivia",
      method: HttpMethod.POST,
      body: statistics,
      authRequired: true,
    });
    dispatch(completedTrivia());
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
