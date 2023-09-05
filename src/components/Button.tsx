import { Platform } from "react-native";
import { Button as BaseButton, ButtonProps } from "react-native-elements";
import { GestureResponderEvent } from "react-native-modal";
import useSound from "../hooks/useSound";
import { SoundSetting } from "../types";

const sound = require("../assets/button.mp3");

interface Props extends ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  shouldNotPlay?: boolean;
}

const Button = ({
  title,
  onPress,
  shouldNotPlay = false,
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
          width: Platform.OS === "ios" && Platform.isPad ? 600 : 300,
          height: Platform.OS === "ios" && Platform.isPad ? 100 : 60,
          borderRadius: 5,
          backgroundColor: "#005AA3",
        },
        buttonProps.buttonStyle,
      ]}
    />
  );
};

export default Button;
