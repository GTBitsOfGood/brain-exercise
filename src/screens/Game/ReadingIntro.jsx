import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { Audio } from 'expo-av';
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";
import Text from "../../components/Text";
import Button from "../../components/Button";
import styles from '../../styles/intro';

const sound = require('../../assets/reading.mp3');
const image = require("../../assets/Reading_Icon.png");

function ReadingIntro({ navigation, route }) {
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
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.instructions}>
        <Text style={styles.headInstruction}>
          Read the following passage aloud
        </Text>
        <Text style={styles.instructions}>Total time: 10 minutes</Text>
      </View>
      <Button
        title="Start Reading"
        onPress={() => navigation.navigate("ReadingMain", { shouldReturn: route.params ? route.params.shouldReturn : false })}
      />
    </View>
  );
}

ReadingIntro.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default ReadingIntro;
