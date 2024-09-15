import React from "react";
import { View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";
import { GameDetails, RootStackParamList } from "../../../types";
import { RootState } from "../../../redux/rootReducer";

type Props = NativeStackScreenProps<RootStackParamList, "SectionSummary">;

interface StatComponentProps {
  title: string;
  stat: string;
  statColor: string;
}

function StatComponent({ title, stat, statColor }: StatComponentProps) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#FFF",
        paddingTop: "2%",
        paddingBottom: "3%",
        paddingLeft: "4%",
        paddingRight: "4%",
      }}
    >
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Text
          style={{
            color: "#2B3674",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: "700",
            paddingBottom: "2%",
          }}
        >
          {title}
        </Text>
      </View>
      <Text
        style={{
          color: `${statColor}`,
          fontSize: 36,
          fontStyle: "normal",
          fontWeight: "700",
        }}
      >
        {stat}
      </Text>
    </View>
  );
}

interface TitleComponentProps {
  iconName: string;
  iconColor: string;
  title: string;
}

function TitleComponent({ iconName, iconColor, title }: TitleComponentProps) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFF",
        paddingTop: "2%",
        paddingBottom: "2%",
        paddingLeft: "4%",
        paddingRight: "4%",
      }}
    >
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <View
          style={{
            width: 46,
            height: 46,
            borderRadius: 46,
            backgroundColor: "#F4F7FE",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {<FontAwesome5 name={iconName} size={24} color={iconColor} />}
        </View>
        <Text
          style={{
            color: "#2B3674",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: "700",
            paddingLeft: "3%",
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}

export default function SectionSummary({ route }: Props) {
  const subject = "subject" in route.params ? route.params.subject : null;

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

  const subjectDetails =
    subject === "math" ||
    subject === "trivia" ||
    subject === "writing" ||
    subject === "reading"
      ? gameDetails[subject]
      : null;

  const questions = 10;
  const timePer = 70;

  let icon = "square-root-alt";
  let color = "#EA4335";

  if (subject === "reading") {
    icon = "book-open";
    color = "#FE7D35";
  } else if (subject === "writing") {
    icon = "file-alt";
    color = "#A066FF";
  } else if (subject === "trivia") {
    icon = "question-circle";
    color = "#34BC99";
  }

  return subjectDetails.attempted ? (
    <View
      style={{
        backgroundColor: "#FFF",
        height: "100%",
      }}
    >
      <TitleComponent
        iconName={icon}
        iconColor={color}
        title={subject.substring(0, 1).toUpperCase() + subject.substring(1)}
      />
      {"questionsAttempted" in subjectDetails ? (
        <StatComponent
          title="Question completed"
          stat={String(questions)}
          statColor={color}
        />
      ) : (
        <></>
      )}
      {"timePerQuestion" in subjectDetails ? (
        <StatComponent
          title="Total time spent"
          stat={`${Math.floor((questions * timePer) / 60)} min ${
            questions * timePer - 60 * Math.floor((questions * timePer) / 60)
          } sec`}
          statColor={color}
        />
      ) : (
        <></>
      )}
      {"timePerQuestion" in subjectDetails &&
      subject !== "writing" &&
      subject !== "reading" ? (
        <StatComponent
          title="Average time per question"
          stat={`${Math.floor(timePer / 60)} min ${
            timePer - 60 * Math.floor(timePer / 60)
          } sec`}
          statColor={color}
        />
      ) : (
        <></>
      )}
    </View>
  ) : (
    <View
      style={{
        backgroundColor: "#FFF",
        height: "100%",
      }}
    >
      <TitleComponent
        iconName={icon}
        iconColor={"#9CA5C2"}
        title={subject.substring(0, 1).toUpperCase() + subject.substring(1)}
      />
      <Text
        style={{
          fontSize: 16,
          paddingLeft: "5%",
          paddingRight: "5%",
          paddingBottom: "5%",
        }}
      >
        Please complete the{" "}
        {subject.substring(0, 1).toUpperCase() + subject.substring(1)} exercise
        to view the completion summary
      </Text>
    </View>
  );
}
