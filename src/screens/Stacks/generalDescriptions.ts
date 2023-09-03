import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import GameOverview from "../Game/GameOverview";
import ExtraPractice from "../Game/ExtraPractice";
import ExercisesCompleted from "../Game/ExercisesCompleted";
import Pause from "../Game/Pause";

interface GeneralDescription {
  name: keyof RootStackParamList;
  component: React.FC;
  title: string;
  options?: NativeStackNavigationOptions;
}

const generalDescriptions: GeneralDescription[] = [
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