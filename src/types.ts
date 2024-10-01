import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { AVPlaybackSource } from "expo-av";
import { ImageSourcePropType } from "react-native";

export enum Role {
  NONPROFIT_PATIENT = "Nonprofit Patient",
  NONPROFIT_VOLUNTEER = "Nonprofit Volunteer",
  NONPROFIT_ADMIN = "Nonprofit Admin",
  NONPROFIT_CHAPTER_PRESIDENT = "Nonprofit Chapter President",
  NONPROFIT_REGIONAL_COMMITTEE_MEMBER = "Nonprofit Regional Committee Member",
  NONPROFIT_DIRECTOR = "Nonprofit Director",
}

export enum AdminApprovalStatus {
  PENDING = "Pending",
  APPROVED = "Approved",
  REJECTED = "Rejected",
}

export enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export interface IUser {
  // the unqiue id assigned to a user. Let MongoDB create this when you insert a document
  // without any_id attribute
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  birthDate: Date;
  startDate: Date;
  patientDetails: {
    secondaryContactName: string;
    secondaryContactPhone: string;
    additionalAffiliation: string;
  };
  adminDetails: {
    active: boolean;
  };
  chapter: string;
  location: {
    country: string;
    state: string;
    city: string;
  };
  signedUp: boolean;
  verified: boolean;
  approved: AdminApprovalStatus;
  role: Role;
}

export interface Subject {
  subject: string;
  count: number;
  color: string;
}

export interface LastSessionMetrics {
  date: Date;
  math: {
    attempted: boolean;
    questionsAttempted: number;
    questionsCorrect: number;
    finalDifficultyScore: number;
    timePerQuestion: number;
  };
  trivia: {
    attempted: boolean;
    questionsAttempted: number;
    questionsCorrect: number;
    timePerQuestion: number;
    // subjects: Subject[];
  };
  reading: {
    attempted: boolean; // should be true if the user attempts the section but skips without completing
    passagesRead: number;
    timePerPassage: number;
    wordsPerMinute: number;
    skipped: boolean;
  };
  writing: {
    attempted: boolean; // should be true if the user attempts the section but skips without completing
    questionsAnswered: number;
    timePerQuestion: number;
    skipped: boolean;
  };
}

export interface IAnalytics {
  _id?: string;
  userID: string;
  totalSessionsCompleted: number;
  active: boolean;
  streak: Days[];
  lastSessionsMetrics: LastSessionMetrics[];
  weeklyMetrics: [
    {
      date: Date;
      sessionsCompleted: number;
      streakLength: number;
      active: boolean;
      math: {
        sessionsCompleted: number;
        questionsAttempted: number;
        questionsCorrect: number;
        finalDifficultyScore: number;
        timePerQuestion: number;
      };
      trivia: {
        sessionsCompleted: number;
        questionsAttempted: number;
        questionsCorrect: number;
        timePerQuestion: number;
      };
      reading: {
        sessionsAttempted: number;
        sessionsCompleted: number;
        passagesRead: number;
        timePerPassage: number;
        wordsPerMinute: number;
      };
      writing: {
        sessionsAttempted: number;
        sessionsCompleted: number;
        questionsAnswered: number;
        timePerQuestion: number;
      };
    },
  ];
}

export type TimeAnalyticsTypes =
  | "totalScreenTime"
  | "writingTime"
  | "mathTime"
  | "readingTime";

export enum SoundSetting {
  soundEffectsOn = "soundEffectsOn",
  voiceOverOn = "voiceOverOn",
}

export interface Settings {
  notificationsActive: boolean;
  scheduledTime: Date;
  fontSize: number;
  soundEffectsOn: boolean;
  voiceOverOn: boolean;
  animationOn: boolean;
  streakLength: number;
}

export type RootStackParamList = {
  HomeScreen: undefined;
  CompletionSummaryScreen: undefined;
  SignUpScreen: undefined;
  GameOverview: undefined;
  MathOverview: undefined;
  MathIntro: { nextScreenArgs: NavigationArgs } | undefined;
  MathMain: { nextScreenArgs: NavigationArgs } | undefined;
  ReadingOverview: undefined;
  ReadingIntro: { nextScreenArgs: NavigationArgs } | undefined;
  ReadingMain: { nextScreenArgs: NavigationArgs } | undefined;
  WritingOverview: undefined;
  WritingIntro: { nextScreenArgs: NavigationArgs } | undefined;
  WritingMain: { nextScreenArgs: NavigationArgs } | undefined;
  TriviaOverview: undefined;
  TriviaIntro: { nextScreenArgs: NavigationArgs } | undefined;
  TriviaMain: { nextScreenArgs: NavigationArgs } | undefined;
  Pause: undefined;
  ExercisesCompleted: { nextScreenArgs: NavigationArgs } | undefined;
  SectionSummary:
    | { nextScreenArgs: NavigationArgs }
    | { subject: string }
    | undefined;
  GameFinished:
    | { nextScreenArgs: NavigationArgs }
    | { subject: string }
    | undefined;
  // SectionSummary: {gameCompleted: string};
  // SectionSummary:{gameCompleted: GameTypes} | undefined;

  ExtraPractice: undefined;
  SettingsScreen: undefined;
  TimePicker: undefined;
  SoundScreen: undefined;
  FontSize: { settings: Settings };
  StreakLength: undefined;
  SignInScreen: undefined;
  PersonalInfoScreen: {
    userInfo: {
      _id: string;
      email: string;
      emailVerified: boolean;
    };
  };
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

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}
export interface InternalRequestData {
  url: string;
  method: HttpMethod;
  body?: { [key: string]: unknown };
  queryParams?: { [key: string]: string | number | boolean | undefined };
  authRequired?: boolean;
}
export interface InternalResponseData<T> {
  success: boolean;
  message?: string;
  payload?: T;
}

export type UserAnalytics = { user: IUser; gameDetails: GameDetails };

/* gameDetailsReducer type */

export interface GameDetails {
  active: IAnalytics["active"];
  streak: IAnalytics["streak"];
  lastSessionsMetrics: IAnalytics["lastSessionsMetrics"];
}
