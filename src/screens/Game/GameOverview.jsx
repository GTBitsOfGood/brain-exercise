import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import Text from "../../components/Text";
import "react-native-gesture-handler";

const sound = require("../../assets/intro.mp3");

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 100,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});

function GameOverview({ navigation }) {
  const soundObject = new Audio.Sound();

  useEffect(() => {
    async function play() {
      const storedSettings = await AsyncStorage.getItem("SETTINGS");
      const settings = await JSON.parse(storedSettings);
      if (settings.voiceOverOn) {
        await soundObject.loadAsync(sound);
        await soundObject.playAsync();
      }
    }
    play();
    return () => {
      soundObject.unloadAsync();
    };
  }, []);

  return (
    <View style={styles.root}>
      <Text style={styles.text}>
        You will be completing a mixture of Math, Reading, and Writing
        exercises.
      </Text>
      <Button
        title="Begin"
        onPress={() => {
          soundObject.stopAsync();
          navigation.navigate("MathIntro", { nextScreen: "TriviaIntro" });
        }}
      />
    </View>
  );
}

GameOverview.propTypes = {
  navigation: PropTypes.object,
};

export default GameOverview;
