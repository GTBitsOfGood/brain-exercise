import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StepIndicator from 'react-native-step-indicator';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useFocusEffect } from '@react-navigation/native';
import { AVPlaybackSource } from 'expo-av';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { getStreak } from '../../scripts/progressbar-logic';
import Text from '../../components/Text';
import Button from '../../components/Button';
import LogoutButton from '../../components/Auth/LogoutButton';
import defaultSettings from '../../components/DefaultSettings';
import { styles, streakStyles } from './HomeScreen.styles';
import { RootStackParamList, Settings } from '../../types';
import HomeIcon from '../../assets/HomeIcon'
import ProfileIcon from '../../assets/ProfileIcon'
import SettingsIcon from '../../assets/SettingsIcon'
import VideoIcon from '../../assets/VideoIcon'

// import Home from "../../assets/home.svg";

import Subject from '../../components/Home/ExerciseSubjects';
import { GestureResponderEvent } from 'react-native-modal';
const logo = require('../../assets/bei.jpg') as AVPlaybackSource;

type Props = NativeStackScreenProps<RootStackParamList, 'GameOverview'>;

//  Home Screen Navigation
function HomeScreen({ navigation }: Props) {
  const [settings, setSettings] = useState(defaultSettings);
  const [streak, setStreak] = useState(0);

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

  return (
    <View style={styles.root}>
      {/* title image  + title text*/}
      <View style={styles.headerContainer}>
        <Image style={styles.image} source={logo} />
        <View style={styles.welcomeContainer}>
          <Text style={styles.greeting}>Good morning </Text>
          <Text style={styles.name}>John</Text>
          <Text style={styles.greeting}>,</Text>
        </View>
        <Text style={styles.motivation}>Let's achieve your goals together.</Text>
        
      </View>

      {/* verticle button bodies */}
      <View style={styles.bodyContainer}>
      <View style={styles.exercisesContainer}>
          <Subject
            iconName='book-open'
            iconBackgroundColor='#EA4335CC'
            subjectText='Math'
          />
          <Subject
            iconName='book-open'
            iconBackgroundColor='#FE7D35'
            subjectText='Reading'
          />
          <Subject
            iconName='file-text'
            iconBackgroundColor='#A066FF'
            subjectText='Writing'
          />
          <Subject
            iconName='help-circle'
            iconBackgroundColor='#34BC99'
            subjectText='Trivia'
          />
        </View>
      </View>

        {/* footer buttons*/}
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.footerButton}>
            <HomeIcon></HomeIcon>
            <Text style={styles.footerTextSelected}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.footerButton} onPress={() => Linking.openURL(youtubeChannelURL)}>
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

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
