import { ReactNode, useRef, useEffect } from "react";
import { AppState, AppStateStatus } from "react-native";
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native";
import { reportTimeAnalytics } from "../utils";
import { TimeAnalyticsTypes } from "../types";

const timeTypeMapping: Record<string, TimeAnalyticsTypes> = {
  "TriviaScreen": "writingTime",
  "Gameplay": "mathTime",
  "ReadingMain": "readingTime",
};

export default function NavigationContainerWithTracking({ children }: { children: ReactNode }) {
  const navigationRef = useRef<NavigationContainerRef>();
  const routeNameRef = useRef<string>();

  const appState = useRef(AppState.currentState);
  const recentActiveTime = useRef(new Date()); // Time when app became active most recently
  const recentRouteTime = useRef(new Date()); // Time when current route became active most recently

  useEffect(() => {
    const subscription = AppState.addEventListener("change", handleAppStateChange);
    return () => {
      subscription.remove();
    };
  }, []);

  // Reports the time spent in app/route when the app is closed or in the background
  const handleAppStateChange = async (nextAppState: AppStateStatus) => {
    if (appState.current.match(/inactive|background/) && nextAppState === "active") {
      const newDate = new Date();
      recentActiveTime.current = newDate;
      recentRouteTime.current = newDate;
    } else {
      await reportTimeAnalytics(recentActiveTime.current, "totalScreenTime");
      if (routeNameRef.current in timeTypeMapping) {
        const timeType = timeTypeMapping[routeNameRef.current];
        await reportTimeAnalytics(recentRouteTime.current, timeType);
      }
    }
    appState.current = nextAppState;
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const prevRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (currentRouteName !== prevRouteName) {
          if (prevRouteName in timeTypeMapping) {
            const timeType = timeTypeMapping[prevRouteName];
            await reportTimeAnalytics(recentRouteTime.current, timeType);
          }
          routeNameRef.current = currentRouteName;
          recentRouteTime.current = new Date();
        }
      }}
    >
      {children}
    </NavigationContainer>
  );
}
