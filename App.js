import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Importing Home and VideoPopup Screens
import HomeScreen from "./src/screens/Home/HomeScreen.jsx";
import Video from "./src/screens/Home/Video.jsx";
// Importing Settings Screens
import SettingsScreen from "./src/screens/Settings/SettingsScreen.jsx";
import TimePicker from "./src/screens/Settings/TimePicker.jsx";
import FontSize from "./src/screens/Settings/FontSize.jsx";
import SoundScreen from "./src/screens/Settings/SoundScreen.jsx";
// Importing Game Screens
import GameOverview from "./src/screens/Game/GameOverview.jsx";
import GameMaterials from "./src/screens/Game/GameMaterials.jsx";
import Gameplay from "./src/screens/Game/Gameplay.jsx";
import TriviaScreen from "./src/screens/Game/TriviaScreen.jsx";
import GameplayIntermediate from "./src/screens/Game/GameplayIntermediate.jsx";
import ReadingIntro from "./src/screens/Game/ReadingIntro.jsx";
import Pause from "./src/screens/Game/Pause.jsx";
import FinishedScreen from "./src/screens/Game/FinishedScreen.jsx";
import ExtraPractice from "./src/screens/Game/ExtraPractice.jsx";
import ReadingMain from "./src/screens/Game/ReadingMain.jsx";
import ExercisesCompleted from "./src/screens/Game/ExercisesCompleted.jsx";
import PromptScreen from './src/screens/Game/PromptScreen.jsx';
import WritingIntro from './src/screens/Game/WritingIntro'
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName ="MathIntro"
      // Consistent styling across all stacked screens
      screenOptions={{
        headerTitleAllowFontScaling: true,
        headerBackTitleVisible: false,

        headerStyle: {
          backgroundColor: '#005AA3',
        },

        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>

        {/* Home Screens */}
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: "1 of 5 Days"}}
        />
        <Stack.Screen
          name="Video"
          component={Video}
          options={{
            title: "Youtube Videos",
            headerStyle: {backgroundColor: '#ca0000'},
          }}
        />

        {/* Game Screens */}
        <Stack.Screen
          name="GameOverview"
          component={GameOverview}
          options={{
            title: "Today's Exercises"}}
        />
        <Stack.Screen
          name="GameMaterials"
          component={GameMaterials}
          options={{
            title: "Game Materials",}}
        />
        <Stack.Screen
          name="Gameplay"
          component={Gameplay}
          options={{
            title: "Gameplay",
            }}
        />
        <Stack.Screen
          name="GameplayIntermediate"
          component={GameplayIntermediate}
          options={{
            title: "Gameplay Intermediate"}}
        />
        <Stack.Screen
          name="TriviaScreen"
          component={TriviaScreen}
          options={{
            title: "Trivia"}}
        />
        <Stack.Screen
          name="FinishedScreen"
          component={FinishedScreen}
          options={{
            title: "Exercises Completed"}}
        />
        <Stack.Screen
          name="WritingIntro"
          component={WritingIntro}
          options={{
            title: "Writing (Trivia)"}}
        />
        <Stack.Screen
          name="MathIntro"
          component={MathIntro}
          options={{
            title: "Math"}}
        />
        <Stack.Screen
          name="ExtraPractice"
          component={ExtraPractice}
          options={{
            title: "More Exercises"}}
        />
        <Stack.Screen
          name="ReadingIntro"
          component={ReadingIntro}
          options={{
            title: "Reading"}}
        />
        <Stack.Screen
          name="ReadingMain"
          component={ReadingMain}
          options={{
            title: "Reading"}}
        />
        <Stack.Screen
          name="PromptScreen"
          component={PromptScreen}
          options={{
            title: "Writing Prompts"}}
        />
        <Stack.Screen
          name="ExercisesCompleted"
          component={ExercisesCompleted}
          options={{
            title: "Exercises"}}
        />
      {/* Pause Screen */}
        <Stack.Screen
          name="Pause"
          component={Pause}
          options={{
            title: "Paused",
            animationTypeForReplace: "pop",
            // headerShown: false,
            headerStyle: {backgroundColor: '#3f3f3f'},
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />

        {/* Settings Screens */}
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            title: "Settings",
            headerStyle: {backgroundColor: '#2a652c'}}}
        />
        <Stack.Screen
          name="TimePicker"
          component={TimePicker}
          options={{
            title: "Set Time Reminder",
            headerStyle: {backgroundColor: '#2a652c'}}}
        />
        <Stack.Screen
          name="SoundScreen"
          component={SoundScreen}
          options={{
            title: "Sound",
            headerStyle: {backgroundColor: '#2a652c'}}}
        />
        <Stack.Screen
          name="FontSize"
          component={FontSize}
          options={{
            title: "Font Size",
            headerStyle: {backgroundColor: '#2a652c'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// options={{
//   headerRight: (
//     <PauseButton onPress={() => console.log("Stop timer")} />
//   ),
// }}
