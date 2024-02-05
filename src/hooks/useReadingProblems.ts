import { useState, useCallback } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import getStoryArray from "../assets/stories";
import { HttpMethod, RootStackParamList } from "../types";
import { completedReading } from "../redux/reducers/gameDetailsReducer";
import { internalRequest } from "../requests";
import gameDescriptions from "../screens/Stacks/gameDescriptions";
import { useEffect } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, "ReadingMain">;

export default function useReadingProblems({ navigation, route }: Props) {
  const dispatch = useDispatch();
  const [storyArray, setStoryArray] = useState(getStoryArray());
  const [page, setPage] = useState(0);
  const [passagesRead, setPassagesRead] = useState(0);
  const [wordsRead, setWordsRead] = useState(0);
  const paragraph = storyArray[page];
  const TOTAL_TIME = gameDescriptions.Reading.minutes * 60;
  
  const nextParagraph = () => {
    setWordsRead(storyArray[page].split(/\s+/).length);
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
      const averageTime =
        passagesRead === 0 || skipped ? 0 : TOTAL_TIME / passagesRead;
      const statistics = {
        passagesRead,
        completed: !skipped,
        wordsPerMinute: wordsRead / TOTAL_TIME,
        timePerPassage: averageTime,
      }; // eslint-disable-line
      internalRequest({
        url: "/api/patient/analytics/record-reading",
        method: HttpMethod.POST,
        body: statistics,
        authRequired: true,
      });
      dispatch(completedReading());
      navigation.replace(...route.params.nextScreenArgs);
    },
    [
      navigation,
      route.params.nextScreenArgs,
      passagesRead,
      dispatch,
      wordsRead,
      TOTAL_TIME,
    ],
  );

  return {
    paragraph,
    nextParagraph,
    onTimeComplete,
  };
}
