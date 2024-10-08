import { View, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRef, useCallback } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PauseButton from "../../../components/PauseButton";
import ContinueButton from "../../../components/ContinueButton";
import Text from "../../../components/Text";
import { RootStackParamList, RemainingTimeGetter } from "../../../types";
import gameDescriptions from "../../Stacks/gameDescriptions";
import useWritingProblems from "../../../hooks/useWritingProblems";

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "white",
//   },
//   instructions: {
//     fontSize: 30,
//     paddingTop: 75,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   questionText: {
//     fontSize: 24,
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

const TOTAL_TIME = gameDescriptions.Writing.minutes * 60;
type Props = NativeStackScreenProps<RootStackParamList, "WritingMain">;

export default function WritingMain({ navigation, route }: Props) {
  const { problem, updateStatsOnAnswer, onTimeComplete, getNewProblem } =
    useWritingProblems({
      navigation,
      route,
    });

  const memoizedOnTimeComplete = useCallback(
    () => onTimeComplete(0),
    [onTimeComplete],
  );

  const remainingTimeRef = useRef<RemainingTimeGetter>();

  return (
    // <View style={styles.root}>
    //   <View>
    //     <ProgressBar
    //       maxSeconds={TOTAL_TIME}
    //       redThreshold={30}
    //       onTimeComplete={memoizedOnTimeComplete}
    //       remainingTimeRef={remainingTimeRef}
    //     />
    //     <Text style={styles.instructions}>
    //       Write the question, then you answer.
    //     </Text>
    //     <ScrollView contentContainerStyle={styles.articleWrapper}>
    //       <Text style={styles.article}>{problem}</Text>
    //     </ScrollView>
    //     <Button
    //       title="Next Question"
    //       onPress={() => {
    //         getNewProblem();
    //         updateStatsOnAnswer();
    //       }}
    //       buttonStyle={{ marginBottom: 10 }}
    //       shouldNotPlay
    //     />
    //     <Button
    //       title="Skip Section"
    //       onPress={() => {
    //         onTimeComplete(remainingTimeRef.current.getRemainingTime());
    //         updateStatsOnAnswer();
    //       }}
    //       buttonStyle={{ marginBottom: 40 }}
    //     />
    //   </View>
    // </View>
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
            Writing
          </Text>
          <PauseButton
            maxSeconds={TOTAL_TIME}
            remainingTimeRef={remainingTimeRef}
            onTimeComplete={memoizedOnTimeComplete}
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
        <FontAwesome5 name="file-alt" size={42} color="#9747FF" />

        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#2B3674",
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          Write the question, then your answer:
        </Text>
      </View>
      <View
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
          {problem}
        </Text>
      </View>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => {
          onTimeComplete(remainingTimeRef.current.getRemainingTime());
          updateStatsOnAnswer();
        }}
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
        onPressFn={() => {
          getNewProblem();
          updateStatsOnAnswer();
        }}
        backgroundColor="#9747FF"
        titleColor="white"
      />
    </View>
  );
}
