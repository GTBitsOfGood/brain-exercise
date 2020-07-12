import React from "react";
import { Button, Slider } from "react-native-elements";
import { StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#f5f5f5",
    marginVertical: 30,
    marginHorizontal: 30,
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

/**
 * Retrieves the currently saved font size from async storage and returns it to user.
 * Default font size is 20px if fontsize is not available.
 */
const getFontSize = async () => {
  try {
    const fontSize = await AsyncStorage.getItem("FONTSIZE")
    if (fontSize !== null) {
      return fontSize
    }
    return 20
  } catch (err) {
    return err
  }
}

/**
 * Stores the currently selected font size in async storage.
 * Returns true if successful.
 * @param {int} fontSize 
 */
const storeFontSize = async (fontSize) => {
  try {
   await AsyncStorage.setItem("FONTSIZE", fontSize.toString())
   return true
  } catch (err) {
    return err
  }
}

export default class FontSize extends React.Component {
  state = {
    value: getFontSize(),
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
          <View style={styles.texts}>
            <Text style={{fontSize:16}}>T</Text>
            <Text style={{fontSize:34}}>T</Text>
          </View>
        </View>
        <Button
          buttonStyle={styles.saveButton}
          title="Save Changes"
          onPress={() => storeFontSize(this.state.value)}
        />
      </View>
    );
  }
}
