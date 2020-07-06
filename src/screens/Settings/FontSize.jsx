import React from "react";
import { Button, Slider } from "react-native-elements";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
<<<<<<< HEAD
    alignContent: "center",
    backgroundColor: "#f5f5f5",
    marginVertical: 30,
    marginHorizontal: 30,
=======
    flexDirection: "column",
    padding: 10,
    alignItems: "stretch",
    justifyContent: "space-between",
>>>>>>> ac0b9645932ab802037ce32a66522615c09d13f7
  },
  saveButton: {
    backgroundColor: "#2a652c"
  },
  sliderWithButton: {
    paddingVertical: 160,
  },
  texts: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default class FontSize extends React.Component {
  state = {
    value: 20,
  };

  render() {
    return (
      <View style={styles.root}>
        <Text style={StyleSheet.create({fontSize: this.state.value, height:125})}>
          Drag the slider below to make the text on screen smaller or larger.
        </Text>
        <View>
          <Slider
            style={styles.slider}
            value={this.state.value}
            thumbTintColor={"#2a652c"}
            minimumValue={16}
            maximumValue={34}
            step={4}
            onValueChange={(value) => this.setState({ value })}
          />
<<<<<<< HEAD
          <Button
            buttonStyle={styles.button}
            title="Save Changes"
          />
=======
          <View style={styles.texts}>
            <Text style={{fontSize:16}}>T</Text>
            <Text style={{fontSize:34}}>T</Text>
          </View>
>>>>>>> ac0b9645932ab802037ce32a66522615c09d13f7
        </View>
        <Button
          buttonStyle={styles.saveButton}
          title="Save Changes"
        />
      </View>
    );
  }
}