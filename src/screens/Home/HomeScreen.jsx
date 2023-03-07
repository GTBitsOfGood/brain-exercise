import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import StepIndicator from "react-native-step-indicator";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useFocusEffect } from "@react-navigation/native";
import { getStreak } from "../../scripts/progressbar-logic";
import Text from "../../components/Text";
import Button from "../../components/Button";
import LoginButton from "../../components/Auth/LoginButton";
import LogoutButton from "../../components/Auth/LogoutButton";
import { useAuth0 } from "react-native-auth0";
import defaultSettings from "../../components/DefaultSettings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { incrementStreak } from "../../scripts/progressbar-logic";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    marginVertical: 8,
    color: "#4A4B57",
  },
  squareButton: {
    width: Platform.isPad ? 150 : 99,
    height: Platform.isPad ? 150 : 99,
    backgroundColor: "white",
    borderColor: "#005AA3",
    borderWidth: 5,
    borderRadius: 25,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
  },
  buttonTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  squareButtonTitle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "400",
  },
  imageContainer: {
    flex: 2,
    width: "100%",
    height: 150,
    borderRadius: 2,
    flexDirection: "column",
    padding: 8,
  },
  image: {
    alignSelf: "center",
    width: Dimensions.get("window").width - 50,
    height: Platform.isPad ? 400 : Dimensions.get("window").height * 0.2,
    resizeMode: "contain",
  },
});

const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 8,
  separatorStrokeUnfinishedWidth: 8,
  separatorStrokeFinishedWidth: 8,
  stepStrokeWidth: 0,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: "#005AA3",
  stepStrokeFinishedColor: "#005AA3",
  stepStrokeUnfinishedColor: "#005AA3",
  separatorFinishedColor: "#005AA3",
  separatorUnFinishedColor: "#dbdbdb",
  stepIndicatorFinishedColor: "#005AA3",
  stepIndicatorUnFinishedColor: "#dbdbdb",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnfinishedColor: "#000000",
};

const logo = require("../../assets/bei.jpg");

//  Home Screen Navigation
function HomeScreen({ navigation }) {
  const [settings, setSettings] = useState(defaultSettings);
  const [streak, setStreak] = useState(0);
  const [message, setMessage] = useState("");
  const { user } = useAuth0();

  const onGetStreakComplete = (retrievedStreak) => {
    let m;
    if (retrievedStreak === 0) {
      m = "Let's Get Started!";
    } else if (retrievedStreak < 5) {
      m = "Keep Going!";
    } else if (retrievedStreak === 5) {
      m = "Well Done!";
    }
    setStreak(retrievedStreak);
    setMessage(m);
  };

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      getStreak(onGetStreakComplete);
      const fetchSettings = async () => {
        const storedSettings = await AsyncStorage.getItem("SETTINGS");
        storedSettings !== null
          ? setSettings(JSON.parse(storedSettings))
          : null;
      };
      fetchSettings();
    }, [])
  );

  const youtubeChannelURL =
    "https://www.youtube.com/channel/UCDl_hKWzF26lNEg73FNVgtA";

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{`${
        streak < settings.streakLength ? streak : settings.streakLength
      } of ${settings.streakLength} Days`}</Text>

      <StepIndicator
        customStyles={customStyles}
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
        !user ? (
          <LoginButton
            onUserNotFound={() => navigation.navigate("SignUpScreen")}
          ></LoginButton>
        ) : (
          <LogoutButton />
        )
      }

      <View style={styles.buttonsContainer}>
        <View>
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => navigation.navigate("SettingsScreen")}
          >
            <FeatherIcon size={Platform.isPad ? 60 : 45} name="settings" />
          </TouchableOpacity>
          <Text style={styles.squareButtonTitle}>{"Settings"}</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.squareButton}
            onPress={() => Linking.openURL(youtubeChannelURL)}
          >
            <FeatherIcon size={Platform.isPad ? 60 : 45} name="youtube" />
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
