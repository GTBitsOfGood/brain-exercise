import { useState, useCallback, useRef } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import getStoryArray from "../assets/stories";
import { HttpMethod, RootStackParamList } from "../types";
import { updateLastSessionsMetricsState } from "../redux/reducers/gameDetailsReducer";
import { internalRequest } from "../requests";
import gameDescriptions from "../screens/Stacks/gameDescriptions";

type Props = NativeStackScreenProps<RootStackParamList, "ReadingMain">;
const TOTAL_TIME = gameDescriptions.Reading.minutes * 60;

export default function useReadingProblems({ navigation, route }: Props) {
  const dispatch = useDispatch();
  const [storyArray, setStoryArray] = useState(getStoryArray());
  const [page, setPage] = useState(0);

  const stats = useRef({
    passagesRead: 0,
    wordsRead: 0,
  });
  const paragraph = storyArray[page];

  const nextParagraph = () => {
    stats.current.wordsRead = storyArray[page].split(/\s+/).length;
    if (storyArray.length - 1 === page) {
      setStoryArray(getStoryArray());
      setPage(0);
    } else {
      setPage(page + 1);
    }
    stats.current.passagesRead += 1;
  };

  const onTimeComplete = useCallback(
    (skipped: boolean) => {
      const averageTime =
        stats.current.passagesRead === 0 || skipped
          ? 0
          : TOTAL_TIME / stats.current.passagesRead;
      const statistics = {
        passagesRead: stats.current.passagesRead,
        completed: !skipped,
        wordsPerMinute: stats.current.wordsRead / TOTAL_TIME,
        timePerPassage: averageTime,
      };

      internalRequest({
        url: "/api/patient/analytics/record-reading",
        method: HttpMethod.POST,
        body: statistics,
        authRequired: true,
      });
      dispatch(
        updateLastSessionsMetricsState({
          reading: { attempted: true, ...statistics },
        }),
      );
      navigation.replace(route.params.nextScreenArgs[0], {
        subject: "reading",
      });
    },
    [navigation, route.params.nextScreenArgs, dispatch],
  );

  return {
    paragraph,
    nextParagraph,
    onTimeComplete,
  };
}
