import React from "react";
import { AVPlaybackSource } from "expo-av";
import { ImageSourcePropType, View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import "react-native-gesture-handler";

import Button from "../Button";
import Text from "../Text";
import useSound from "../../hooks/useSound";
import { NavigationArgs, RootStackParamList, SoundSetting } from "../../types";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    backgroundColor: "white",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 225,
    height: 225,
  },
  description: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 25,
  },
  subDescription: {
    fontSize: 18,
    textAlign: "center",
  },
  timeText: {
    fontSize: 20,
    paddingTop: 70,
    textAlign: "center",
  },
});

type Props = {
  sound: AVPlaybackSource;
  image: ImageSourcePropType;
  description: string;
  time: number;
  buttonTitle: string;
  subDescription?: string;
  navigationArgs: NavigationArgs;
};

function IntroOverlay({
  sound,
  image,
  description,
  time,
  buttonTitle,
  subDescription,
  navigationArgs,
}: Props) {
  const { unloadSound } = useSound(sound, SoundSetting.voiceOverOn);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <Text style={styles.description}>{description}</Text>
      </View>
      {subDescription && (
        <Text style={styles.subDescription}>{subDescription}</Text>
      )}
      <Text style={styles.timeText}>{`Total time: ${time} minutes`}</Text>
      <Button
        title={buttonTitle}
        onPress={() => unloadSound() && navigation.navigate(...navigationArgs)}
        buttonStyle={{ marginBottom: 40 }}
      />
    </View>
  );
}

export default IntroOverlay;
