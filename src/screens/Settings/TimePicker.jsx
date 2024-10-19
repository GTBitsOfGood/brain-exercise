import React, { useState } from "react";
import { View, StyleSheet, Modal } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PropTypes from "prop-types";
import * as Notifications from "expo-notifications";
import scheduleNotifications from "../../scripts/notification-logic";
import defaultSettings from "../../components/DefaultSettings";
import Text from "../../components/Text";
import Button from "../../components/Button";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(156, 165, 194, 0.5)', // semi-transparent background
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 5,
  },
  modalText: {
    fontSize: 24, 
    fontFamily: "Poppins",
    color: "#2b3674",
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    color: '#008AFC',
    margin: 10,
    borderRadius: 12,
    padding: 10,
  },
  buttonText: {
    color: 'white',
  },
});

function TimePicker({ open, setOpen, navigation, route }) {
  const [date, setDate] = useState(
    route.params.scheduledTime || defaultSettings.scheduledTime,
  ); // this always needs to be string

  //const [visible, setVisible] = useState(true);
  const storeSettings = async () => {
    const settingsObj = route.params;
    settingsObj.scheduledTime = date;
    const jsonSettings = JSON.stringify(settingsObj);
    await AsyncStorage.setItem("SETTINGS", jsonSettings);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date(date);
    console.log(typeof selectedDate);
    console.log(selectedDate);
    setDate(currentDate.toString());
  };

  function confirmTime() {
    Notifications.cancelAllScheduledNotificationsAsync();
    console.log(date);
    scheduleNotifications(new Date(date));
    storeSettings();
    setOpen(false);
  }


  return (
    <Modal animationType="slide"
    transparent={true}
    visible={open}
    onRequestClose={confirmTime}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
      <Text style={styles.modalText}>
        Adjust Time
      </Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={new Date(date)}
        mode="time"
        is24Hour={false}
        textColor="#2b3674"
        display="spinner"
        onChange={onChange}
      />
      <Button style={styles.button} titleStyle={[fontSize=24, fontWeight="bold"]} title="Confirm Time" onPress={confirmTime} />
      </View>
      </View>
    </Modal>
  );
}


TimePicker.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default TimePicker;
