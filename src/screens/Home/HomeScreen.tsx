import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useFocusEffect } from '@react-navigation/native';
import { AVPlaybackSource } from 'expo-av';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { getStreak } from '../../scripts/progressbar-logic';
import Text from '../../components/Text';
import defaultSettings from '../../components/DefaultSettings';
import { styles } from './HomeScreen.styles';
import { RootStackParamList, Settings } from '../../types';
import HomeIcon from '../../assets/HomeIcon';
import ProfileIcon from '../../assets/ProfileIcon';
import SettingsIcon from '../../assets/SettingsIcon';
import VideoIcon from '../../assets/VideoIcon';

// import Home from "../../assets/home.svg";

import Subject from '../../components/Home/ExerciseSubjects';
import { RootState } from '../../redux/rootReducer';
import { AuthUser } from '../../redux/reducers/authReducer/types';
const logo = require('../../assets/bei.jpg') as AVPlaybackSource;

type Props = NativeStackScreenProps<RootStackParamList, 'GameOverview'>;

//  Home Screen Navigation
function HomeScreen({ navigation }: Props) {
  const [settings, setSettings] = useState(defaultSettings);
  const [streak, setStreak] = useState(0);

  const userInfo = useSelector<RootState>((state) => state.auth) as AuthUser;
  // const gameDetails = useSelector<RootState>(
  //   (state) => state.game.lastSessionsMetrics[0]
  // );
  const gameDetails = useSelector<RootState>((state) => {
    const lastSessionsMetrics = state.game.lastSessionsMetrics;
    if (lastSessionsMetrics && lastSessionsMetrics.length > 0) {
      return lastSessionsMetrics[0];
    } else {
      return null;
    }
  });
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      getStreak().then((retrievedStreak: number) => setStreak(retrievedStreak));
      const fetchSettings = async () => {
        const storedSettings = await AsyncStorage.getItem('SETTINGS');
        if (storedSettings) setSettings(JSON.parse(storedSettings) as Settings);
      };
      fetchSettings();
    }, [])
  );

  let message: string;
  if (streak === 0) {
    message = "Let's Get Started!";
  } else if (streak < 5) {
    message = 'Keep Going!';
  } else if (streak === 5) {
    message = 'Well Done!';
  }

  const youtubeChannelURL =
    'https://www.youtube.com/channel/UCDl_hKWzF26lNEg73FNVgtA';

  const subjects = ['math', 'reading', 'writing', 'trivia'];

  const incompleteCount = subjects.reduce((acc, subject) => {
    const gameDetail = gameDetails && gameDetails[subject];
    return acc + (gameDetail && !gameDetail.attempted ? 1 : 0);
  }, 0);

  return (
    <View style={styles.root}>
      {/* title image  + title text*/}
      <View style={styles.headerContainer}>
        <Image style={styles.image} source={logo} />
        <View style={styles.welcomeContainer}>
          <Text style={styles.greeting}>Good morning </Text>
          <Text style={styles.name}>{userInfo.firstName}</Text>
          <Text style={styles.greeting}>,</Text>
        </View>
        {incompleteCount === 0 || incompleteCount === subjects.length ? (
          <Text style={styles.motivation}>
            Let's achieve your goals together.
          </Text>
        ) : (
          <View style={styles.motivation}>
            Only {integerToWords(incompleteCount)} sections away!
          </View>
        )}
      </View>
      <View style={styles.divider}></View>
      {/* verticle button bodies */}
      <View style={styles.bodyContainer}>
        <Text style={styles.headingText}>Today’s exercises</Text>
        <View style={styles.exercisesContainer}>
          <Subject
            iconName='square-root-alt'
            iconBackgroundColor='#EA4335CC'
            subjectText='Math'
            isCompleted={gameDetails && gameDetails['math'].attempted}
          />
          <Subject
            iconName='book-open'
            iconBackgroundColor='#FE7D35'
            subjectText='Reading'
            isCompleted={gameDetails && gameDetails['reading'].attempted}
          />
          <Subject
            iconName='file-alt'
            iconBackgroundColor='#A066FF'
            subjectText='Writing'
            isCompleted={gameDetails && gameDetails['writing'].attempted}
          />
          <Subject
            iconName='question-circle'
            iconBackgroundColor='#34BC99'
            subjectText='Trivia'
            isCompleted={gameDetails && gameDetails['trivia'].attempted}
          />
        </View>
        {/* completion summary button */}
        <View>
          <TouchableOpacity style={styles.summaryButton}>
            <FeatherIcon name='bar-chart-2' size={20} color='#008AFC' />
            <Text style={styles.summaryText}>Completion Summary</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* footer buttons*/}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerButton}>
          <HomeIcon></HomeIcon>
          <Text style={styles.footerTextSelected}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => Linking.openURL(youtubeChannelURL)}
        >
          <VideoIcon></VideoIcon>
          <Text style={styles.footerTextUnselected}>Video</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <ProfileIcon></ProfileIcon>
          <Text style={styles.footerTextUnselected}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <SettingsIcon></SettingsIcon>
          <Text style={styles.footerTextUnselected}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function integerToWords(number: number): string {
  const ones: string[] = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens: string[] = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens: string[] = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number === 0) return 'zero';

  let words = '';

  if (number >= 1000000) {
    words += integerToWords(Math.floor(number / 1000000)) + ' million ';
    number %= 1000000;
  }

  if (number >= 1000) {
    words += integerToWords(Math.floor(number / 1000)) + ' thousand ';
    number %= 1000;
  }

  if (number >= 100) {
    words += ones[Math.floor(number / 100)] + ' hundred ';
    number %= 100;
  }

  if (number >= 20) {
    words += tens[Math.floor(number / 10)] + ' ';
    number %= 10;
  } else if (number >= 10) {
    words += teens[number - 10] + ' ';
    number = 0;
  }

  if (number > 0) {
    words += ones[number] + ' ';
  }

  return words.trim();
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
