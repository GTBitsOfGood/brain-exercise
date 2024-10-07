import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import FeatherIcon from "react-native-vector-icons/Feather";
import { AVPlaybackSource } from "expo-av";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./HomeScreen.styles";
import { GameDetails, RootStackParamList } from "../../types";
import HomeIcon from "../../assets/HomeIcon";
import ProfileIcon from "../../assets/ProfileIcon";
import SettingsIcon from "../../assets/SettingsIcon";

import Subject from "../../components/Home/ExerciseSubjects";
import { RootState } from "../../redux/rootReducer";
import { AuthUser } from "../../redux/reducers/authReducer/types";

import { resetAttempted } from "../../redux/reducers/gameDetailsReducer";

const logo = require("../../assets/bei.jpg") as AVPlaybackSource;

type Props = NativeStackScreenProps<RootStackParamList, "GameOverview">;

//  Home Screen Navigation
// TODO: Remove the following eslint-disable rule after using navigation
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HomeScreen({ navigation }: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetAttempted());
  }, [dispatch]);

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

  const subjects = ["math", "reading", "writing", "trivia"];
  const incompleteCount = subjects.reduce((acc, subject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const gameDetailAttempted = gameDetails[subject]?.attempted as boolean;
    return acc + (!gameDetailAttempted ? 1 : 0);
  }, 0);

  const motivationText = `Only ${incompleteCount} sections away!`;

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
            iconBackgroundColor="#EA4335"
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
            onPress={() => navigation.navigate("CompletionSummaryScreen")}
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

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
