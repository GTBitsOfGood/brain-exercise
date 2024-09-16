import { ScreenDescription } from "../../types";
import GameOverview from "../Game/GameOverview";
import ExercisesCompleted from "../Game/ExercisesCompleted";
import Pause from "../Game/Pause";
import SectionSummary from "../Game/SectionSummary/SectionSummary";
import HomeScreen from "../Home/HomeScreen";
import CompletionSummaryScreen from "../CompletionSummary/CompletionSummaryScreen";

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
];

export default generalDescriptions;
