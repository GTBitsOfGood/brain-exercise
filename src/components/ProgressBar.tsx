/* eslint-disable no-param-reassign */
import { Dispatch, SetStateAction, useEffect } from "react";
import { View, Text } from "react-native";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";

interface Props {
  maxSeconds: number,
  remainingTime: number,
  setRemainingTime: Dispatch<SetStateAction<number>>,
  redThreshold: number,
  onTimeComplete: () => void,
}

export default function ProgressBar({ maxSeconds, remainingTime, setRemainingTime, redThreshold, onTimeComplete }: Props) {
  const paused = useSelector<RootState>((state) => state.paused.paused);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime <= 0) {
        clearInterval(timer);
        onTimeComplete();
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
        {minutes}:{(seconds).toString().padStart(2, "0")}
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