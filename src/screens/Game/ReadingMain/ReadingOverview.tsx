// import { AVPlaybackSource } from "expo-av";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
// import Button from "../../../components/Button";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import gameDescriptions from "../../Stacks/gameDescriptions";

import Text from "../../../components/Text";
import ContinueButton from "../../../components/ContinueButton";

import "react-native-gesture-handler";
// import useSound from "../../../hooks/useSound";
// import { RootStackParamList, SoundSetting } from "../../../types";
import { RootStackParamList } from "../../../types";

// const sound = require("../../../assets/intro.mp3") as AVPlaybackSource;

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     alignContent: "center",
//     justifyContent: "space-between",
//     padding: 20,
//     paddingTop: 100,
//     backgroundColor: "white",
//   },
//   text: {
//     fontSize: 25,
//     fontWeight: "bold",
//     textAlign: "center",
//     paddingTop: 50,
//   },
//   time: {
//     fontSize: 20,
//     paddingTop: 200,
//     textAlign: "center",
//   },
// });

type Props = NativeStackScreenProps<RootStackParamList, "GameOverview">;

function ReadingOverview({ navigation }: Props) {
  // const { unloadSound } = useSound(sound, SoundSetting.voiceOverOn);

  return (
    //     <View style={styles.root}>
    //       <Text style={styles.text}>You will be completing Reading exercises.</Text>
    //       <Text style={styles.time}>Total time: 30 minutes</Text>
    //       <Button
    //         title="Begin"
    //         onPress={() => {
    //           unloadSound();
    //           navigation.navigate("ReadingIntro");
    //         }}
    //         buttonStyle={{ marginBottom: 30 }}
    //       />
    //     </View>
    //   );
    // }
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "space-between",
        paddingHorizontal: "4%",
        paddingBottom: "6%",
        paddingTop: "16%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#2B3674",
            alignSelf: "left",
          }}
        >
          Reading
        </Text>
        <View
          style={{
            alignSelf: "center",
            paddingVertical: 64,
            paddingHorizontal: 32,
            borderWidth: 1,
            borderColor: "#E3EAFC",
            borderRadius: 12,
            width: "100%",
            marginVertical: 24,
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="readme" size={42} color="#FE7D35" />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#2B3674",
              textAlign: "center",
              marginTop: 12,
              lineHeight: 32,
            }}
          >
            {"Read the following passage aloud."}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 22,
            paddingVertical: 6,
            backgroundColor: "#E3EAFC",
            borderRadius: 12,
          }}
        >
          <FontAwesome5 name="stopwatch" size={20} color="#2B3674" />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "#2B3674",
              textAlign: "center",
              marginLeft: 10,
            }}
          >
            {`${gameDescriptions.Reading.minutes.toString()} minutes`}
          </Text>
        </View>
      </View>
      <ContinueButton
        title="Continue"
        backgroundColor="#FE7D35"
        titleColor="white"
        onPressFn={() => {
          navigation.navigate("ReadingMain");
        }}
      />
    </View>
  );
}

export default ReadingOverview;
