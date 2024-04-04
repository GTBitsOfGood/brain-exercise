import { ScreenDescription } from "../../types";
import GameOverview from "../Game/GameOverview";
import ExtraPractice from "../Game/ExtraPractice";
import ExercisesCompleted from "../Game/ExercisesCompleted";
import Pause from "../Game/Pause";
import SectionSummary from "../Game/SectionSummary/SectionSummary"
import HomeScreen from "../Home/HomeScreen";

const generalDescriptions: ScreenDescription[] = [
  {
    name: "HomeScreen",
    component: HomeScreen,
    title: "Home",
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
  }

];

export default generalDescriptions;
