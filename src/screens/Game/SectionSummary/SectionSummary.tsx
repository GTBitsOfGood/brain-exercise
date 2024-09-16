import React from "react";
import { View, Text, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";
import PieChart from "react-native-pie-chart";
import { GameDetails, RootStackParamList, Subject } from "../../../types";
import { RootState } from "../../../redux/rootReducer";
import OneLineComponent from "../../../components/OneLineComponent";
import TwoLineComponent from "../../../components/TwoLineComponent";
import ContinueButton from "../../../components/ContinueButton";

type Props = NativeStackScreenProps<RootStackParamList, "SectionSummary">;

interface PieChartComponentProps {
  triviaSubjects: Subject[];
}

function PieChartComponent({ triviaSubjects }: PieChartComponentProps) {
  const widthAndHeight = 265;

  const counts = Object.values(triviaSubjects).map((subject) => subject.count);
  const sliceColor = Object.values(triviaSubjects).map(
    (subject) => subject.color,
  );

  return (
    <View
      style={{
        display: "flex",
        width: "92%",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E3EAFC",
        backgroundColor: "#FFF",
        paddingTop: "5%",
        paddingBottom: "5%",
        paddingLeft: "4%",
        paddingRight: "4%",
        marginVertical: "2%",
        shadowColor: "#7090B0",
        shadowOffset: { width: 14, height: 17 },
        shadowOpacity: 0.2,
        shadowRadius: 40,
        elevation: 5,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: "3%",
        }}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: "#F4F7FE",
            borderRadius: 50,
          }}
        >
          <FontAwesome5 name="question-circle" size={24} color="#34BC99" />
        </View>
        <Text
          style={{
            color: "#2B3674",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: "600",
            paddingLeft: "3%",
          }}
        >
          Question types review
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <PieChart
          widthAndHeight={widthAndHeight}
          series={counts}
          sliceColor={sliceColor}
        />
        <View
          style={{
            marginTop: "4%",
          }}
        >
          {Object.values(triviaSubjects)
            .filter((subject) => subject.count > 0)
            .sort((a, b) => b.count - a.count)
            .map((subject, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: "2%",
                }}
              >
                <View
                  style={{
                    width: 16,
                    height: 16,
                    backgroundColor: subject.color,
                    marginRight: 8,
                    borderRadius: 50,
                  }}
                />
                <Text
                  style={{
                    color: "#2B3674",
                    fontSize: 16,
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  {subject.subject} : {subject.count}
                </Text>
              </View>
            ))}
        </View>
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
  let color = "#EA4335";

  if (subject === "reading") {
    color = "#FE7D35";
  } else if (subject === "writing") {
    color = "#A066FF";
  } else if (subject === "trivia") {
    color = "#34BC99";
  }

  return (
    <ScrollView style={{ backgroundColor: "#FFF", height: "100%" }}>
      <View
        style={{
          alignItems: "center",
          paddingVertical: "14%",
          width: "100%",
        }}
      >
        <Text
          style={{
            alignSelf: "flex-start",
            paddingLeft: "4%",
            fontSize: 26,
            fontWeight: 600,
            paddingTop: "4%",
            paddingBottom: "5%",
          }}
        >
          Completion summary
        </Text>
        {"questionsAttempted" in subjectDetails ? (
          <OneLineComponent
            icon={
              <FontAwesome5 name="question-circle" size={24} color={color} />
            }
            title="Questions Completed"
            stat={questions}
            statColor={color}
          />
        ) : (
          <></>
        )}
        {"timePerQuestion" in subjectDetails ||
        "timePerPassage" in subjectDetails ? (
          <TwoLineComponent
            icon={<FontAwesome5 name="clock" size={24} color={color} />}
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
          <TwoLineComponent
            icon={<FontAwesome5 name="clock" size={24} color={color} />}
            title="Average time per question"
            stat={`${Math.floor(timePer / 60)} min ${
              timePer - 60 * Math.floor(timePer / 60)
            } sec`}
            statColor={color}
          />
        ) : (
          <></>
        )}
        {"subjects" in subjectDetails ? (
          <PieChartComponent triviaSubjects={subjectDetails.subjects} />
        ) : (
          <></>
        )}
        <View style={{ width: "100%" }}>
          <ContinueButton titleColor="#FFF" backgroundColor={color} />
        </View>
      </View>
    </ScrollView>
  );
}
