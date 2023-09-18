import { useCallback, useState, useRef } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import getProblem from "../scripts/game-logic";
import gameDescriptions from "../screens/Stacks/gameDescriptions";
import { RootStackParamList } from "../types";

const MIN_DIFFICULTY_SCORE = 100;
const MAX_DIFFICULTY_SCORE = 499;
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
    if (difficultyScore < 200) {
      setProblem(getProblem(1));
    } else if (difficultyScore < 300) {
      setProblem(getProblem(2));
    } else if (difficultyScore < 400) {
      setProblem(getProblem(3));
    } else if (difficultyScore < 500) {
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
          newDifficultyScore += 10;
        }
        if (firstTry.current) {
          statsMap.current.questionsCorrect += 1;
        }
        firstTry.current = false;

        if (timeTaken > 60) {
          newDifficultyScore -= 10;
        } else if (timeTaken < 10) {
          newDifficultyScore += 5;
        } else {
          newDifficultyScore += 2;
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
    setDifficultyScore((prevDifficultyScore) => prevDifficultyScore - 10);
  }, []);

  return {
    problem,
    getNewProblem,
    updateStatsOnAnswer,
    updateStatsOnSkip,
    onTimeComplete,
  };
}
