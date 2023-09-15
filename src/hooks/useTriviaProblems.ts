import { useCallback, useState } from "react";

export default function useTriviaProblems() {
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

    return {
      questionsAttempted,
      questionsCorrect,
      timePerQuestion: average
    };
  }, [questionsAttempted, questionsCorrect, totalTime]); 

  return { 
    updateStatsOnAnswer, 
    onTimeComplete
  };
}
