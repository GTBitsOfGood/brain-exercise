import React from "react";
import { Button, Slider } from "react-native-elements";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#f5f5f5",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  slider: {
    maxHeight: 100,
  },
  button: {
    backgroundColor: "#2a652c",
    borderRadius: 10,
  },
  notText: {
    marginVertical: 160,
  }
});

export default class FontSize extends React.Component {
  state = {
    value: 20,
  };

  render() {
    return (
      <View style={styles.root}>
        <Text style={StyleSheet.create({fontSize: this.state.value})}>
          Drag the slider below to make the text on screen smaller or larger. Value: {this.state.value}
        </Text>
        <View style={styles.notText}>
          <Slider
            style={styles.slider}
            value={this.state.value}
            minimumValue={16}
            maximumValue={34}
            step={1}
            onValueChange={(value) => this.setState({ value })}
          />
          <Button
            buttonStyle={styles.button}
            title="Save Changes"
          />
        </View>
      </View>
    );
  }
}
