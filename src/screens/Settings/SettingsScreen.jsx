import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";

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
    padding: 30,
  },
  button: {
    padding: 20,
  },
});

// Settings Navigation
function SettingsScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Button
        title="Time Picker"
        style={styles.button}
        onPress={() => navigation.navigate("TimePicker")}
      />
      <Button
        title="Font Size"
        style={styles.button}
        onPress={() => navigation.navigate("FontSize")}
      />
    </View>
  );
}

SettingsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SettingsScreen;
