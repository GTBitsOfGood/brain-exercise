import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 30,
  },
  button: {
    marginTop: 20,
    borderRadius: 10,
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
