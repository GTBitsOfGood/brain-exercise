import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const Stack = createStackNavigator();

const PauseButton = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={{
            uri:
              "https://i7.pngguru.com/preview/101/918/437/brand-pattern-pause-button-png-image.jpg",
          }}
          style={{ width: 25, height: 25, marginRight: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

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
