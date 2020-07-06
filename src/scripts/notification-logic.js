import { Notifications } from "expo";
/**
 * Globally stores notification settings in <Day, Time of notification> pairs
 * Both key and value are stored as strings
 */
import { AsyncStorage } from "react-native";

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
 * Stores hour and minute of notification time in Async storage. All times are in UTC
 * @param date Date object, the time to set all of the notifications to
 */
const scheduleNotifications = (inputDate) => {
  AsyncStorage.setItem("notificationHours", inputDate.getHours().toString());
  AsyncStorage.setItem(
    "notificationMinutes",
    inputDate.getMinutes().toString()
  );
  const date = new Date();
  date.setMinutes(inputDate.getMinutes());
  date.setHours(inputDate.getHours());
  date.setSeconds(0);

  if (typeof date === "object") {
    const days = [
      "Sunday (NEVER USED)",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ];

    for (let i = 0; i < 7; i += 1) {
      // for the next 7 days
      const day = (date.getDay() + i) % 7;

      if (!(day === 0 || day === 6)) {
        // skip saturday and sunday
        const dayText = days[day];
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

export default scheduleNotifications;
