import { AVPlaybackSource } from "expo-av";
import { ImageSourcePropType } from "react-native";

export interface User {
  _id?: string, // the unqiue id assigned to a user. Let Mongo create this when you insert a document without any _id attribute
  name: string,
  phoneNumber: number,
  birthdate: string,
  auth0AccessToken: string
}

export interface DecodedJwtToken {
  given_name: string,
  family_name: string,
  nickname: string,
  name: string,
  sub: string,
}

export type TimeAnalyticsTypes = "totalScreenTime" | "writingTime" | "mathTime" | "readingTime";

export enum SoundSetting {
  animationOn = "animationOn",
  fontSize = "fontSize",
  notificationsActive = "notificationsActive",
  scheduledTime = "scheduledTime",
  soundEffectsOn = "soundEffectsOn",
  streakLength = "streakLength",
  voiceOverOn = "voiceOverOn",
}
export type SoundSettings = Record<SoundSetting, boolean>;

export type RootStackParamList = {
  GameOverview: undefined,
  MathIntro: undefined,
  MathMain: { nextScreen: keyof RootStackParamList } | undefined,
  ReadingIntro: undefined,
  ReadingMain: { nextScreen: keyof RootStackParamList } | undefined,
  WritingIntro: undefined,
  WritingMain: { nextScreen: keyof RootStackParamList } | undefined,
  TriviaIntro: undefined,
  TriviaMain: { nextScreen: keyof RootStackParamList } | undefined,
  ExercisesCompleted: undefined,
  Pause: undefined,
};

export type NavigationArgs = {
  [T in keyof RootStackParamList]: {
    navigationArgs: [nextScreen: T] | [nextScreen: T, params: RootStackParamList[T]];
  }
}[keyof RootStackParamList]["navigationArgs"];

export enum GameTypes {
  Math = "Math",
  Reading = "Reading",
  Writing = "Writing",
  Trivia = "Trivia",
}

export type GameDescriptions = Record<GameTypes, {
  title: string;
  minutes: number;
  intro: {
    name: keyof RootStackParamList;
    sound: AVPlaybackSource,
    image: ImageSourcePropType,
    description: string,
    buttonTitle: string,
    subDescription?: string,
    nextScreenNavigationArgs: NavigationArgs,
  };
  game: {
    name: keyof RootStackParamList;
    nextScreenNavigationArgs: NavigationArgs,
  }
}>;

export type AsyncStorageKey = "SETTINGS";

export type RemainingTimeGetter = {
  getRemainingTime: () => number
};