import React from "react";
//  import { Slider } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "stretch",
  },
});

export default function FontSize() {
  return (
    <View style={styles.root}>
      <Text>Hello there</Text>
    </View>
  );
}
