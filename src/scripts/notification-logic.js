import { Notifications } from "expo";
/**
 * Globally stores notification settings in <Day, Time of notification> pairs
 * Both key and value are stored as strings
 */
import { AsyncStorage } from "react-native";

/**
 * Call this method after changing times of notification popups.
 * Calculates difference between current time and time of next notification popup and stores it in AsyncStorage
 * @param dummy should take an array of Date objecs
 */
const setTimes = () => {
  const currDate = new Date();
  const futureDate = new Date(currDate.getTime() + 2000); // hopefully is a date object, manipulate to be the very next monday/tuesday/wed/etc.
  const timeDifference = futureDate - currDate;

  AsyncStorage.setItem("Monday", timeDifference.toString());
};

/**
 * Returns the date of the next notification on a given day
 * @param day day to be checking for
 * @return Promise for number that represents next scheduled notification
 */
const getNotificationTimeDifference = async () => {
  try {
    const difference = await AsyncStorage.getItem("Monday");
    return new Date().getTime() + parseFloat(difference);
  } catch (error) {
    return error;
  }
};

/**
 * Schedules notifications for every day S/M/T/W/R/F/S
 */
const scheduleNotifications = () => {
  setTimes();
  // stick below in a for loop for every day
  const localNotification = {
    title: "INSERT_DAY_HERE",
    text: "Reminder for Brain Games!", // some encouraging message
  };

  getNotificationTimeDifference().then((result) => {
    const schedulingOptions = {
      time: result,
      repeat: "week",
    };

    Notifications.scheduleLocalNotificationAsync(
      localNotification,
      schedulingOptions
    );
  });
};

export default scheduleNotifications();
