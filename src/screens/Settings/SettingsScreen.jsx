import React, { useState, useEffect } from "react";
import { View, Switch, TouchableOpacity, Linking } from "react-native";
// import { Notifications } from "expo";
import * as Notifications from "expo-notifications";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import Text from "../../components/Text";
import defaultSettings from "../../components/DefaultSettings";
import SettingsStyle from "../../styles/settings";
import { Slider } from "react-native-elements";
import '@fontsource/poppins';
import TimePicker from "./TimePicker";

const termsURL = "https://gtbitsofgood.github.io/brain-exercise/terms/";
const privacyURL = "https://gtbitsofgood.github.io/brain-exercise/privacy/";

/**
 * Takes in a settings object and stores it in Async Storage.
 * @param {Object} settingsObj A settings object
 */
const storeSettings = async (settingsObj) => {
  const jsonSettings = JSON.stringify(settingsObj);
  await AsyncStorage.setItem("SETTINGS", jsonSettings);
};

/**
 * Pulls an object containing the app settings from Async Storage and returns it.
 * If no settings exist in Async Storage, default settings are pushed and returned.
 */
const pullSettings = async () => {
  const jsonSettings = await AsyncStorage.getItem("SETTINGS");
  if (jsonSettings !== null) {
    const result = await JSON.parse(jsonSettings);
    return result;
  }
  return defaultSettings;
};

const {
  root,
  notifications,
  notificationChildren,
  text,
  section,
  subtext,
  timeButton,
  icon,
  rowInfo,
  touchableRow,
  buttonText,
  thumbStyle,
  trackStyle,
  slider,
  minSize,
  maxSize,
} = SettingsStyle;

// Settings Navigation
function SettingsScreen({ navigation }) {
  const [settings, setSettings] = useState(defaultSettings);
  const [toggleOn, setToggleOn] = useState(settings.notificationsActive);
  const [animationToggleOn, setAnimationToggleOn] = useState(
    settings.animationOn,
  );
  const [fontSize, setFontSize] = useState(settings.fontSize);
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [soundEffectsToggleOn, setSoundEffectsToggleOn] = useState(
    settings.soundEffectsOn || defaultSettings.soundEffectsOn,
  );
  const [voiceOverToggleOn, setVoiceOverToggleOn] = useState(
    settings.voiceOverOn || defaultSettings.voiceOverOn,
  );

  const setSoundEffectsToggleOnWrapper = async () => {
    setSoundEffectsToggleOn(!soundEffectsToggleOn);
    settings.soundEffectsOn = !soundEffectsToggleOn;
    const jsonSettings = JSON.stringify(settings);
    //console.log(settings.soundEffectsOn)
    await AsyncStorage.setItem("SETTINGS", jsonSettings);
  }

  const setVoiceOverToggleOnWrapper = async () => {
    setVoiceOverToggleOn(!voiceOverToggleOn);
    settings.voiceOveron = !voiceOverToggleOn;
    const jsonSettings = JSON.stringify(settings);
    //console.log(settings.soundEffectsOn)
    await AsyncStorage.setItem("SETTINGS", jsonSettings);
  }

  const setAnimationOnWrapper = async () => {
    setAnimationToggleOn(!animationToggleOn);
    settings.animationOn = !animationToggleOn;
    const jsonSettings = JSON.stringify(settings);
    //console.log(settings.soundEffectsOn)
    await AsyncStorage.setItem("SETTINGS", jsonSettings);
  }

  useEffect(() => {
    updateFontSize();
  }, [fontSize]);

  const updateFontSize = async () => {
    settings.fontSize = fontSize;
    await storeSettings(settings);
  }

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      pullSettings()
        .then((item) => {
          setSettings(item);
          setToggleOn(item.notificationsActive);
          setAnimationToggleOn(item.animationOn);
        })
        .catch((err) => console.log(err));
    }, []),
  );

  function getDate() {
    const dateObj = new Date(settings.scheduledTime);
    const date = dateObj
      .toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
      .replace(/^(?:00:)?0?/, "");
    return date;
  }

  const toggleSwitch = () => {
    if (toggleOn) {
      // going from enabled to disabled
      Notifications.cancelAllScheduledNotificationsAsync();
      setToggleOn(false);
      settings.notificationsActive = false;
    } else {
      // going from disabled to enabled
      setToggleOn(true);
      settings.notificationsActive = true;
    }
    storeSettings(settings);
  };

  const toggleAnimations = () => {
    if (animationToggleOn) {
      // going from enabled to disabled
      setAnimationToggleOn(false);
      settings.animationOn = false;
    } else {
      setAnimationToggleOn(true);
      settings.animationOn = true;
    }
    storeSettings(settings);
  };

  return (
    <View style={root}>
      <View style={section}>
        <View style={notifications}>
          <Text style={text}>Notifications</Text>
        </View>
        <View style={notificationChildren}>
          <Text style={subtext}>Daily Reminders (Mon-Fri)</Text>
          <Switch
            trackColor={{ false: "#ffffff", true: "#05cd99" }}
            onValueChange={toggleSwitch}
            value={toggleOn}
            accessibilityRole="switch"
          />
        </View>
        {toggleOn && (
          <View style={notificationChildren}>
            <Text style={subtext}>Daily Reminder Time</Text>
            <Button
              title={getDate()}
              titleStyle={buttonText}
              type="outline"
              buttonStyle={timeButton}
              onPress={() => setTimePickerOpen(true)}
            />
            <TimePicker open = {timePickerOpen} setOpen = {setTimePickerOpen} route={{ params: settings }} />
          </View>
        )}
      </View>
      <View style={section}>
        <View style={rowInfo}>
          <Text style={text}>Font Size</Text>
        </View>
        <View style={rowInfo}>
          <Text style={minSize}>Aa</Text>
          <Slider
            style={slider}
            thumbStyle={thumbStyle}
            trackStyle={trackStyle}
            allowTouchTrack={true}
            minimumValue={16}
            maximumValue={32}
            step={1}
            onValueChange={(v) => setFontSize(v)}
            value={fontSize}
          />
          <Text style={maxSize}>Aa</Text>
        </View>
      </View>
      
      <View style={section}>
        <View style={notifications}>
        <Text style={text}>Sound</Text>
        </View>
          <View style={notificationChildren}>
          <Text style={subtext}>Sound Effects</Text>
          <Switch
            trackColor={{ false: "#ffffff", true: "#05cd99" }}
            onValueChange={setSoundEffectsToggleOnWrapper}
            value={soundEffectsToggleOn}
            accessibilityRole="switch"
          />
        </View>
        <View style={notificationChildren}>
          <Text style={subtext}>Voice Over</Text>
          <Switch
            trackColor={{ false: "#ffffff", true: "#05cd99" }}
            onValueChange={setVoiceOverToggleOn}
            value={voiceOverToggleOn}
            accessibilityRole="switch"
          />
          
        </View>
      </View>
      <View style={section}>
        <View style={notifications}>
        <Text style={text}>Animation</Text>
        </View>
          <View style={notificationChildren}>
          <Text style={subtext}>Enable In-App Animation</Text>
          <Switch
            trackColor={{ false: "#ffffff", true: "#05cd99" }}
            onValueChange={toggleAnimations}
            value={animationToggleOn}
            accessibilityRole="switch"
          />
          
        </View>
      </View>
    </View>
  );
}

SettingsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SettingsScreen;