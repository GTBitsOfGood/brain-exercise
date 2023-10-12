import { View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ConfettiCannon from "react-native-confetti-cannon";
import { AVPlaybackSource } from "expo-av";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Text from "../../components/Text";
import useAsyncStorage from "../../hooks/useAsyncStorage";
import {
  RootStackParamList,
  SoundSetting,
  Settings,
  HttpMethod,
} from "../../types";
import useSound from "../../hooks/useSound";
import { RootState } from "../../redux/rootReducer";
import { GameDetails } from "../../redux/reducers/gameDetailsReducer/types";
import { internalRequest } from "../../requests";
import { resetCompleted } from "../../redux/reducers/gameDetailsReducer";

const sound = require("../../assets/congrats.mp3") as AVPlaybackSource;

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
  scoreText: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 120,
  },
});

type Props = NativeStackScreenProps<RootStackParamList, "ExercisesCompleted">;

function ExercisesCompleted({ navigation }: Props) {
  const { storageValue: settings } = useAsyncStorage<Settings>("SETTINGS");
  const { unloadSound } = useSound(sound, SoundSetting.voiceOverOn);
  const { completed } = useSelector<RootState>(
    (state) => state.game,
  ) as GameDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      completed.math &&
      completed.reading &&
      completed.trivia &&
      completed.writing
    ) {
      internalRequest({
        url: "/api/patient/analytics/record-session-complete",
        method: HttpMethod.POST,
        authRequired: true,
      });
      dispatch(resetCompleted());
    }
  }, [
    completed.math,
    completed.reading,
    completed.trivia,
    completed.writing,
    dispatch,
  ]);
  const correct = 1;
  const total = 1;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ConfettiCannon
        count={settings && settings.animationOn ? 200 : 0}
        origin={{ x: -10, y: 0 }}
        autoStart={true}
        fadeOut={false}
      />
      <View style={styles.root}>
        <Text style={styles.goodWork}>Great work!</Text>
        <Text style={styles.message}>
          You have completed all of today&apos;s exercises.
        </Text>
        <Text style={styles.scoreText}>{`Score: ${correct} / ${total}`}</Text>
        <Button
          buttonStyle={{ marginBottom: 10 }}
          title="Return to Home"
          onPress={() => {
            unloadSound();
            navigation.navigate("HomeScreen");
          }}
        />
        <Button
          title="More Practice"
          onPress={() => {
            unloadSound();
            navigation.navigate("ExtraPractice");
          }}
        />
      </View>
    </View>
  );
}

export default ExercisesCompleted;
