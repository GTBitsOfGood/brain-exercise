import React from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import OneLineComponent from "../../components/OneLineComponent";
import TwoLineComponent from "../../components/TwoLineComponent";
import { RootStackParamList } from "../../types";
import ContinueButton from "../../components/ContinueButton";
import QuestionMarkCircleIcon from "../../assets/QuestionMarkCircleIcon";
import TwoThirdsPieChartIcon from "../../assets/TwoThirdsPieChartIcon";
import OneSixthPieChartIcon from "../../assets/OneSixthPieChartIcon";

type Props = NativeStackScreenProps<RootStackParamList>;

const EnclosedQuestionIcon = (
  <View
    style={{
      borderRadius: 50,
      backgroundColor: "#F4F7FE",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: 40,
    }}
  >
    <QuestionMarkCircleIcon color="#EA4335" />
  </View>
);

const EnclosedTwoThirdsPieChartIcon = (
  <View
    style={{
      borderRadius: 50,
      backgroundColor: "#F4F7FE",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: 40,
    }}
  >
    <TwoThirdsPieChartIcon color="#EA4335" />
  </View>
);

const EnclosedOneSixthPieChartIcon = (
  <View
    style={{
      borderRadius: 50,
      backgroundColor: "#F4F7FE",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 40,
      width: 40,
    }}
  >
    <OneSixthPieChartIcon color="#EA4335" />
  </View>
);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CompletionSummaryScreen({ navigation }: Props) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <OneLineComponent
        icon={EnclosedQuestionIcon}
        title="Questions Completed"
        stat={10}
        statColor="#EA4335"
      />
      <View style={{ height: "2%" }} />
      <TwoLineComponent
        icon={EnclosedTwoThirdsPieChartIcon}
        title="Total time spent"
        stat="13 min 10 sec"
        statColor="#EA4335"
      />
      <View style={{ height: "2%" }} />
      <TwoLineComponent
        icon={EnclosedOneSixthPieChartIcon}
        title="Average time per question"
        stat="1 min 30 sec"
        statColor="#EA4335"
      />
      <View style={{ paddingTop: "50%" }} />
      <ContinueButton titleColor="white" backgroundColor="#EA4335" />
    </View>
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