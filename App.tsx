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
import MergedStacks from "./src/screens/Stacks/MergedStacks";

import useCachedResources from "./src/hooks/useCachedResources";
import { store } from "./src/redux/store";

// Time Analytics
import NavigationContainerWithTracking from "./src/components/NavigationContainerWithTracking";

const persistor = persistStore(store);

export default function App() {
  // For local testing add your IP address here
  const { isLoadingComplete } = useCachedResources();

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
                  animation: "fade"
                }}
              >
                {MergedStacks}
              </Stack.Navigator>
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
