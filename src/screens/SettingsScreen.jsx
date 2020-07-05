import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, Button, AsyncStorage } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Slider } from 'react-native-elements';


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


  /**
   * font size is the slider state
   * multiplier is the state that is saved when button is pressed
   * scale font changes font size based on multiplier
   * textStyles is storage for preset font sizes
   */
  const [fontSize, setFontSize] = useState(1)
  const [multiplier, setMultiplier] = useState(1)
  const changeSlider = (newSize) => {
    setFontSize(newSize);
  }

  const saveFont = (event) => {
    AsyncStorage.setItem("fontSize", fontSize.toString())
    setMultiplier(fontSize)
  }

  

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
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', marginLeft: 50, marginRight: 20, width: 300}}>
        <Slider
          value={fontSize}
          minimumValue={1}
          maximumValue={2}
          step={.2}
          onValueChange={changeSlider}
        />
        <Text>Value: {fontSize}</Text>
        <Button
          title="Save Font"
          onPress={saveFont}
        />
        <Text style={{fontSize: multiplier * 16}}>I am sample text</Text>
      </View>
    </View>
  );
}

export default SettingsScreen;
