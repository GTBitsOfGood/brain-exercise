import React, { useMemo } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Button, Text } from "react-native";
import { Auth0Provider } from "react-native-auth0";

// React Redux Persist State
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import axios from "axios";
import Constants from "expo-constants";
import { logAxiosError } from "./src/utils";

import Stack from "./src/screens/Stacks/StackNavigator";

// Importing temporary login screen
import Login from "./src/screens/Settings/Login.jsx";

// Importing Home Screen
import HomeScreen from "./src/screens/Home/HomeScreen";

// Importing Settings Screens
import FontSize from "./src/screens/Settings/FontSize.jsx";
import SettingsScreen from "./src/screens/Settings/SettingsScreen.jsx";
import SoundScreen from "./src/screens/Settings/SoundScreen.jsx";
import TimePicker from "./src/screens/Settings/TimePicker.jsx";

// Importing Game Screens
import PauseButton from "./src/components/PauseButton";
import ExercisesCompleted from "./src/screens/Game/ExercisesCompleted";
import ExtraPractice from "./src/screens/Game/ExtraPractice";
import GameOverview from "./src/screens/Game/GameOverview";
// import Gameplay from "./src/screens/Game/MathMain.js";
// import GameplayIntermediate from "./src/screens/Game/GameplayIntermediate.jsx";

import Pause from "./src/screens/Game/Pause";
import PromptScreen from "./src/screens/Game/PromptScreen.jsx";

import useCachedResources from "./src/hooks/useCachedResources";
import { store } from "./src/redux/store";
import StreakLength from "./src/screens/Settings/StreakLength";
import SignUpScreen from "./src/screens/SignUp/SignUp.jsx";

// Time Analytics
import NavigationContainerWithTracking from "./src/components/NavigationContainerWithTracking";
import MergedStacks from "./src/screens/Stacks/MergedStacks";

const persistor = persistStore(store);


const AppContext = React.createContext();

export default function App() {
  // For local testing add your IP address here
  const { isLoadingComplete } = useCachedResources();

  // let screenTimeDict = {};

  const [signedIn, setSignedIn] = React.useState(true);

  const appContextValue = useMemo(
    () => ({
      signedIn,
      setSignedIn,
    }),
    [signedIn]
  );

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Auth0Provider
      domain={"bitsofgood.us.auth0.com"}
      clientId={"7DAGINdmjDATs8dDqA0c3i6XrPgbe2MT"}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SafeAreaProvider>
            <NavigationContainerWithTracking>
              <AppContext.Provider value={appContextValue}>
                <Stack.Navigator
                  // Consistent styling across all stacked screens
                  screenOptions={{
                    headerBackTitleVisible: false,
                    gestureEnabled: false,
                    headerTintColor: "black",
                    headerLeft: null,
                    headerStyle: {
                      backgroundColor: "white",
                    },
                    headerTitleStyle: {
                      fontWeight: "bold",
                      fontSize: 22,
                      color: "black",
                    },
                    headerTitleAlign: "center",
                  }}
                >
                  {/* Home Screens */}
                  <Stack.Screen
                    name="HomeScreen"
                    component={signedIn ? HomeScreen : Login}
                    options={{ title: "Home" }}
                  />

                  <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                    options={{ title: "SignUp" }}
                  />

                  { MergedStacks }

                  {/* Settings Screens */}
                  <Stack.Screen
                    name="SettingsScreen"
                    component={SettingsScreen}
                    options={({ navigation }) => ({
                      headerLeft: () => (
                        <Button
                          title="Back"
                          onPress={() => navigation.goBack()}
                        />
                      ),
                      title: "Settings",
                    })}
                  />
                  <Stack.Screen
                    name="TimePicker"
                    component={TimePicker}
                    options={({ navigation }) => ({
                      headerLeft: () => (
                        <Button
                          title="Back"
                          onPress={() => navigation.goBack()}
                        />
                      ),
                      title: "Set Time Reminder",
                    })}
                  />
                  <Stack.Screen
                    name="SoundScreen"
                    component={SoundScreen}
                    options={({ navigation }) => ({
                      headerLeft: () => (
                        <Button
                          title="Back"
                          onPress={() => navigation.goBack()}
                        />
                      ),
                      title: "Sound",
                    })}
                  />
                  <Stack.Screen
                    name="FontSize"
                    component={FontSize}
                    options={({ navigation }) => ({
                      headerLeft: () => (
                        <Button
                          title="Back"
                          onPress={() => navigation.goBack()}
                        />
                      ),
                      title: "Font Size",
                    })}
                  />
                  <Stack.Screen
                    name="StreakLength"
                    component={StreakLength}
                    options={({ navigation }) => ({
                      headerLeft: () => (
                        <Button
                          title="Back"
                          onPress={() => navigation.goBack()}
                        />
                      ),
                      title: "Streak Length",
                    })}
                  />
                </Stack.Navigator>
              </AppContext.Provider>
            </NavigationContainerWithTracking>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </Auth0Provider>
  );
}

axios.defaults.baseURL = Constants.expoConfig.extra.AXIOS_BASEURL;

// Add a request interceptor
axios.interceptors.request.use(
  (config) => config,
  (error) => {
    // Do something with request error
    logAxiosError(error);
    return Promise.reject(error);
  }
);
