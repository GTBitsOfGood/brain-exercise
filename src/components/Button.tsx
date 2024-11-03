import { Platform } from "react-native";
import { Button as BaseButton, ButtonProps } from "react-native-elements";
import { GestureResponderEvent } from "react-native-modal";
import { AVPlaybackSource } from "expo-av";
import useSound from "../hooks/useSound";
import { SoundSetting } from "../types";

const sound = require("../assets/button.mp3") as AVPlaybackSource;

interface Props extends ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  shouldNotPlay?: boolean;
  color?: string;
  adjustedSize?: number;
}

const Button = ({
  title,
  onPress,
  shouldNotPlay = false,
  color = "#005AA3",
  adjustedSize = 0,
  ...buttonProps
}: Props) => {
  const { playSound } = useSound(sound, SoundSetting.soundEffectsOn, false);
  return (
    <BaseButton
      title={title}
      {...buttonProps}
      onPress={(e) => {
        onPress(e);
        if (!shouldNotPlay) {
          playSound();
        }
      }}
      titleStyle={[
        {
          fontSize: Platform.OS === "ios" && Platform.isPad ? 28 : 20,
        },
        buttonProps.titleStyle,
      ]}
      buttonStyle={[
        {
          alignSelf: "center",
          marginVertical: 2,
          width:
            Platform.OS === "ios" && Platform.isPad
              ? 600
              : 300 * (adjustedSize === 0 ? 1 : 0) +
                (adjustedSize === 0 ? 0 : adjustedSize),
          height: Platform.OS === "ios" && Platform.isPad ? 100 : 60,
          borderRadius: 5,
          backgroundColor: color,
        },
        buttonProps.buttonStyle,
      ]}
    />
  );
};

export default Button;
