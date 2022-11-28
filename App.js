import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { Text } from "react-native";
import { Auth0Provider } from "react-native-auth0";

import Constants from "expo-constants";
import axios from "axios";
import { logAxiosError } from "./src/utils";

// Importing temporary login screen
import Login from "./src/screens/Settings/Login.jsx";

// Importing Home Screen
import HomeScreen from "./src/screens/Home/HomeScreen.jsx";

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
import PromptScreen from "./src/screens/Game/PromptScreen.jsx";
import WritingIntro from "./src/screens/Game/WritingIntro.jsx";
import MathIntro from "./src/screens/Game/MathIntro.jsx";
import TriviaIntro from "./src/screens/Game/TriviaIntro.jsx";
import PauseButton from "./src/components/PauseButton.jsx";

// React Redux Persist State
import useCachedResources from "./src/hooks/useCachedResources";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./src/redux/store";
import SignUpScreen from "./src/screens/SignUp/SignUp.jsx";

const persistor = persistStore(store);

// Disabling dynamic type
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const config = {
  animation: "spring",
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

const AppContext = React.createContext();

export default function App() {
  const isLoadingComplete = useCachedResources();

  const [signedIn, setSignedIn] = React.useState(true);
  const [paused, setPaused] = React.useState(false);

  const appContextValue = useMemo(
    () => ({
      signedIn,
      setSignedIn,
    }),
    [signedIn]
  );

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Auth0Provider
        domain={"bitsofgood.us.auth0.com"}
        clientId={"7DAGINdmjDATs8dDqA0c3i6XrPgbe2MT"}
      >
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <SafeAreaProvider>
              <NavigationContainer>
                <AppContext.Provider value={appContextValue}>
                  <Stack.Navigator
                    // Consistent styling across all stacked screens
                    screenOptions={{
                      headerBackTitleVisible: false,
                      headerTitleAllowFontScaling: false,
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

                    {/* Game Screens */}
                    <Stack.Screen
                      name="GameOverview"
                      component={GameOverview}
                      options={({ navigation }) => ({
                        headerLeft: () => (
                          <HeaderBackButton
                            onPress={() => navigation.goBack()}
                          />
                        ),
                        title: "Today's Exercises",
                      })}
                    />
                    <Stack.Screen
                      name="GameMaterials"
                      component={GameMaterials}
                      options={{
                        title: "Choose your game!",
                      }}
                    />
                    <Stack.Screen
                      name="Gameplay"
                      options={({ navigation }) => ({
                        headerRight: () => (
                          <PauseButton
                            onPress={() => {
                              setPaused(true);
                              navigation.navigate("Pause");
                            }}
                          />
                        ),
                        title: "Math",
                      })}
                    >
                      {(props) => <Gameplay {...props} paused={paused} />}
                    </Stack.Screen>
                    <Stack.Screen
                      name="GameplayIntermediate"
                      component={GameplayIntermediate}
                      options={{
                        title: "Gameplay Intermediate",
                      }}
                    />
                    <Stack.Screen
                      name="TriviaScreen"
                      component={TriviaScreen}
                      options={({ navigation }) => ({
                        headerRight: () => (
                          <PauseButton
                            onPress={() => navigation.navigate("Pause")}
                          />
                        ),
                        title: "Writing (Trivia)",
                      })}
                    />
                    <Stack.Screen
                      name="FinishedScreen"
                      component={FinishedScreen}
                      options={{
                        title: "Exercises Completed",
                      }}
                    />
                    <Stack.Screen
                      name="WritingIntro"
                      component={WritingIntro}
                      options={{
                        title: "Writing",
                      }}
                    />
                    <Stack.Screen
                      name="MathIntro"
                      component={MathIntro}
                      options={{
                        title: "Math",
                      }}
                    />
                    <Stack.Screen
                      name="TriviaIntro"
                      component={TriviaIntro}
                      options={{
                        title: "Writing (Trivia)",
                      }}
                    />
                    <Stack.Screen
                      name="ExtraPractice"
                      component={ExtraPractice}
                      options={{
                        title: "More Exercises",
                      }}
                    />
                    <Stack.Screen
                      name="ReadingIntro"
                      component={ReadingIntro}
                      options={{
                        title: "Get ready to read!",
                      }}
                    />
                    <Stack.Screen
                      name="ReadingMain"
                      component={ReadingMain}
                      options={({ navigation }) => ({
                        headerRight: () => (
                          <PauseButton
                            onPress={() => navigation.navigate("Pause")}
                          />
                        ),
                        title: "Reading",
                      })}
                    />
                    <Stack.Screen
                      name="PromptScreen"
                      component={PromptScreen}
                      options={({ navigation }) => ({
                        headerRight: () => (
                          <PauseButton
                            onPress={() => navigation.navigate("Pause")}
                          />
                        ),
                        title: "Writing Prompts",
                      })}
                    />
                    <Stack.Screen
                      name="ExercisesCompleted"
                      component={ExercisesCompleted}
                      options={{
                        title: "Exercises done!",
                      }}
                    />
                    {/* Pause Screen */}
                    <Stack.Screen
                      name="Pause"
                      options={{
                        title: "Paused",
                        animationTypeForReplace: "pop",
                        transitionSpec: {
                          open: config,
                          close: config,
                        },
                      }}
                    >
                      {(props) => <Pause {...props} setPaused={setPaused} />}
                    </Stack.Screen>

                    {/* Settings Screens */}
                    <Stack.Screen
                      name="SettingsScreen"
                      component={SettingsScreen}
                      options={({ navigation }) => ({
                        headerLeft: () => (
                          <HeaderBackButton
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
                          <HeaderBackButton
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
                          <HeaderBackButton
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
                          <HeaderBackButton
                            onPress={() => navigation.goBack()}
                          />
                        ),
                        title: "Font Size",
                      })}
                    />
                  </Stack.Navigator>
                </AppContext.Provider>
              </NavigationContainer>
            </SafeAreaProvider>
          </PersistGate>
        </Provider>
      </Auth0Provider>
    );
  }
}

axios.defaults.baseURL = Constants.manifest.extra.AXIOS_BASEURL;
// console.log(Constants.manifest.extra.AXIOS_BASEURL);

// Add a request interceptor
axios.interceptors.request.use(
  (config) => config,
  (error) => {
    // Do something with request error
    logAxiosError(error);
    return Promise.reject(error);
  }
);
