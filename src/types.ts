import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { AVPlaybackSource } from "expo-av";
import { ImageSourcePropType } from "react-native";

export enum Role {
  NONPROFIT_ADMIN = "Nonprofit Admin",
  NONPROFIT_USER = "Nonprofit User",
}
export interface User {
  // the unqiue id assigned to a user. Let MongoDB create this when you insert a document
  // without any_id attribute
  _id?: string;
  name: string;
  email: string;
  phoneNumber: string;
  birthdate: string;
  signedUp: boolean;
  secondaryContactName: string;
  secondaryContactPhone: string;
  role: Role;
}

export type TimeAnalyticsTypes =
  | "totalScreenTime"
  | "writingTime"
  | "mathTime"
  | "readingTime";

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
  HomeScreen: undefined;
  SignUpScreen: undefined;
  GameOverview: undefined;
  MathIntro: { nextScreenArgs: NavigationArgs } | undefined;
  MathMain: { nextScreenArgs: NavigationArgs } | undefined;
  ReadingIntro: { nextScreenArgs: NavigationArgs } | undefined;
  ReadingMain: { nextScreenArgs: NavigationArgs } | undefined;
  WritingIntro: { nextScreenArgs: NavigationArgs } | undefined;
  WritingMain: { nextScreenArgs: NavigationArgs } | undefined;
  TriviaIntro: { nextScreenArgs: NavigationArgs } | undefined;
  TriviaMain: { nextScreenArgs: NavigationArgs } | undefined;
  Pause: undefined;
  ExercisesCompleted: undefined;
  ExtraPractice: undefined;
  SettingsScreen: undefined;
  TimePicker: undefined;
  SoundScreen: undefined;
  FontSize: undefined;
  StreakLength: undefined;
};

export type NavigationArgs = {
  [T in keyof RootStackParamList]: {
    navigationArgs:
      | [nextScreen: T]
      | [nextScreen: T, params: RootStackParamList[T]];
  };
}[keyof RootStackParamList]["navigationArgs"];

export enum GameTypes {
  Math = "Math",
  Reading = "Reading",
  Writing = "Writing",
  Trivia = "Trivia",
}

export type GameDescriptions = Record<
  GameTypes,
  {
    title: string;
    minutes: number;
    intro: {
      name: keyof RootStackParamList;
      sound: AVPlaybackSource;
      image: ImageSourcePropType;
      description: string;
      buttonTitle: string;
      subDescription?: string;
      nextScreenArgs: NavigationArgs;
    };
    game: {
      name: keyof RootStackParamList;
      nextScreenArgs: NavigationArgs;
    };
  }
>;

export interface ScreenDescription {
  name: keyof RootStackParamList;
  component: React.FC;
  title: string;
  options?: NativeStackNavigationOptions;
}

export type AsyncStorageKey = "SETTINGS";

export type RemainingTimeGetter = {
  getRemainingTime: () => number;
};
