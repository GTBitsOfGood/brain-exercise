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
    alignSelf: "center",
    fontSize: 18,
  },
  button: {
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 0.9,
  },
  fontButton: {
    alignContent: "space-between",
    color: "gray",
    borderRadius: 10,
    marginTop: 20,
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
        <Text style={styles.subtext}>Daily Reminder</Text>
        <Switch
          trackColor={{ false: "#ffffff", true: "#2a652c" }}
          onValueChange={toggleSwitch}
          value={isEnabled}
          accessibilityRole="switch"
        />
      </View>
      <View style={styles.reminder}>
        <Text style={styles.subtext}>Set Reminder Time</Text>
        <Button
          title="10:00 am"
          buttonStyle={styles.button}
          titleStyle={{
            fontSize: 18,
            color: "black",
          }}
          type="outline"
          onPress={() => navigation.navigate("TimePicker")}
        />
      </View>
        <Button
          title="Font Size                                                 >"
          buttonStyle={styles.fontButton}
          titleStyle={{
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          }}
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
