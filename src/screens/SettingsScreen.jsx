import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
// import SwitchToggle from "./Components/SwitchToggle.jsx";

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
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode] = useState("time");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View style={styles.root}>
      <View style={styles.intermediate}>
        <Text style={styles.notificationText}>Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#4169e1" }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View>
        {isEnabled && (
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
