import AsyncStorage from "@react-native-async-storage/async-storage";
import { logError } from "../logger.ts";
// Number of milliseconds per day
const msPerDay = 24 * 60 * 60 * 1000;

export async function getStreak() {
  try {
    const retrieveStreak = await AsyncStorage.getItem("streak");
    const streakObject = JSON.parse(retrieveStreak);
    if (streakObject === null || !("date" in streakObject)) {
      return 0;
    }
    const now = new Date();
    const lastStreakDate = new Date(streakObject.date);
    const today = now.getTime() / msPerDay;
    const lastStreakDay = Math.floor(lastStreakDate.getTime() / msPerDay);

    // gets the sunday before the last Exercise session
    const lastResetDay = lastStreakDay - lastStreakDate.getDay();
    const daysSinceLastReset = Math.ceil(today - lastResetDay);

    if (daysSinceLastReset % 7 < daysSinceLastReset) {
      // It's sunday and no work has been done today
      // or, it's been over a week since last Exercise reset
      await AsyncStorage.setItem(
        "streak",
        JSON.stringify({ ...streakObject, streak: 0 }), // save previous date
      );
      return 0;
    }

    // if it's a weekday or today's work was done.
    return streakObject.streak;
  } catch (error) {
    logError("Error HomeScreen", error);
  }
  return 0;
}

export async function incrementStreak() {
  try {
    const streak = await AsyncStorage.getItem("streak");
    const streakObject = JSON.parse(streak);
    const now = new Date();

    if (streakObject === null || !("date" in streakObject)) {
      await AsyncStorage.setItem(
        "streak",
        JSON.stringify({ streak: 1, date: now }),
      );
      return;
    }
    const lastStreakDate = new Date(streakObject.date);
    const today = Math.ceil(now.getTime() / msPerDay);
    const lastStreakDay = Math.ceil(lastStreakDate.getTime() / msPerDay);
    if (today !== lastStreakDay) {
      // streak is less than 5 and it's a new day
      await AsyncStorage.setItem(
        "streak",
        JSON.stringify({ streak: streakObject.streak + 1, date: now }),
      );
    }
  } catch (error) {
    logError("Error ExercisesCompleted Screen", error);
  }
}
