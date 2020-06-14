import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
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
    margin: 30,
  },
  button: {
    margin: 30,
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Brain Gains</Text>
      <Button
        title="Games"
        style={styles.button}
        onPress={() => navigation.navigate("Games")}
      />
      <Button
        title="Settings"
        style={styles.button}
        onPress={() => navigation.navigate("Settings")}
      />
      <Button
        title="Notification"
        style={styles.button}
        onPress={() => navigation.navigate("Notification")}
      />
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
