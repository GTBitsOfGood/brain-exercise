import { ScrollView, StyleSheet, View, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import ProgressBar from "../../components/ProgressBar";
import Text from "../../components/Text";
import { RootStackParamList } from "../../types";
import gameDescriptions from "../Stacks/gameDescriptions";
import { pause, unpause } from "../../redux/reducers/pauseReducer";
import useWritingProblems from "../../hooks/useWritingProblems";
import useReadingProblems from "../../hooks/useReadingProblems";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  instructionText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  questionText: {
    fontSize: 24,
    textAlign: "center",
  },
  answerText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  actualAnswerText: {
    fontSize: 25,
    textAlign: "center",
  },
});

const TOTAL_TIME = gameDescriptions.Writing.minutes * 60;
type Props = NativeStackScreenProps<RootStackParamList, "WritingMain">;

export default function WritingMain({ navigation, route }: Props) {
  const dispatch = useDispatch();
  const [finished, setFinished] = useState(false);

  const { problem, updateStatsOnAnswer, onTimeComplete, getNewProblem } =
    useWritingProblems({
      navigation,
      route,
    });

  const nextSection = () => {
    dispatch(pause());
    Alert.alert(
      "Skip Writing Section",
      "Are you sure you want to skip the Writing section?",
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
            onTimeComplete();
          },
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={styles.root}>
      <View>
        <ProgressBar
          maxSeconds={300}
          redThreshold={60}
          onTimeComplete={() => {
            onTimeComplete();
          }}
        />
        <Text style={styles.instructionText}>
          Write the question, then you answer
        </Text>
      </View>
      <Text style={styles.questionText}>{problem}</Text>
      <View>
        <Button
          // eslint-disable-next-line no-nested-ternary
          title={finished ? "Finish Writing Section" : "Next"}
          shouldNotPlay
          onPress={() => {
            // if (!finished) {
            //   getNewProblem();
            // } else if (route.params.shouldReturn) {
            //   navigation.navigate("HomeScreen");
            // } else {
            //   navigation.navigate("FinishedScreen");
            // }
            nextSection();
          }}
        />

        {/* <Button
          title="Skip"
          onPress={() => {
            if (!finished) {
              getNewProblem();
            } else if (route.params.shouldReturn) {
              navigation.navigate("HomeScreen");
            } else {
              navigation.navigate("FinishedScreen");
            }
          }}
        /> */}
      </View>
    </View>
  );
}
