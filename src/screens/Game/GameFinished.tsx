import React from "react";
import { View, Text, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AVPlaybackSource } from "expo-av";
import { RootStackParamList } from "../../types";
import CustomButton from "../../components/Button";

type Props = NativeStackScreenProps<RootStackParamList, "GameFinished">;

const logo = require("../../assets/bei_edited.png") as AVPlaybackSource;

export default function GameFinished({ navigation, route }: Props) {
  const subject = "subject" in route.params ? route.params.subject : null;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "30%",
        paddingBottom: "15%",
        backgroundColor: "#008AFC",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={logo}
          style={{
            width: 222,
            height: 161,
          }}
        />
        <Text
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: "white",
          }}
        >
          Congrats!
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "white",
          }}
        >
          You finished one section.
        </Text>
      </View>
      <View style={{ alignItems: "center", width: "100%" }}>
        <CustomButton
          title="Resume"
          buttonStyle={{
            backgroundColor: "white",
            borderRadius: 12,
            shadowColor: "#7090B0",
            shadowOffset: { width: 14, height: 17 },
            shadowOpacity: 0.2,
            shadowRadius: 40,
            elevation: 5,
          }}
          titleStyle={{
            color: "#008AFC",
            fontSize: 24,
            fontWeight: 600,
          }}
          onPress={() => {
            if (subject === "math") {
              navigation.replace("SectionSummary", { subject: "math" });
            } else if (subject === "reading") {
              navigation.replace("SectionSummary", { subject: "reading" });
            } else if (subject === "writing") {
              navigation.replace("SectionSummary", { subject: "writing" });
            } else if (subject === "trivia") {
              navigation.replace("SectionSummary", { subject: "trivia" });
            }
          }}
        />
      </View>
    </View>
  );
}
