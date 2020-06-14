import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import scheduleNotifications from "./../scripts/notification-logic.js";


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "black",
    fontSize: 30,
    margin: 30,
  },
  button: {
    margin: 30,
  },
});



function NotificationScreen() {
  return (
    <View>
      <Text>Notification Screen</Text>
      <Button
        title="Get a Notification"
        style={styles.button}
        onPress={() => scheduleNotifications()}
      />
    </View>
  );
}

export default NotificationScreen;
/*
const currDate = new Date();  
          const futureDate = new Date(currDate.getTime() + 2000); //hopefully is a date object, manipulate to be the very next monday/tuesday/wed/etc.
          const timeDifference = futureDate - currDate;

          AsyncStorage.setItem('Monday', timeDifference.toString())
          AsyncStorage.getItem('Monday').then((result) => console.log(result))
          
          const localNotification = {
            title: "test",
            text: "test again",
          }
          const schedulingOptions = {
            time: (new Date()).getTime() + 2000,
            repeat: 'week',
          }
          Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions)
*/