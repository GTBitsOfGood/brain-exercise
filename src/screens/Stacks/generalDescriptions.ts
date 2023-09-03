import { ScreenDescription } from "../../types";
import GameOverview from "../Game/GameOverview";
import ExtraPractice from "../Game/ExtraPractice";
import ExercisesCompleted from "../Game/ExercisesCompleted";
import Pause from "../Game/Pause";
import HomeScreen from "../Home/HomeScreen";
import SignUpScreen from "../SignUp/SignUp";

const generalDescriptions: ScreenDescription[] = [
  {
    name: "HomeScreen",
    component: HomeScreen,
    title: "Home"
  },
  {
    name: "SignUpScreen",
    component: SignUpScreen,
    title: "Sign Up"
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