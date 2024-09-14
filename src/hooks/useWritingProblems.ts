import { useCallback, useRef, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { HttpMethod, RootStackParamList } from "../types";
import getProblem from "../assets/prompts";

import gameDescriptions from "../screens/Stacks/gameDescriptions";
import { completedWriting } from "../redux/reducers/gameDetailsReducer";
import { internalRequest } from "../requests";

type Props = NativeStackScreenProps<RootStackParamList, "WritingMain">;

const TOTAL_TIME = gameDescriptions.Writing.minutes * 60;
export default function useWritingProblems({ navigation, route }: Props) {
  const dispatch = useDispatch();
  const [problem, setProblem] = useState(getProblem());

  const stats = useRef({
    questionsAttempted: 0,
  });

  const updateStatsOnAnswer = useCallback(() => {
    stats.current.questionsAttempted += 1;
  }, []);

  const getNewProblem = useCallback(() => {
    setProblem(getProblem());
  }, []);

  const onTimeComplete = useCallback(
    (remainingTime: number) => {
      const average =
        stats.current.questionsAttempted > 0
          ? (TOTAL_TIME - remainingTime) / stats.current.questionsAttempted
          : 0;
      const statistics = {
        completed: remainingTime === 0,
        questionsAnswered: stats.current.questionsAttempted,
        timePerQuestion: average,
      };

      internalRequest({
        url: "api/patient/analytics/record-writing",
        method: HttpMethod.POST,
        body: statistics,
        authRequired: true,
      });

      dispatch(completedWriting());
      navigation.replace(route.params.nextScreenArgs[0], {
        subject: "writing",
      });
    },
    [navigation, route.params.nextScreenArgs, dispatch],
  );

  return {
    problem,
    updateStatsOnAnswer,
    onTimeComplete,
    getNewProblem,
  };
}
