import { AVPlaybackSource } from "expo-av";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import "react-native-gesture-handler";
import useSound from "../../../hooks/useSound";
import { RootStackParamList, SoundSetting } from "../../../types";

const sound = require("../../../assets/intro.mp3") as AVPlaybackSource;

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
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 50,
  },
  time: {
    fontSize: 20,
    paddingTop: 200,
    textAlign: "center",
  },
});

type Props = NativeStackScreenProps<RootStackParamList, "GameOverview">;

function ReadingOverview({ navigation }: Props) {
  const { unloadSound } = useSound(sound, SoundSetting.voiceOverOn);

  return (
    <View style={styles.root}>
      <Text style={styles.text}>You will be completing Reading exercises.</Text>
      <Text style={styles.time}>Total time: 30 minutes</Text>
      <Button
        title="Begin"
        onPress={() => {
          unloadSound();
          navigation.navigate("ReadingIntro");
        }}
        buttonStyle={{ marginBottom: 30 }}
      />
    </View>
  );
}

export default ReadingOverview;
