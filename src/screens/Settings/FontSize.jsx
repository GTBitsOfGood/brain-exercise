import React from "react";
import { Button, Slider } from "react-native-elements";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    alignItems: "stretch",
    justifyContent: "center",
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
  },
  saveButton: {
    marginVertical: 40,
    backgroundColor: "#2a652c",
    borderRadius: 10,
  },
  // buttonStyle: {
  //   flex: 0.01,
  //   justifyContent: "flex-end",
  //   marginBottom: 36,
  // }
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
        <View style={styles.sliderWithButton}>
          <Slider
            style={styles.slider}
            value={this.state.value}
            thumbTintColor={"#2a652c"}
            minimumValue={16}
            maximumValue={34}
            step={4}
            onValueChange={(value) => this.setState({ value })}
          />
          <View style={styles.buttonStyle}>
            <Button
              buttonStyle={styles.saveButton}
              title="Save Changes"
            />
          </View>
          <Button
            buttonStyle={styles.button}
            style={styles.saveButton}
            title="Save Changes"
          />
        </View>
      </View>
    );
  }
}
