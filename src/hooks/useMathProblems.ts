import { useCallback, useState, useRef } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import getProblem from "../scripts/game-logic";
import gameDescriptions from "../screens/Stacks/gameDescriptions";
import { HttpMethod, RootStackParamList } from "../types";
import {
  completedMath,
  setDifficultyScore,
} from "../redux/reducers/gameDetailsReducer";
import { RootState } from "../redux/rootReducer";
import { GameDetails } from "../redux/reducers/gameDetailsReducer/types";
import { internalRequest } from "../requests";

const MIN_DIFFICULTY_SCORE = 0;
const MAX_DIFFICULTY_SCORE = 99;
export const TOTAL_TIME = gameDescriptions.Math.minutes * 60;

type Props = NativeStackScreenProps<RootStackParamList, "MathMain">;

export default function useMathQuestions({ route, navigation }: Props) {
  const dispatch = useDispatch();
  const [problem, setProblem] = useState(getProblem());
  const { difficultyScore } = (
    useSelector<RootState>((state) => state.game) as GameDetails
  ).math;
  const statsMap = useRef({
    questionsAttemped: 1,
    questionsCorrect: 0,
    difficultyScore: 0,
    timePerQuestion: 0.0,
  });

  const firstTry = useRef(true);

  const getNewProblem = useCallback(() => {
    firstTry.current = true;
    statsMap.current.questionsAttemped += 1;
    if (difficultyScore < 25) {
      setProblem(getProblem(1));
    } else if (difficultyScore < 50) {
      setProblem(getProblem(2));
    } else if (difficultyScore < 75) {
      setProblem(getProblem(3));
    } else if (difficultyScore < 100) {
      setProblem(getProblem(4));
    } else {
      setProblem(getProblem());
    }
  }, [difficultyScore]);

  const onTimeComplete = useCallback(() => {
    statsMap.current.difficultyScore = difficultyScore;
    statsMap.current.timePerQuestion =
      statsMap.current.questionsAttemped === 0
        ? 0
        : TOTAL_TIME / statsMap.current.questionsAttemped;
    internalRequest({
      url: "/api/patient/analytics/recordMath",
      method: HttpMethod.POST,
      authRequired: true,
    });
    dispatch(completedMath());
    navigation.replace(...route.params.nextScreenArgs);
  }, [navigation, route.params.nextScreenArgs, difficultyScore, dispatch]);

  const updateStatsOnAnswer = useCallback(
    (isCorrect: boolean, timeTaken: number) => {
      let newDifficultyScore = difficultyScore;
      if (isCorrect) {
        newDifficultyScore += 2.5;
      }
      if (firstTry.current) {
        statsMap.current.questionsCorrect += 1;
      }
      firstTry.current = false;

      if (timeTaken > 60) {
        newDifficultyScore -= 2.5;
      } else if (timeTaken < 10) {
        newDifficultyScore += 1.25;
      } else {
        newDifficultyScore += 0.5;
      }
      dispatch(
        setDifficultyScore(
          Math.min(
            Math.max(newDifficultyScore, MIN_DIFFICULTY_SCORE),
            MAX_DIFFICULTY_SCORE,
          ),
        ),
      );
    },
    [difficultyScore, dispatch],
  );

  const updateStatsOnSkip = useCallback(() => {
    dispatch(setDifficultyScore(difficultyScore - 2.5));
  }, [difficultyScore, dispatch]);

  return {
    problem,
    getNewProblem,
    updateStatsOnAnswer,
    updateStatsOnSkip,
    onTimeComplete,
  };
}
