import React, { useState, useEffect } from "react";
import { View, Switch, TouchableOpacity, Linking } from "react-native";
// import { Notifications } from "expo";
import * as Notifications from "expo-notifications";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import Text from "../../components/Text";
import defaultSettings from "../../components/DefaultSettings";
import SettingsStyle from "../../styles/settings";
import { Slider } from "react-native-elements";
import '@fontsource/poppins';
import TimePicker from "./TimePicker";
import HomeIcon from "../../assets/HomeIcon";
import ProfileIcon from "../../assets/ProfileIcon";
import SettingsIcon from "../../assets/SettingsIcon";
import LogoutModal from "./LogoutModal";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

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
  footerContainer,
  rowInfo,
  footerButton,
  buttonText,
  thumbStyle,
  trackStyle,
  slider,
  footerTextSelected,
  footerTextUnselected,
  headerText,
  header,
  logoutOpenButton,
  layout,
} = SettingsStyle;

// Settings Navigation
function SettingsScreen({ navigation }) {
  const [settings, setSettings] = useState(null);
  const [toggleOn, setToggleOn] = useState(null);
  const [animationToggleOn, setAnimationToggleOn] = useState(
    null
  );
  const [volume, setVolume] = useState(null);
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const [soundEffectsToggleOn, setSoundEffectsToggleOn] = useState(
    null
  );
  const [voiceOverToggleOn, setVoiceOverToggleOn] = useState(
    null
  );

  const setSoundEffectsToggleOnWrapper = async () => {
    setSoundEffectsToggleOn(!soundEffectsToggleOn);
    settings.soundEffectsOn = !soundEffectsToggleOn;
    if(settings.soundEffectsOn) {
      setVolume(1);
    }
    
    const jsonSettings = JSON.stringify(settings);
    await AsyncStorage.setItem("SETTINGS", jsonSettings);
  }

  const setVoiceOverToggleOnWrapper = async () => {
    setVoiceOverToggleOn(!voiceOverToggleOn);
    settings.voiceOveron = !voiceOverToggleOn;
    const jsonSettings = JSON.stringify(settings);
    await AsyncStorage.setItem("SETTINGS", jsonSettings);
  }

  const setAnimationOnWrapper = async () => {
    setAnimationToggleOn(!animationToggleOn);
    settings.animationOn = !animationToggleOn;
    const jsonSettings = JSON.stringify(settings);
    await AsyncStorage.setItem("SETTINGS", jsonSettings);
  }

  useEffect(() => {
    pullSettings()
      .then((item) => {
        if (item === null) {
          setSettings(defaultSettings);
          setToggleOn(defaultSettings.notificationsActive);
          setAnimationToggleOn(defaultSettings.animationOn);
          setVolume(defaultSettings.volume);
          setSoundEffectsToggleOn(defaultSettings.soundEffectsOn);
          setVoiceOverToggleOn(defaultSettings.voiceOverOn);
        } else {
          setSettings(item);
          setToggleOn(item.notificationsActive);
          setAnimationToggleOn(item.animationOn);
          setSoundEffectsToggleOn(item.soundEffectsOn);
          setVoiceOverToggleOn(item.voiceOverOn);
          setVolume(item.soundEffectsOn ? 1 : item.volume);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    updateVolume();
  }, [volume, soundEffectsToggleOn]);

  const updateVolume = async () => {
    if (settings !== null) {
      settings.volume = volume;
      await storeSettings(settings);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
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
      Notifications.cancelAllScheduledNotificationsAsync();
      setToggleOn(false);
      settings.notificationsActive = false;
    } else {
      setToggleOn(true);
      settings.notificationsActive = true;
    }
    storeSettings(settings);
  };

  const toggleAnimations = () => {
    if (animationToggleOn) {
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
      <View style={layout}>
      <View>
      <View>
        <View style={header}>
          <Text style={headerText}>Settings</Text>
          <Button style={logoutOpenButton}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                }}
                title="Log Out"
                onPress={() => setLogoutModalOpen(true)}
          />
        </View>
        <LogoutModal open = {logoutModalOpen} setOpen = {setLogoutModalOpen} route={{ params: settings }} />
        </View>
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
      </View>    
      <View style={section}>
        <View style={notifications}>
        <Text style={text}>Sound</Text>
        </View>
          <View style={notificationChildren}>
          <Text style={subtext}>Mute In-App Sound Effects</Text>
          <Switch
            trackColor={{ false: "#ffffff", true: "#05cd99" }}
            onValueChange={setSoundEffectsToggleOnWrapper}
            value={soundEffectsToggleOn}
            accessibilityRole="switch"
          />
        </View>
        <View style={rowInfo}>
        <FontAwesome5 name="volume-down" size={30} color="#2B3674" />
          <Slider
            style={slider}
            thumbStyle={thumbStyle}
            trackStyle={trackStyle}
            allowTouchTrack={true}
            minimumValue={1}
            maximumValue={16}
            step={1}
            onValueChange={(v) => setVolume(v)}
            value={volume}
          />
          <FontAwesome5 name="volume-up" size={30} color="#2B3674" />
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
      <View style={footerContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          style={footerButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <HomeIcon color="#9CA5C2" ></HomeIcon>
          <Text style={footerTextUnselected}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          style={footerButton}
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <ProfileIcon props={undefined}></ProfileIcon>
          <Text style={footerTextUnselected}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          style={footerButton}
        >
          <SettingsIcon color="#008AFC"></SettingsIcon>
          <Text style={footerTextSelected}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

SettingsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SettingsScreen;