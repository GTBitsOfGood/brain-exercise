import React, { useState } from "react";
import { View, Switch, TouchableOpacity, Linking } from "react-native";
import { Notifications } from "expo";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import Text from "../../components/Text";
import defaultSettings from "../../components/DefaultSettings"
import SettingsStyle from "../../styles/settings";

const termsURL = 'https://gtbitsofgood.github.io/brain-exercise/terms/';
const privacyURL = 'https://gtbitsofgood.github.io/brain-exercise/privacy/';

/**
 * Takes in a settings object and stores it in Async Storage.
 * @param {Object} settingsObj A settings object
 */
const storeSettings = async (settingsObj) => {
  const jsonSettings = JSON.stringify(settingsObj)
  await AsyncStorage.setItem("SETTINGS", jsonSettings)
}

/**
 * Pulls an object containing the app settings from Async Storage and returns it.
 * If no settings exist in Async Storage, default settings are pushed and returned.
 */
const pullSettings = async () => {
  const jsonSettings = await AsyncStorage.getItem("SETTINGS")
  if (jsonSettings !== null) {
     const result = await JSON.parse(jsonSettings);
     return result;
  }
  return defaultSettings
}

const {
  root,
  notifications,
  notificationChildren,
  text,
  section,
  subtext,
  animationRow,
  timeButton,
  icon,
  rowInfo,
  firstSection,
  touchableRow
} = SettingsStyle

// Settings Navigation
function SettingsScreen({ navigation }) {
  const [settings, setSettings] = useState(defaultSettings);
  const [toggleOn, setToggleOn] = useState(settings.notificationsActive);
  const [animationToggleOn, setAnimationToggleOn] = useState(settings.animationOn)

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      pullSettings()
      .then((item) => {
        setSettings(item)
        setToggleOn(item.notificationsActive)
        setAnimationToggleOn(item.animationOn)
      });
    }, [])
  );

  function getDate() {
    const dateObj = new Date(settings.scheduledTime);
    const date = dateObj.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}).replace(/^(?:00:)?0?/, '');
    return date;
  }

  const toggleSwitch = () => {
    if (toggleOn) {
      // going from enabled to disabled
      Notifications.cancelAllScheduledNotificationsAsync();
      setToggleOn(false);
      settings.notificationsActive = false
    } else {
      // going from disabled to enabled
      setToggleOn(true);
      settings.notificationsActive = true
    }
    storeSettings(settings)
  }

  const toggleAnimations = () => {
    if (animationToggleOn) {
      // going from enabled to disabled
      setAnimationToggleOn(false)
      settings.animationOn = false
    } else {
      setAnimationToggleOn(true)
      settings.animationOn = true
    }
    storeSettings(settings)
  }

  return (
    <View style={root}>
      <View style={[section, firstSection]}>
        <View style={notifications}>
          <Icon size={30} style={icon} name="notifications-none" />
          <Text style={text}>Notifications</Text>
        </View>
      </View>
      <View style={section}>
        <View style={notificationChildren}>
          <Text style={subtext}>Daily Reminders</Text>
          <Switch
            trackColor={{ false: "#ffffff", true: "#2a652c" }}
            onValueChange={toggleSwitch}
            value={toggleOn}
            accessibilityRole="switch"
          />
        </View>
        { toggleOn &&
          <View style={notificationChildren}>
            <Text style={subtext}>Reminder Time</Text>
            <Button
              title={getDate()}
              type="outline"
              buttonStyle={timeButton}
              onPress={() => navigation.navigate("TimePicker", settings)}
            />
          </View> }
      </View>
      <View style={section}>
        <TouchableOpacity
          style={touchableRow}
          onPress={() => navigation.navigate("FontSize", settings)}
        >
          <View style={rowInfo}>
            <Icon size={30} style={icon} name="format-size" />
            <Text style={text}>Font Size</Text>
          </View>
          <Icon size={42} style={icon} name="chevron-right" />
        </TouchableOpacity>
      </View>
      <View style={section}>
        <TouchableOpacity
          style={touchableRow}
          onPress={() => navigation.navigate("SoundScreen", settings)}
        >
          <View style={rowInfo}>
            <Icon size={30} style={icon} name="volume-up" />
            <Text style={text}>Sound</Text>
          </View>
          <Icon size={42} style={icon} name="chevron-right" />
        </TouchableOpacity>
      </View>
      <View style={section}>
        <View style={animationRow}>
          <View style={rowInfo}>
            <Icon size={30} style={icon} name="play-arrow" />
            <Text style={text}>Animation</Text>
          </View>
          <Switch
            trackColor={{ false: "#ffffff", true: "#2a652c" }}
            onValueChange={() => toggleAnimations()}
            value={animationToggleOn}
            accessibilityRole="switch"
          />
        </View>
      </View>
      <View style={section}>
        <TouchableOpacity
          style={touchableRow}
          onPress={() => Linking.openURL(termsURL)}
        >
          <View style={rowInfo}>
            <Icon size={30} style={icon} name="content-copy" />
            <Text style={text}>Terms and Conditions</Text>
          </View>
          <Icon size={42} style={icon} name="chevron-right" />
        </TouchableOpacity>
      </View>
      <View style={section}>
        <TouchableOpacity
          style={touchableRow}
          onPress={() => Linking.openURL(privacyURL)}
        >
          <View style={rowInfo}>
            <Icon size={30} style={icon} name="lock" />
            <Text style={text}>Privacy Policy</Text>
          </View>
          <Icon size={42} style={icon} name="chevron-right" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

SettingsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SettingsScreen;
