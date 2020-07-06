import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#f5f5f5",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 30,
  },
  button: {
    borderRadius: 10,
    marginTop: 20,
  },
});

function Video() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Note: You will be redirected to Brain Exercise&apos;s Youtube Channel</Text>
    </View>
  );
}

export default Video;
