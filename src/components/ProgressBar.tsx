/* eslint-disable no-param-reassign */
import { useEffect, useState, MutableRefObject } from "react";
import { View, Text } from "react-native";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { RemainingTimeGetter } from "../types";

interface Props {
  maxSeconds: number;
  redThreshold: number;
  onTimeComplete?: () => void;
  remainingTimeRef?: MutableRefObject<RemainingTimeGetter>;
}

export default function ProgressBar({
  maxSeconds,
  redThreshold,
  onTimeComplete,
  remainingTimeRef,
}: Props) {
  const [remainingTime, setRemainingTime] = useState(maxSeconds);
  const paused = useSelector<RootState>(
    (state) => state.paused.paused,
  ) as boolean;

  useEffect(() => {
    if (remainingTimeRef) {
      remainingTimeRef.current = { getRemainingTime: () => remainingTime };
    }
  }, [remainingTimeRef, remainingTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime <= 0) {
        clearInterval(timer);
        if (onTimeComplete) {
          onTimeComplete();
        }
      } else if (!paused) {
        setRemainingTime(remainingTime - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [remainingTime, setRemainingTime, paused, onTimeComplete]);

  const seconds = remainingTime % 60;
  const minutes = Math.floor(remainingTime / 60);
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 40, paddingBottom: 5 }}>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </Text>
      <Progress.Bar
        progress={1 - remainingTime / maxSeconds}
        width={375}
        height={20}
        borderRadius={10}
        color={remainingTime < redThreshold ? "red" : "#005AA3"}
      />
    </View>
  );
}
