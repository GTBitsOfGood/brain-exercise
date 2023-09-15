import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Image, TouchableOpacity, Linking } from "react-native";
import PropTypes from "prop-types";
import { useAuth0 } from "react-native-auth0";
import AsyncStorage from "@react-native-async-storage/async-storage";
import StepIndicator from "react-native-step-indicator";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useFocusEffect } from "@react-navigation/native";

import { getStreak } from "../../scripts/progressbar-logic";
import Text from "../../components/Text";
import Button from "../../components/Button";
import LoginButton from "../../components/Auth/LoginButton/LoginButton";
import LogoutButton from "../../components/Auth/LogoutButton";
import defaultSettings from "../../components/DefaultSettings";
import { styles, streakStyles } from "./HomeScreen.styles";

const logo = require("../../assets/bei.jpg");

//  Home Screen Navigation
function HomeScreen({ navigation }) {
  const [settings, setSettings] = useState(defaultSettings);
  const [streak, setStreak] = useState(0);
  const { user } = useAuth0();

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      getStreak().then((retrievedStreak) => setStreak(retrievedStreak));
      const fetchSettings = async () => {
        const storedSettings = await AsyncStorage.getItem("SETTINGS");
        if (storedSettings) setSettings(JSON.parse(storedSettings));
      };
      fetchSettings();
    }, []),
  );

  let message: string;
  if (streak === 0) {
    message = "Let's Get Started!";
  } else if (streak < 5) {
    message = "Keep Going!";
  } else if (streak === 5) {
    message = "Well Done!";
  }

  const youtubeChannelURL =
    "https://www.youtube.com/channel/UCDl_hKWzF26lNEg73FNVgtA";

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{`${
        streak < settings.streakLength ? streak : settings.streakLength
      } of ${settings.streakLength} Days`}</Text>

      <StepIndicator
        customStyles={streakStyles}
        currentPosition={
          streak < settings.streakLength ? streak : settings.streakLength
        }
        stepCount={settings.streakLength}
      />

      <Text style={styles.title}>{message}</Text>
      {/* Home Screen Step Indicator */}

      <Image style={styles.image} source={logo} />

      {/* Home Screen Navigation Buttons: */}

      <Button
        titleStyle={styles.buttonTitle}
        title="Start Exercises"
        onPress={() => navigation.navigate("GameOverview")}
      />

      {
        // if user is null, show login button, else show logout button
        !user ? <LoginButton navigation={navigation}/> : <LogoutButton />
      }

      <View style={styles.buttonsContainer}>
        <View>
          <TouchableOpacity
            accessibilityRole="none"
            style={styles.squareButton}
            onPress={() => navigation.navigate("SettingsScreen")}
          >
            <FeatherIcon style={styles.icon} name="settings" />
          </TouchableOpacity>
          <Text style={styles.squareButtonTitle}>{"Settings"}</Text>
        </View>

        <View>
          <TouchableOpacity
            accessibilityRole="none"
            style={styles.squareButton}
            onPress={() => Linking.openURL(youtubeChannelURL)}
          >
            <FeatherIcon style={styles.icon} name="youtube" />
          </TouchableOpacity>
          <Text style={styles.squareButtonTitle}>{"Video"}</Text>
        </View>
      </View>
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
