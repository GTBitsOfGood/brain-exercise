import { ScreenDescription } from "../../types";
import FontSize from "../Settings/FontSize";
import SettingsScreen from "../Settings/SettingsScreen";
import SoundScreen from "../Settings/SoundScreen";
import StreakLength from "../Settings/StreakLength";
import TimePicker from "../Settings/TimePicker";

const settingDescriptions: ScreenDescription[] = [
  {
    name: "SettingsScreen",
    component: SettingsScreen,
    title: "Settings",
  },
  {
    name: "TimePicker",
    component: TimePicker,
    title: "Set Time Reminder",
  },
  {
    name: "SoundScreen",
    component: SoundScreen,
    title: "Sound"
  },
  {
    name: "FontSize",
    component: FontSize,
    title: "Font Size"
  },
  {
    name: "StreakLength",
    component: StreakLength,
    title: "Streak Length",
  },
];

export default settingDescriptions;
