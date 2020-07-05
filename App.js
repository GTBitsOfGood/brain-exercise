import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import { PauseButton } from "./components/PauseButton";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{
            headerRight: () => (
              <PauseButton onPress={() => alert("You pressed me")} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
