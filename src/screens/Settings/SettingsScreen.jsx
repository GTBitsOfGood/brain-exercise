import React, { useState } from "react";
import { View, StyleSheet, Switch, Text } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#f5f5f5",
    marginVertical: 30,
  },
  reminder: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginHorizontal: 30,
  },
  text: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 30,
  },
  subtext: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 30,
  },
  button: {
    alignContent: "space-between",
    color: "black",
  }
});

// Settings Navigation
function SettingsScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
     <View style={styles.root}>
       <Text style={styles.text}>Notifications</Text>
       <View style={styles.reminder}>
        <Text>Daily Reminder</Text>
        <Switch
          trackColor={{ false: "#ffffff", true: "#2a652c" }}
          onValueChange={toggleSwitch}
          value={isEnabled}
          accessibilityRole="switch"
        />
      </View>
      <View style={styles.reminder}>
        <Text>Set Reminder Time</Text>
        <Button
        title="10:00 am"
        type="outline"
        onPress={() => navigation.navigate("TimePicker")}
      />
      </View>
      <Button
        buttonStyle={styles.button}
        title="Font Size                                                 >"
        type="clear"
        containerStyle={{ margin: 20 }}
        onPress={() => navigation.navigate("FontSize")}
      />
    </View>
  );
}

SettingsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SettingsScreen;
