import AsyncStorage from "@react-native-community/async-storage";
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
    if (
      (now.getDay() == 0 && now.getDate() !== lastStreakDate.getDate()) ||
      Math.abs(now.getDate() - lastStreakDate.getDate()) > 5
    ) {
      // It' sunday and no work has been done today
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
    const dayOfWeek = now.getDay();
    const dayOfMonth = now.getDate();
    if (streakObject === null || !streakObject.hasOwnProperty("date")) {
      await AsyncStorage.setItem(
        "streak",
        JSON.stringify({ streak: 1, date: now })
      );
      return;
    }
    const lastStreakDate = new Date(streakObject.date);
    if (streakObject.streak < 5 && lastStreakDate.getDate() !== now.getDate()) {
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
