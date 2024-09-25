import { ScreenDescription } from "../../types";
import GameOverview from "../Game/GameOverview";
import ExercisesCompleted from "../Game/ExercisesCompleted";
import Pause from "../Game/Pause";
import SectionSummary from "../Game/SectionSummary/SectionSummary";
import HomeScreen from "../Home/HomeScreen";
import CompletionSummaryScreen from "../CompletionSummary/CompletionSummaryScreen";
import GameFinished from "../Game/GameFinished";
import MathOverview from "../Game/MathMain/MathOverview";
import ReadingOverview from "../Game/ReadingMain/ReadingOverview";
import WritingOverview from "../Game/WritingMain/WritingOverview";
import TriviaOverview from "../Game/TriviaMain/TriviaOverview";

const generalDescriptions: ScreenDescription[] = [
  {
    name: "HomeScreen",
    component: HomeScreen,
    title: "",
    options: { headerShown: false },
  },
  {
    name: "CompletionSummaryScreen",
    component: CompletionSummaryScreen,
    title: "Completion Summary",
    options: { headerShown: false },
  },
  {
    name: "GameOverview",
    component: GameOverview,
    title: "Today's Exercises",
  },
  {
    name: "Pause",
    component: Pause,
    title: "Paused",
    options: {
      animationTypeForReplace: "pop",
    },
  },
  {
    name: "ExercisesCompleted",
    component: ExercisesCompleted,
    title: "Exercises done!",
  },
  {
    name: "SectionSummary",
    component: SectionSummary,
    title: "Section Summary",
    options: { headerShown: false },
  },
  {
    name: "GameFinished",
    component: GameFinished,
    title: "Game Finished",
    options: { headerShown: false },
  },
  {
    name: "MathOverview",
    component: MathOverview,
    title: "Math Exercises",
  },
  {
    name: "ReadingOverview",
    component: ReadingOverview,
    title: "Reading Exercises",
  },
  {
    name: "WritingOverview",
    component: WritingOverview,
    title: "Writing Exercises",
  },
  {
    name: "TriviaOverview",
    component: TriviaOverview,
    title: "Trivia Exercises",
  },
];

export default generalDescriptions;
