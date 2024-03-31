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
        <Text style={styles.title}>
          Good morning John, Let's achieve your goals together.
        </Text>
      </View>

      {/* verticle button bodies */}
      <View style={styles.bodyContainer}>
        <TouchableOpacity style={styles.squareButton}>
          <FeatherIcon name='calculator' style={styles.icon} />
          <Text style={styles.squareButtonTitle}>Math</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.squareButton}>
          <FeatherIcon name='book-open' style={styles.icon} />
          <Text style={styles.squareButtonTitle}>Reading</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.squareButton}>
          <FeatherIcon name='edit' style={styles.icon} />
          <Text style={styles.squareButtonTitle}>Writing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.squareButton}>
          <FeatherIcon name='bulb' style={styles.icon} />
          <Text style={styles.squareButtonTitle}>Trivia</Text>
        </TouchableOpacity>

        {/* footer buttons*/}
        <View style={styles.footerContainer}>
          <TouchableOpacity>
            <FeatherIcon name='home' size={24} />
            <Text>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Linking.openURL(youtubeChannelURL)}>
            <FeatherIcon name='video' size={24} />
          </TouchableOpacity>

          <TouchableOpacity>
            <FeatherIcon name='user' size={24} />
            <Text>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <FeatherIcon name='settings' size={24} />
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
