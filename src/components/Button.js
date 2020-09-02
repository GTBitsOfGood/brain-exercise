import React, { useEffect } from "react";
import { Button as BaseButton } from "react-native-elements";
import PropTypes from 'prop-types';
import { Audio } from 'expo-av';
import useSoundSetting from "../scripts/useSoundSetting";

const sound = require('../assets/button.mp3');

const Button = (props) => {
    const soundObject = new Audio.Sound();
    const shouldPlay = useSoundSetting().soundEffectsOn;
    useEffect(() => {
        soundObject.loadAsync(sound);
        return () => {
            soundObject.unloadAsync();
        };
    });
    return (
    <BaseButton {...props}
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
        buttonStyle={[{
            alignSelf: "center",
            marginVertical: 10,
            width: 300,
            height: 60,
            borderRadius: 5,
            backgroundColor: "#005AA3",
    }, props.buttonStyle]}>
        {props.children}
    </BaseButton>
)};

Button.propTypes = {
    children: PropTypes.string,
    buttonStyle: PropTypes.object,
    onPress: PropTypes.func,
    shouldNotPlay: PropTypes.bool,
};

export default Button;
