import "react-native-gesture-handler";
import React from "react";
import { View, Image, TouchableOpacity, Linking } from "react-native";
import PropTypes from "prop-types";
import FeatherIcon from "react-native-vector-icons/Feather";
import { AVPlaybackSource } from "expo-av";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import Text from "../../components/Text";
import { styles } from "./HomeScreen.styles";
import { GameDetails, RootStackParamList } from "../../types";
import HomeIcon from "../../assets/HomeIcon";
import ProfileIcon from "../../assets/ProfileIcon";
import SettingsIcon from "../../assets/SettingsIcon";
import VideoIcon from "../../assets/VideoIcon";

// import Home from "../../assets/home.svg";

import Subject from "../../components/Home/ExerciseSubjects";
import { RootState } from "../../redux/rootReducer";
import { AuthUser } from "../../redux/reducers/authReducer/types";

const logo = require("../../assets/bei.jpg") as AVPlaybackSource;

type Props = NativeStackScreenProps<RootStackParamList, "GameOverview">;

//  Home Screen Navigation
function HomeScreen({ navigation }: Props) {
  const userInfo = useSelector<RootState>((state) => state.auth) as AuthUser;
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

  const youtubeChannelURL =
    "https://www.youtube.com/channel/UCDl_hKWzF26lNEg73FNVgtA";

  const subjects = ["math", "reading", "writing", "trivia"];

  const incompleteCount = subjects.reduce((acc, subject) => {
    const gameDetail = gameDetails && gameDetails[subject];
    return acc + (gameDetail && !gameDetail.attempted ? 1 : 0);
  }, 0);

  const motivationText = `Only ${integerToWords(
    incompleteCount,
  )} sections away!`;

  return (
    <View style={styles.root}>
      {/* title image  + title text */}
      <View style={styles.headerContainer}>
        <Image style={styles.image} source={logo} />
        <View style={styles.welcomeContainer}>
          <Text style={styles.greeting}>Good morning </Text>
          <Text style={styles.name}>{userInfo.firstName}</Text>
          <Text style={styles.greeting}>,</Text>
        </View>
        {incompleteCount === 0 || incompleteCount === subjects.length ? (
          <Text style={styles.motivation}>
            Let&apos;s achieve your goals together.
          </Text>
        ) : (
          <Text style={styles.motivation}>{motivationText}</Text>
        )}
      </View>

      <View style={styles.divider}></View>
      {/* verticle button bodies */}
      <View style={styles.bodyContainer}>
        <Text style={styles.headingText}>Today’s exercises</Text>
        <View style={styles.exercisesContainer}>
          <Subject
            iconName="square-root-alt"
            iconBackgroundColor="#EA4335CC"
            subjectText="Math"
            isCompleted={gameDetails && gameDetails.math.attempted}
          />
          <Subject
            iconName="book-open"
            iconBackgroundColor="#FE7D35"
            subjectText="Reading"
            isCompleted={gameDetails && gameDetails.reading.attempted}
          />
          <Subject
            iconName="file-alt"
            iconBackgroundColor="#A066FF"
            subjectText="Writing"
            isCompleted={gameDetails && gameDetails.writing.attempted}
          />
          <Subject
            iconName="question-circle"
            iconBackgroundColor="#34BC99"
            subjectText="Trivia"
            isCompleted={gameDetails && gameDetails.trivia.attempted}
          />
        </View>
        {/* completion summary button */}
        <View>
          <TouchableOpacity
            accessibilityRole="button"
            style={styles.summaryButton}
          >
            <FeatherIcon name="bar-chart-2" size={20} color="#008AFC" />
            <Text style={styles.summaryText}>Completion Summary</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* footer buttons */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          style={styles.footerButton}
        >
          <HomeIcon></HomeIcon>
          <Text style={styles.footerTextSelected}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          style={styles.footerButton}
          onPress={() => Linking.openURL(youtubeChannelURL)}
        >
          <VideoIcon></VideoIcon>
          <Text style={styles.footerTextUnselected}>Video</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          style={styles.footerButton}
        >
          <ProfileIcon></ProfileIcon>
          <Text style={styles.footerTextUnselected}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          style={styles.footerButton}
        >
          <SettingsIcon></SettingsIcon>
          <Text style={styles.footerTextUnselected}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function integerToWords(number: number): string {
  const ones: string[] = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens: string[] = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens: string[] = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (number === 0) return "zero";

  let words = "";

  if (number >= 1000000) {
    words += `${integerToWords(Math.floor(number / 1000000))} million `;
    number %= 1000000;
  }

  if (number >= 1000) {
    words += `${integerToWords(Math.floor(number / 1000))} thousand `;
    number %= 1000;
  }

  if (number >= 100) {
    words += `${ones[Math.floor(number / 100)]} hundred `;
    number %= 100;
  }

  if (number >= 20) {
    words += `${tens[Math.floor(number / 10)]} `;
    number %= 10;
  } else if (number >= 10) {
    words += `${teens[number - 10]} `;
    number = 0;
  }

  if (number > 0) {
    words += `${ones[number]} `;
  }

  return words.trim();
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
