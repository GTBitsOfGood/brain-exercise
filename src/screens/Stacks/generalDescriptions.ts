import { ScreenDescription } from "../../types";
import GameOverview from "../Game/GameOverview";
import ExtraPractice from "../Game/ExtraPractice";
import ExercisesCompleted from "../Game/ExercisesCompleted";
import Pause from "../Game/Pause";
import HomeScreen from "../Home/HomeScreen";
import CompletionSummaryScreen from "../CompletionSummary/CompletionSummaryScreen";

const generalDescriptions: ScreenDescription[] = [
  {
    name: "HomeScreen",
    component: HomeScreen,
    title: "Home",
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
    name: "ExtraPractice",
    component: ExtraPractice,
    title: "More Exercises",
  },
];

export default generalDescriptions;
