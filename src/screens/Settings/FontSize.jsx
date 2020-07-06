import React from "react";
import Slider from "react-native-communitu";
import { View, Text, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "stretch",
  },
  slider: {
    width: 200,
    height: 40,
  },
});

function FontSize() {
  return (
    <View style={Styles.root}>
      <Slider
        style={Styles.slider}
        minimumValue={20}
        maximumValue={34}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <Text>Slider for font FontSize</Text>
    </View>
  );
}

export default FontSize;
