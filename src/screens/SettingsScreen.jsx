import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Notifications } from "expo";
import { scheduleNotifications } from "./../scripts/notification-logic"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingVertical: 30,
  },
  intermediate: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 130,
  },
  notificationText: {
    fontSize: 25,
  },
});

function SettingsScreen() {
  const [toggleOn, setToggleOn] = useState(false);
  const [clockVisibility, setClockVisibility] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode] = useState("time");

  const toggleSwitch = () => {
    if (toggleOn) { // going from enabled to unenabled
      Notifications.cancelAllScheduledNotificationsAsync()
      setToggleOn(false)
    } else {
      setToggleOn(true)
      setClockVisibility(true)
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    if (event.type === 'set') {
      Notifications.cancelAllScheduledNotificationsAsync()
      scheduleNotifications(currentDate);
      setClockVisibility(false)
      setToggleOn(true)
    } else if (event.type === 'dismissed') {
      Notifications.cancelAllScheduledNotificationsAsync()
      setClockVisiblity(false)
      setToggleOn(false)
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.intermediate}>
        <Text style={styles.notificationText}>Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#4169e1" }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={toggleOn}
        />
      </View>
      <View>
        {clockVisibility && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  );
}

export default SettingsScreen;
