import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Importing HomeScreens
import HomeScreen from "./src/screens/Home/HomeScreen.jsx";
import Video from "./src/screens/Home/Video.jsx";
// Importing SettingsScreens
import SettingsScreen from "./src/screens/Settings/SettingsScreen.jsx";
import TimePicker from "./src/screens/Settings/TimePicker.jsx";
import FontSize from "./src/screens/Settings/FontSize.jsx";
// Importing GameScreens
import GameOverview from "./src/screens/Game/GameOverview.jsx";
import GameMaterials from "./src/screens/Game/GameMaterials.jsx";
import Gameplay from "./src/screens/Game/Gameplay.jsx";
import GameplayIntermediate from "./src/screens/Game/GameplayIntermediate.jsx";
import Pause from "./src/screens/Game/Pause.jsx";
import FinishedScreen from "./src/screens/Game/FinishedScreen.jsx";
import ExtraPractice from "./src/screens/Game/ExtraPractice.jsx";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Video" component={Video} />

        <Stack.Screen name="GameOverview" component={GameOverview} />
        <Stack.Screen name="GameMaterials" component={GameMaterials} />
        <Stack.Screen name="Gameplay" component={Gameplay} />
        <Stack.Screen
          name="GameplayIntermediate"
          component={GameplayIntermediate}
        />
        <Stack.Screen name="Pause" component={Pause} />
        <Stack.Screen name="FinishedScreen" component={FinishedScreen} />
        <Stack.Screen name="ExtraPractice" component={ExtraPractice} />

        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="TimePicker" component={TimePicker} />
        <Stack.Screen name="Font Size" component={FontSize} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// options={{
//   headerRight: (
//     <PauseButton onPress={() => console.log("Stop timer")} />
//   ),
// }}
