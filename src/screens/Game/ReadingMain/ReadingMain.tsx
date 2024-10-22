import { ScrollView, View, Alert, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";

import { useRef } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import Button from "../../../components/Button";
import ContinueButton from "../../../components/ContinueButton";

import Text from "../../../components/Text";
import PauseButton from "../../../components/PauseButton";
import useReadingProblems from "../../../hooks/useReadingProblems";
import { RemainingTimeGetter, RootStackParamList } from "../../../types";
import gameDescriptions from "../../Stacks/gameDescriptions";
import { pause, unpause } from "../../../redux/reducers/pauseReducer";

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingTop: 20,
//     paddingHorizontal: 20,
//     backgroundColor: "white",
//   },
//   instructions: {
//     fontSize: 30,
//     paddingTop: 75,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   articleWrapper: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   article: {
//     fontSize: 20,
//     textAlign: "center",
//   },
// });

const TOTAL_TIME = gameDescriptions.Reading.minutes * 60;
type Props = NativeStackScreenProps<RootStackParamList, "ReadingMain">;

export default function ReadingMain({ navigation, route }: Props) {
  const dispatch = useDispatch();

  const { paragraph, nextParagraph, onTimeComplete } = useReadingProblems({
    navigation,
    route,
  });

  const remainingTimeRef = useRef<RemainingTimeGetter>();

  const nextSection = () => {
    dispatch(pause());
    Alert.alert(
      "Skip Reading Section",
      "Are you sure you want to skip the Reading section?",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => dispatch(unpause()),
        },
        {
          text: "Yes",
          onPress: () => {
            dispatch(unpause());
            onTimeComplete(true);
          },
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "space-between",
        padding: 20,
        paddingTop: "16%",
        paddingHorizontal: "4%",
        paddingBottom: "6%",
        backgroundColor: "white",
        height: "100%",
      }}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
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
          <PauseButton
            maxSeconds={TOTAL_TIME}
            remainingTimeRef={remainingTimeRef}
          />
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#E3EAFC",
          borderRadius: 12,
          marginTop: "8%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 24,
          paddingHorizontal: 32,
        }}
      >
        <FontAwesome5 name="readme" size={42} color="#FE7D35" />

        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#2B3674",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          Read the passage aloud:
        </Text>
      </View>
      <View
        style={{
          maxHeight: "50%",
        }}
      >
        <ScrollView
          style={{
            borderWidth: 1,
            borderColor: "#E3EAFC",
            borderRadius: 12,
            marginTop: "8%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#2B3674",
              textAlign: "center",
              padding: 16,
            }}
          >
            {paragraph}
          </Text>
        </ScrollView>
      </View>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={nextSection}
        style={{
          alignSelf: "center",
          marginTop: "8%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#2B3674",
            fontSize: 24,
            fontWeight: 600,
            textDecorationLine: "underline",
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>
      <ContinueButton
        title="Next Paragraph"
        onPressFn={nextParagraph}
        backgroundColor="#FE7D35"
        titleColor="white"
      />
    </View>
  );
}
