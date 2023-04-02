import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Audio } from 'expo-av';
import ConfettiCannon from "react-native-confetti-cannon";
import PropTypes from "prop-types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { incrementStreak } from "../../scripts/progressbar-logic";
import Button from "../../components/Button";
import Text from "../../components/Text";

const sound = require('../../assets/congrats.mp3');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
  },
  goodWork: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  message: {
    fontSize: 23,
    textAlign: "center",
    marginVertical: 20,
  },
});

const getCount = async () => {
  const storedSettings = await AsyncStorage.getItem("SETTINGS")
  const settings = await JSON.parse(storedSettings)
  return settings.animationOn ? 200 : 0
}

function ExercisesCompleted({ navigation }) {
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

  useEffect(() => {
    incrementStreak();
  }, []);

  const [count, setCount] = React.useState(200)
  getCount().then(ct => {
    setCount(ct)
  }).catch(err => console.log(err))

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ConfettiCannon
        count={count}
        origin={{ x: -10, y: 0 }}
        autoStart={true}
        fadeOut={false}
      />
      <View style={styles.root}>
        <Text style={styles.goodWork}>Great work!</Text>
        <Text style={styles.message}>
          You have completed today&apos;s exercises
        </Text>
        <Button
          title="Finish"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("FinishedScreen")}
        />
      </View>
    </View>
  );
}

ExercisesCompleted.propTypes = {
  navigation: PropTypes.object,
};

export default ExercisesCompleted;
