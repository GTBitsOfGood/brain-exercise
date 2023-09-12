import { useState, useCallback } from "react";
import getStoryArray from "../assets/stories";

export default function useReadingProblems({ navigation, route }) {
  const [storyArray, setStoryArray] = useState(getStoryArray());
  const [page, setPage] = useState(0);
  const [passagesRead, setPassagesRead] = useState(0);
  const [skipped, setSkipped] = useState(false);

  const incrementPassagesRead = useCallback(() => {
    setPassagesRead((prev) => prev + 1);
  }, []);

  const nextParagraph = () => {
    if (storyArray.length - 1 === page) {
      setStoryArray(getStoryArray());
      setPage(0);
    } else {
      setPage(page + 1);
    }
    incrementPassagesRead();
  };

  const paragraph = storyArray[page];

  const onTimeComplete = useCallback(() => {
    const statistics = { passagesRead, completed: !skipped };
    // checking that statistics are correct:
    console.log("statistics: ", statistics);
    console.log("completed: ", statistics.completed);
    console.log("passagesRead: ", statistics.passagesRead);
    navigation.navigate(...route.params.nextScreenArgs);
  }, [navigation, route.params.nextScreenArgs, skipped, passagesRead]);

  return {
    paragraph,
    nextParagraph,
    onTimeComplete,
    setSkipped,
  };
}
