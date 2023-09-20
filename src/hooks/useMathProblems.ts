import { useCallback, useState, useRef } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import getProblem from "../scripts/game-logic";
import gameDescriptions from "../screens/Stacks/gameDescriptions";
import { RootStackParamList } from "../types";

const MIN_DIFFICULTY_SCORE = 0;
const MAX_DIFFICULTY_SCORE = 99;
export const TOTAL_TIME = gameDescriptions.Math.minutes * 60;

type Props = NativeStackScreenProps<RootStackParamList, "MathMain">;

export default function useMathQuestions({ route, navigation }: Props) {
  const [problem, setProblem] = useState(getProblem());
  const [difficultyScore, setDifficultyScore] = useState(0);
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
    navigation.replace(...route.params.nextScreenArgs);
  }, [navigation, route.params.nextScreenArgs, difficultyScore]);

  const updateStatsOnAnswer = useCallback(
    (isCorrect: boolean, timeTaken: number) => {
      setDifficultyScore((prevDifficultyScore) => {
        let newDifficultyScore = prevDifficultyScore;
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
        return Math.min(
          Math.max(newDifficultyScore, MIN_DIFFICULTY_SCORE),
          MAX_DIFFICULTY_SCORE,
        );
      });
    },
    [],
  );

  const updateStatsOnSkip = useCallback(() => {
    setDifficultyScore((prevDifficultyScore) => prevDifficultyScore - 2.5);
  }, []);

  return {
    problem,
    getNewProblem,
    updateStatsOnAnswer,
    updateStatsOnSkip,
    onTimeComplete,
  };
}
