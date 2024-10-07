import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Text from "../../../components/Text";
import "react-native-gesture-handler";
import { RootStackParamList } from "../../../types";
import ContinueButton from "../../../components/ContinueButton";
import gameDescriptions from "../../Stacks/gameDescriptions";

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

function TriviaOverview({ navigation }: Props) {
  // const { unloadSound } = useSound(sound, SoundSetting.voiceOverOn);

  return (
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
          Trivia
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
          <FontAwesome5 name="question-circle" size={42} color="#34BC99" />
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
            {
              "Grab some paper and a\npencil with you. You're\ngoing to answer some\ntrivia questions."
            }
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
            {`${gameDescriptions.Trivia.minutes.toString()} minutes`}
          </Text>
        </View>
      </View>
      <ContinueButton
        title="Continue"
        backgroundColor="#34BC99"
        titleColor="white"
        onPressFn={() => {
          navigation.navigate("TriviaMain");
        }}
      />
    </View>
  );
}

export default TriviaOverview;
