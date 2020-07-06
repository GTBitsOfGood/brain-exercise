import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements"
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
    padding: 30,
  },
});

//  Home Screen Navigation
function HomeScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Brain Gains</Text>

      {/* Home Screen Navigation Buttons: */}

      <Button
        title="Start Exercises"
        style={styles.button}
        onPress={() => navigation.navigate("GameOverview")}
      />
      <Button
        title="Settings"
        style={styles.button}
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      <Button
        title="Videos"
        style={styles.button}
        onPress={() => navigation.navigate("Video")}
      />
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
