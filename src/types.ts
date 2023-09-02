import { FC } from "react";
import { AVPlaybackSource } from "expo-av";
import { ImageSourcePropType } from "react-native";

export enum GameTypes {
  Math = "Math",
  Reading = "Reading",
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
    nextScreen: keyof RootStackParamList,
    subDescription?: string,
  };
  game: {
    name: keyof RootStackParamList;
    component: FC;
  }
}>;

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
  voiceOverOn = "voiceOverOn",
  soundEffectsOn = "soundEffectsOn",
}
export type SoundSettings = Record<SoundSetting, boolean>;

export type RootStackParamList = {
  GameOverview: undefined,
  MathIntro: undefined,
  MathMain: undefined,
  ReadingIntro: undefined,
  ReadingMain: undefined,
  TriviaIntro: undefined,
  TriviaMain: undefined,
  Pause: undefined,
};