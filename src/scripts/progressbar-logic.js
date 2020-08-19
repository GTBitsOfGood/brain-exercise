import AsyncStorage from "@react-native-community/async-storage";
// Number of milliseconds per day
const msPerDay = 24 * 60 * 60 * 1000;

export async function getStreak(onGetStreakComplete) {
  try {
    const retrieveStreak = await AsyncStorage.getItem("streak");
    const streakObject = JSON.parse(retrieveStreak);
    if (streakObject === null || !streakObject.hasOwnProperty("date")) {
      onGetStreakComplete(0);
      return;
    }
    const now = new Date();
    const lastStreakDate = new Date(streakObject.date);
    const today = now.getTime() / msPerDay;
    const lastStreakDay = Math.floor(lastStreakDate.getTime() / msPerDay);

    // gets the sunday before the last Exercise session
    const lastResetDay = lastStreakDay - lastStreakDate.getDay();
    const daysSinceLastReset = Math.ceil(today - lastResetDay);
    console.log(daysSinceLastReset);

    if (daysSinceLastReset % 7 < daysSinceLastReset) {
      // It's sunday and no work has been done today
      // or, it's been over a week since last Exercise reset
      onGetStreakComplete(0);
      await AsyncStorage.setItem(
        "streak",
        JSON.stringify({ ...streakObject, streak: 0 }) // save previous date
      );
    } else {
      // if it's a weekday or today's work was done.
      onGetStreakComplete(streakObject.streak);
    }
  } catch (error) {
    console.log("Error HomeScreen", error);
  }
}

export async function incrementStreak() {
  try {
    const streak = await AsyncStorage.getItem("streak");
    const streakObject = JSON.parse(streak);
    const now = new Date();

    if (streakObject === null || !streakObject.hasOwnProperty("date")) {
      await AsyncStorage.setItem(
        "streak",
        JSON.stringify({ streak: 1, date: now })
      );
      return;
    }
    const lastStreakDate = new Date(streakObject.date);
    const today = Math.ceil(now.getTime() / msPerDay);
    const lastStreakDay = Math.ceil(lastStreakDate.getTime() / msPerDay);
    if (streakObject.streak < 5 && today !== lastStreakDay) {
      // streak is less than 5 and it's a new day
      await AsyncStorage.setItem(
        "streak",
        JSON.stringify({ streak: (streakObject.streak + 1) % 6, date: now })
      );
    }
  } catch (error) {
    console.log("Error ExercisesCompleted Screen", error);
  }
}
