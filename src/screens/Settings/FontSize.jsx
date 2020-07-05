import React from "react";
//  import { Slider } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "stretch",
  },
});

function FontSize() {
  return (
    <View style={styles.root}>
      <Text>Hello there</Text>
    </View>
  );
}

export default FontSize;
