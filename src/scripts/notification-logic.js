import { Notifications } from "expo";
/**
 * Globally stores notification settings in <Day, Time of notification> pairs
 * Both key and value are stored as strings
 */
import { AsyncStorage } from "react-native";

/**
 * UNUSED METHOD; SHOULD STORE TIMES IN ASYNC STORAGE
 * Call this method after changing times of notification popups.
 * Calculates difference between current time and time of next notification popup and stores it in AsyncStorage
 * @param day day of the week storage is set to
 * @param date date object to be stored
 */
const setTimes = (day, date) => {
  AsyncStorage.setItem(day, date.toString());
};

/**
 * Returns the a number in Unix epoch time representing next notification
 * @param date current day
 * @param i number of days from current day to schedule notification
 * @return Promise for number that represents next scheduled notification
 */
const getNotificationTimeDifference = (date, i) => {
  return date.getTime() + i * 86400000;
};

/**
 * Schedules notifications for every day S/M/T/W/R/F/S
 * @param date Date object, the time to set all of the notifications to
 */
export const scheduleNotifications = (date) => {
  if (typeof date === 'object') {
    const days = ["Sunday (NEVER USED)", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

    for (let i = 0; i < 7; i++) { // for the next 7 days
      const day = (date.getDay() + i) % 7;

      if (!(day === 0 || day === 6)) { // skip saturday and sunday
        // setTimes(days[day], date);

        // set local notifications
        const dayText = days[day]
        const localNotification = {
          title: dayText,
          text: "Reminder for Brain Games!", // some encouraging message
        };
        const schedulingOptions = {
          time: getNotificationTimeDifference(date, i),
          repeat: "week",
        };
        Notifications.scheduleLocalNotificationAsync(
          localNotification,
          schedulingOptions
        );
      }

      
    }
  }
};