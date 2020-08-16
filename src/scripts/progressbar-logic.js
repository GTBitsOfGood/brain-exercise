import AsyncStorage from "@react-native-community/async-storage";

const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day

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
    const lastStreakDay = lastStreakDate.getTime() / msPerDay;
    const daysElapsed = Math.round(today - lastStreakDay);

    if (
      daysElapsed % 7 < daysElapsed ||
      (now.getDay() == 0 && today !== lastStreakDay)
    ) {
      // It's sunday and no work has been done today
      // or, it's been over a week since last Exercise session
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
    const today = Math.round(now.getTime() / msPerDay);
    const lastStreakDay = Math.round(lastStreakDate.getTime() / msPerDay);
    if (streakObject.streak < 5 && today > lastStreakDay) {
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
