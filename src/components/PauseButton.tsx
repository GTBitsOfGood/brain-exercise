/* eslint-disable no-param-reassign */
import { useCallback, MutableRefObject, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { GestureResponderEvent } from "react-native-modal";
import { TouchableOpacity, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { RootStackParamList, RemainingTimeGetter } from "../types";
import { pause } from "../redux/reducers/pauseReducer";

import { RootState } from "../redux/rootReducer";

type Props = {
  onPress?: (e: GestureResponderEvent) => void;
  maxSeconds: number;
  remainingTimeRef?: MutableRefObject<RemainingTimeGetter>;
  subject?: string;
};

export default function PauseButton({
  onPress,
  maxSeconds,
  remainingTimeRef,
  subject,
}: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const onPressButton = useCallback(
    async (e: GestureResponderEvent) => {
      if (onPress) {
        onPress(e);
      }
      dispatch(pause());
      navigation.navigate("Pause", { subject });

      // Need to implement: Change paused state with Redux
    },
    [onPress, navigation, dispatch, subject],
  );

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
      if (!paused) {
        setRemainingTime(remainingTime - 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [remainingTime, setRemainingTime, paused]);

  const seconds = remainingTime % 60;
  const minutes =
    remainingTime < 0
      ? Math.ceil(remainingTime / 60)
      : Math.floor(remainingTime / 60);

  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={{
        paddingHorizontal: 22,
        paddingVertical: 6,
        backgroundColor: "#E3EAFC",
        borderRadius: 12,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "32%",
        justifyContent: "space-between",
      }}
      onPress={onPressButton}
    >
      <FontAwesome5 name="pause" size={18} color="#2B3674" />
      <Text
        style={{
          color: "#2B3674",
          fontWeight: 500,
          fontSize: 20,
          marginLeft: 10,
        }}
      >
        {remainingTime < 0 ? `+${-minutes}` : minutes}:
        {remainingTime < 0
          ? (-seconds).toString().padStart(2, "0")
          : seconds.toString().padStart(2, "0")}
      </Text>
    </TouchableOpacity>
  );
}
