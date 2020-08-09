import React, { useState } from "react";
import { View, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Notifications } from "expo";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from '@react-navigation/native';
import Text from "../../components/Text";
import defaultSettings from "../../components/DefaultSettings"

/**
 * Takes in a settings object and stores it in Async Storage.
 * @param {Object} settingsObj A settings object
 */
const storeSettings = async (settingsObj) => {
  const jsonSettings = JSON.stringify(settingsObj)
  await AsyncStorage.setItem("SETTINGS", jsonSettings)
}

/**
 * Pulls an object containing the app settings from Async Storage and returns it.
 * If no settings exist in Async Storage, default settings are pushed and returned.
 */
const pullSettings = async () => {
  const jsonSettings = await AsyncStorage.getItem("SETTINGS")
  if (jsonSettings !== null) {
     const result = await JSON.parse(jsonSettings);
     return result;
  } 
  return defaultSettings
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    paddingVertical: 20,
  },
  reminder: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  reminderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginVertical: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginHorizontal: 30,
  },
  subtext: {
    fontSize: 16,
    textAlign: "left",
    alignSelf: "center",
    marginVertical: 15,
  },
  animation: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginVertical: 15,
  },
  timeButton: {
    borderRadius: 10,
  },
  fontSizeNavigator: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    borderBottomColor: "black",
    marginVertical: 15,
  },
  lines: {
    marginHorizontal: 30,
    fontSize: 16,
  }
});

// {/* <View style={styles.root}>
//        <Text style={styles.text}>Notifications</Text>
//        <View style={styles.reminder}>
//         <Text style={styles.subtext}>Daily Reminder</Text>
//         <Switch
//           trackColor={{ false: "#ffffff", true: "#2a652c" }}
//           onValueChange={toggleSwitch}
//           value={toggleOn}
//           accessibilityRole="switch"
//         />
//       </View>
//       {
//         toggleOn &&
//           <View style={styles.reminder}>
//             <Text style={styles.subtext}>Set Reminder Time</Text>
//             <Button
//               title={getDate()}
//               type="outline"
//               buttonStyle={styles.timeButton}
//               onPress={() => navigation.navigate("TimePicker", settings)}
//             />
//           </View>
//       }
//       {/* <Button
//         title="Font Size                                                 >"
//         buttonStyle={styles.fontButton}
//         titleStyle={{
//           fontSize: 20,
//           fontWeight: "bold",
//           color: "black",
//         }}
//         type="clear"
//         containerStyle={{ margin: 20 }}
//         onPress={() => navigation.navigate("FontSize", settings)}
//       /> */}
//       <TouchableOpacity 
//         style={styles.fontSizeNavigator}
//         onPress={() => navigation.navigate("FontSize", settings)}
//         >
//         <Text>Font Size</Text>
//         <Text>{">"}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity 
//         style={styles.fontSizeNavigator}
//         onPress={() => navigation.navigate("SoundScreen", settings)}
//         >
//         <Text>Sounds</Text>
//         <Text>{">"}</Text>
//       </TouchableOpacity>
//       <View style={styles.animation}>
//         <Text style={{marginHorizontal: 0, fontSize: 20, fontWeight: "bold"}}>Animation</Text>
//         <Switch
//           trackColor={{ false: "#ffffff", true: "#2a652c" }}
//           onValueChange={() => toggleAnimations()}
//           value={animationToggleOn}
//           accessibilityRole="switch"
//         />
//       </View>
//     </View> */}

// Settings Navigation
function SettingsScreen({ navigation }) {
  const [settings, setSettings] = useState(defaultSettings);
  const [toggleOn, setToggleOn] = useState(settings.notificationsActive);
  const [animationToggleOn, setAnimationToggleOn] = useState(settings.animationOn)

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      pullSettings()
      .then((item) => setSettings(item));
    }, [])
  );

  function getDate() {
    const dateObj = new Date(settings.scheduledTime);
    const date = dateObj.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}).replace(/^(?:00:)?0?/, '');
    return date;
  }

  const toggleSwitch = () => {
    if (toggleOn) {
      // going from enabled to unenabled
      Notifications.cancelAllScheduledNotificationsAsync();
      setToggleOn(false);
      settings.notificationsActive = false
    } else {
      // going from unenabled to enabled
      setToggleOn(true);
      settings.notificationsActive = true
    }
    storeSettings(settings)
  }

  const toggleAnimations = () => {
    if (animationToggleOn) {
      // going from enabled to unenabled
      setAnimationToggleOn(false)
      settings.animationOn = false
    } else {
      setAnimationToggleOn(true)
      settings.animationOn = true
    }
    storeSettings(settings)
  }

  return (
    <View style={styles.root}>
      <View>
       <Text style={styles.text}>Notifications</Text>
       <View style={styles.reminder}>
        <Text style={styles.subtext}>Daily Reminder</Text>
        <Switch
          trackColor={{ false: "#ffffff", true: "#2a652c" }}
          onValueChange={toggleSwitch}
          value={toggleOn}
          accessibilityRole="switch"
        />
      </View>
      {
        toggleOn &&
          <View style={styles.reminder}>
            <Text style={styles.subtext}>Set Reminder Time</Text>
            <Button
              title={getDate()}
              type="outline"
              buttonStyle={styles.timeButton}
              onPress={() => navigation.navigate("TimePicker", settings)}
            />
          </View>
      }
      </View>
      <View>
        <TouchableOpacity 
          style={styles.fontSizeNavigator}
          onPress={() => navigation.navigate("FontSize", settings)}
          >
          <Text>Font Size</Text>
          <Text>{">"}</Text>
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity 
        style={styles.fontSizeNavigator}
        onPress={() => navigation.navigate("SoundScreen", settings)}
        >
        <Text>Sounds</Text>
        <Text>{">"}</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.animation}>
        <Text style={{marginHorizontal: 0, fontSize: 15, fontWeight: "bold",}}>Animation</Text>
        <Switch
          trackColor={{ false: "#ffffff", true: "#2a652c" }}
          onValueChange={() => toggleAnimations()}
          value={animationToggleOn}
          accessibilityRole="switch"
        />
      </View>
    </View>
  );
}

SettingsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SettingsScreen;
