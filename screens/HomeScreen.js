import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "red",
    fontSize: 20,
  },
});

function HomeScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
