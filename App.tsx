// React Redux Persist State
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import axios, { AxiosError } from "axios";
import Constants from "expo-constants";
import { useEffect } from "react";
import firebaseInit from "./src/firebase/config";
import { logAxiosError } from "./src/utils";

import Stack from "./src/screens/Stacks/StackNavigator";
import MergedStacks from "./src/screens/Stacks/MergedStacks";

import useCachedResources from "./src/hooks/useCachedResources";
import { store } from "./src/redux/store";

// Time Analytics
import NavigationContainerWithTracking from "./src/components/NavigationContainerWithTracking";
import AuthGuard from "./src/screens/Auth/AuthGuard";

const persistor = persistStore(store);

export default function App() {
  // For local testing add your IP address here
  const { isLoadingComplete } = useCachedResources();
  useEffect(() => {
    firebaseInit();
  }, []);
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaProvider>
          {/* <AuthGuard> */}
          <NavigationContainerWithTracking>
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
                animation: "fade",
              }}
            >
              {MergedStacks}
            </Stack.Navigator>
          </NavigationContainerWithTracking>
          {/* </AuthGuard> */}
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

axios.defaults.baseURL = Constants.expoConfig.extra.AXIOS_BASEURL as string;

// Add a request interceptor
axios.interceptors.request.use(
  (config) => config,
  (error: AxiosError) => {
    // Do something with request error
    logAxiosError(error);
    return Promise.reject(error);
  }
);
