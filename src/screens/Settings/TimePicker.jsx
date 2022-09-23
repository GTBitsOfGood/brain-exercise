import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from "prop-types";
import { Notifications } from "expo";
import scheduleNotifications from "../../scripts/notification-logic";
import defaultSettings from "../../components/DefaultSettings"
import Text from "../../components/Text";
import Button from "../../components/Button";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});

function TimePicker({ navigation, route }) {

  const [date, setDate] = useState(route.params.scheduledTime || defaultSettings.scheduledTime);

  const storeSettings = async () => {
    const settingsObj = route.params;
    settingsObj.scheduledTime = date;
    const jsonSettings = JSON.stringify(settingsObj);
    await AsyncStorage.setItem("SETTINGS", jsonSettings);
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  function confirmTime() {
    Notifications.cancelAllScheduledNotificationsAsync();
    scheduleNotifications(date);
    storeSettings();
    navigation.goBack()
  }

  return (
    <View style={styles.root}>
      <Text style={styles.text}>You will receive a notification at this time on Monday through Friday</Text>
      <DateTimePicker 
        testID="dateTimePicker"
        value={date}
        mode="time"
        is24Hour={false}
        display="default"
        onChange={onChange}
      />
      <Button
        title="Confirm Time"
        type="solid"
        onPress={confirmTime}
      />
    </View>
  );
}

TimePicker.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default TimePicker;
