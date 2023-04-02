import React, { useEffect } from "react";
import { Button as BaseButton } from "react-native-elements";
import PropTypes from "prop-types";
import { Audio } from "expo-av";
import { Platform } from "react-native";
import useSoundSetting from "../scripts/useSoundSetting";

const sound = require("../assets/button.mp3");

const Button = (props) => {
  const soundObject = new Audio.Sound();
  const shouldPlay =
    useSoundSetting() !== null && useSoundSetting().soundEffectsOn;
  useEffect(() => {
    (async() => {
      console.log(`soundObject: ${soundObject}`);
      await soundObject.loadAsync(sound);
      return () => {
        soundObject.unloadAsync();
      };
    })
  });
  return (
    <BaseButton
      {...props}
      onPress={() => {
        props.onPress();
        if (shouldPlay && !props.shouldNotPlay) {
          try {
            soundObject.replayAsync();
            // Your sound is playing!
          } catch (error) {
            // An error occurred!
          }
        }
      }}
      titleStyle={[
        {
          fontSize: Platform.isPad ? 28 : 18,
        },
        props.titleStyle,
      ]}
      buttonStyle={[
        {
          alignSelf: "center",
          marginVertical: 2,
          width: Platform.isPad ? 600 : 300,
          height: Platform.isPad ? 100 : 60,
          borderRadius: 5,
          backgroundColor: "#005AA3",
        },
        props.buttonStyle,
      ]}
    >
      {props.children}
    </BaseButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  buttonStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  onPress: PropTypes.func,
  shouldNotPlay: PropTypes.bool,
};

export default Button;
