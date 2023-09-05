import { useCallback, useState } from "react";
import getProblem from "../scripts/game-logic";

const MIN_DIFFICULTY_SCORE = 100;
const MAX_DIFFICULTY_SCORE = 499;

export default function useMathQuestions() {
  const [problem, setProblem] = useState(getProblem());
  const [difficultyScore, setDifficultyScore] = useState(0);

  const getNewProblem = useCallback(() => {
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

  const updateStatsOnAnswer = useCallback(
    (isCorrect: boolean, timeTaken: number) => {
      setDifficultyScore((prevDifficultyScore) => {
        let newDifficultyScore = prevDifficultyScore;
        if (isCorrect) {
          newDifficultyScore += 10;
        }

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

  return { problem, getNewProblem, updateStatsOnAnswer, updateStatsOnSkip };
}
