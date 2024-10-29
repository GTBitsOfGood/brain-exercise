import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { GameDetails, RootStackParamList } from "../../types";
import ContinueButton from "../../components/ContinueButton";
import SubjectComponent from "../../components/SubjectComponent";
import { RootState } from "../../redux/rootReducer";

type Props = NativeStackScreenProps<RootStackParamList>;

export const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    textAlign: "left",
    marginTop: 60,
    marginStart: "5%",
    marginBottom: 10,
    color: "#2B3674",
    fontWeight: "600",
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CompletionSummaryScreen({ navigation }: Props) {
  const gameDetails = useSelector<
    RootState,
    GameDetails["lastSessionsMetrics"][0] | null
  >((state) => {
    const { lastSessionsMetrics } = state.game;
    if (lastSessionsMetrics && lastSessionsMetrics.length > 0) {
      return lastSessionsMetrics[0];
    }
    return null;
  });

  return (
    <ScrollView>
      <View>
        <Text style={styles.header}>Full completion summary </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <SubjectComponent
          title="Math"
          iconName="square-root-alt"
          attempted={gameDetails.math.attempted}
          questionsCompleted={gameDetails.math.questionsAttempted}
          totalTimeSpent={
            gameDetails.math.timePerQuestion *
            gameDetails.math.questionsAttempted
          }
          averageTimePerQuestion={gameDetails.math.timePerQuestion}
          statColor="#EA4335"
        ></SubjectComponent>
        <SubjectComponent
          title="Reading"
          iconName="book-open"
          attempted={gameDetails.reading.attempted}
          totalTimeSpent={
            gameDetails.reading.timePerPassage *
            gameDetails.reading.passagesRead
          }
          statColor="#FE7D35"
        ></SubjectComponent>
        <SubjectComponent
          title="Writing"
          iconName="file-alt"
          attempted={gameDetails.writing.attempted}
          totalTimeSpent={
            gameDetails.writing.timePerQuestion *
            gameDetails.writing.questionsAnswered
          }
          statColor="#9747FF"
        ></SubjectComponent>
        <SubjectComponent
          title="Trivia"
          iconName="question-circle"
          attempted={gameDetails.trivia.attempted}
          questionsCompleted={gameDetails.trivia.questionsAttempted}
          totalTimeSpent={
            gameDetails.trivia.timePerQuestion *
            gameDetails.trivia.questionsAttempted
          }
          averageTimePerQuestion={gameDetails.trivia.timePerQuestion}
          statColor="#34BC99"
        ></SubjectComponent>
        <View style={{ width: "92%" }}>
          <ContinueButton
            title="Return home"
            titleColor="white"
            backgroundColor="#008AFC"
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default CompletionSummaryScreen;

// import React from "react";
// import { View } from "react-native";
// import OneLineComponent from "../../components/OneLineComponent";
// import TwoLineComponent from "../../components/TwoLineComponent";
// import OneLineCaptionComponent from "../../components/OneLineCaptionComponent";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../../types";
// import ContinueButton from "../../components/ContinueButton";
// import QuestionMarkCircleIcon from "../../assets/QuestionMarkCircleIcon";
// import TwoThirdsPieChartIcon from "../../assets/TwoThirdsPieChartIcon";
// import OneSixthPieChartIcon from "../../assets/OneSixthPieChartIcon";
// import HappyEmoji from "../../assets/HappyEmoji";

// type Props = NativeStackScreenProps<RootStackParamList>;

// const EnclosedQuestionIcon = (
//   <View style={{ borderRadius: 50, backgroundColor: '#F4F7FE', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40, width: 40 }}>
//     <QuestionMarkCircleIcon color="#EA4335" />
//   </View>
// )

// const EnclosedTwoThirdsPieChartIcon = (
//   <View style={{ borderRadius: 50, backgroundColor: '#F4F7FE', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40, width: 40 }}>
//     <TwoThirdsPieChartIcon color="#EA4335" />
//   </View>
// )

// const EnclosedOneSixthPieChartIcon = (
//   <View style={{ borderRadius: 50, backgroundColor: '#F4F7FE', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40, width: 40 }}>
//     <OneSixthPieChartIcon color="#EA4335" />
//   </View>
// )

// function CompletionSummaryScreen( { navigation }: Props ) {
//   return (
//     <View style={{ justifyContent: "center", alignItems: "center" }}>
//       <OneLineCaptionComponent color="rgba(214, 246, 234, 0.30)" icon={<HappyEmoji />} title="Great Job!" caption="Your accuracy increased." stat="+12%" statColor="#05CD99" />
//       <View style={{ paddingTop: "2%"}} />
//       <OneLineComponent icon={EnclosedQuestionIcon} title="Questions Completed" stat={10} statColor="#EA4335" />
//       <View style={{ height: '2%' }} />
//       <TwoLineComponent icon={EnclosedTwoThirdsPieChartIcon} title="Total time spent" stat="13 min 10 sec" statColor="#EA4335" />
//       <View style={{ height: '2%'}} />
//       <TwoLineComponent icon={EnclosedOneSixthPieChartIcon} title="Average time per question" stat="1 min 30 sec" statColor="#EA4335" />
//       <View style={{ paddingTop: "30%"}} />
//       <ContinueButton titleColor="white" backgroundColor="#EA4335"/>
//     </View>
//   );
// }

// export default CompletionSummaryScreen;

// import React from "react";
// import { View } from "react-native";
// import TwoLineComponent from "../../components/TwoLineComponent";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../../types";
// import ContinueButton from "../../components/ContinueButton";
// import TwoThirdsPieChartIcon from "../../assets/TwoThirdsPieChartIcon";

// type Props = NativeStackScreenProps<RootStackParamList>;

// const EnclosedTwoThirdsPieChartIcon = (
//   <View style={{ borderRadius: 50, backgroundColor: '#F4F7FE', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40, width: 40 }}>
//     <TwoThirdsPieChartIcon color="#FE7D35" />
//   </View>
// )

// function CompletionSummaryScreen( { navigation }: Props ) {
//   return (
//     <View style={{ justifyContent: "center", alignItems: "center" }}>
//       <TwoLineComponent icon={EnclosedTwoThirdsPieChartIcon} title="Total time spent" stat="13 min 10 sec" statColor="#FE7D35" />
//       <View style={{ paddingTop: "120%"}} />
//       <ContinueButton titleColor="white" backgroundColor="#FE7D35"/>
//     </View>
//   );
// }

// export default CompletionSummaryScreen;

// import React from "react";
// import { View } from "react-native";
// import TwoLineComponent from "../../components/TwoLineComponent";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../../types";
// import ContinueButton from "../../components/ContinueButton";
// import TwoThirdsPieChartIcon from "../../assets/TwoThirdsPieChartIcon";

// type Props = NativeStackScreenProps<RootStackParamList>;

// const EnclosedTwoThirdsPieChartIcon = (
//   <View style={{ borderRadius: 50, backgroundColor: '#F4F7FE', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 40, width: 40 }}>
//     <TwoThirdsPieChartIcon color="#9747FF" />
//   </View>
// )

// function CompletionSummaryScreen( { navigation }: Props ) {
//   return (
//     <View style={{ justifyContent: "center", alignItems: "center" }}>
//       <TwoLineComponent icon={EnclosedTwoThirdsPieChartIcon} title="Total time spent" stat="13 min 10 sec" statColor="#9747FF" />
//       <View style={{ paddingTop: "120%"}} />
//       <ContinueButton titleColor="white" backgroundColor="#9747FF"/>
//     </View>
//   );
// }

// export default CompletionSummaryScreen;
