import { useCallback, useRef, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { HttpMethod, RootStackParamList } from "../types";
import getProblem from "../assets/trivia";

import gameDescriptions from "../screens/Stacks/gameDescriptions";
import { updateLastSessionsMetricsState } from "../redux/reducers/gameDetailsReducer";
import { internalRequest } from "../requests";

type Props = NativeStackScreenProps<RootStackParamList, "TriviaMain">;

const TOTAL_TIME = gameDescriptions.Trivia.minutes * 60;
export default function useTriviaProblems({ navigation, route }: Props) {
  const dispatch = useDispatch();
  const [problem, setProblem] = useState(getProblem());

  const stats = useRef({
    questionsAttempted: 0,
    questionsCorrect: 0,
  });

  const updateStatsOnAnswer = useCallback((isCorrect: boolean) => {
    stats.current.questionsAttempted += 1;
    if (isCorrect) {
      stats.current.questionsCorrect += 1;
    }
  }, []);

  const getNewProblem = useCallback(() => {
    setProblem(getProblem());
  }, []);

  const onTimeComplete = useCallback(() => {
    const average =
      stats.current.questionsAttempted > 0
        ? TOTAL_TIME / stats.current.questionsAttempted
        : 0;

    const statistics = {
      questionsAttempted: stats.current.questionsAttempted,
      questionsCorrect: stats.current.questionsCorrect,
      timePerQuestion: average,
    };
    internalRequest({
      url: "/api/patient/analytics/record-trivia",
      method: HttpMethod.POST,
      body: statistics,
      authRequired: true,
    });
    dispatch(
      updateLastSessionsMetricsState({
        trivia: { attempted: true, ...statistics },
      }),
    );
    navigation.replace(route.params.nextScreenArgs[0], { subject: "trivia" });
  }, [navigation, route.params.nextScreenArgs, dispatch]);

  return {
    problem,
    updateStatsOnAnswer,
    onTimeComplete,
    getNewProblem,
  };
}
