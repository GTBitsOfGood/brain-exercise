import { useState, useCallback } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import getStoryArray from "../assets/stories";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "ReadingMain">;

export default function useReadingProblems({ navigation, route }: Props) {
  const [storyArray, setStoryArray] = useState(getStoryArray());
  const [page, setPage] = useState(0);
  const [passagesRead, setPassagesRead] = useState(0);
  const paragraph = storyArray[page];

  const nextParagraph = () => {
    if (storyArray.length - 1 === page) {
      setStoryArray(getStoryArray());
      setPage(0);
    } else {
      setPage(page + 1);
    }
    setPassagesRead((prev) => prev + 1);
  };

  const onTimeComplete = useCallback(
    (skipped: boolean) => {
      const statistics = { passagesRead, completed: !skipped }; // eslint-disable-line
      navigation.replace(...route.params.nextScreenArgs);
    },
    [navigation, route.params.nextScreenArgs, passagesRead],
  );

  return {
    paragraph,
    nextParagraph,
    onTimeComplete,
  };
}
