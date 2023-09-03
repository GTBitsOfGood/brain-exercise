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
  HomeScreen: undefined,
  GameOverview: undefined,
  MathIntro: { nextScreenArgs: NavigationArgs } | undefined,
  MathMain: { nextScreenArgs: NavigationArgs } | undefined,
  ReadingIntro: { nextScreenArgs: NavigationArgs } | undefined,
  ReadingMain: { nextScreenArgs: NavigationArgs } | undefined,
  WritingIntro: { nextScreenArgs: NavigationArgs } | undefined,
  WritingMain: { nextScreenArgs: NavigationArgs } | undefined,
  TriviaIntro: { nextScreenArgs: NavigationArgs } | undefined,
  TriviaMain: { nextScreenArgs: NavigationArgs } | undefined,
  Pause: undefined,
  ExercisesCompleted: undefined,
  ExtraPractice: undefined,
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
    nextScreenArgs: NavigationArgs,
  };
  game: {
    name: keyof RootStackParamList;
    nextScreenArgs: NavigationArgs,
  }
}>;

export type AsyncStorageKey = "SETTINGS";

export type RemainingTimeGetter = {
  getRemainingTime: () => number
};