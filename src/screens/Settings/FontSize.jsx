import React, { useState } from "react";
import { Button, Slider } from "react-native-elements";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from 'prop-types';
import AsyncStorage from "@react-native-community/async-storage";
import { defaultSettings } from './SettingsScreen.jsx';

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

function FontSize ({ route }) {
  const [value, setValue] = useState(route.params.fontSize 
    || defaultSettings.fontSize);

  const storeSettings = async () => {
    const settingsObj = route.params;
    settingsObj.fontSize = value;
    const jsonSettings = JSON.stringify(settingsObj);
    await AsyncStorage.setItem("SETTINGS", jsonSettings);
  }

  return (
    <View style={styles.root}>
      <Text style={StyleSheet.create({fontSize: value, height:125})}>
        Drag the slider below to make the text on screen smaller or larger.
      </Text>
      <View>
        <Slider
          style={styles.slider}
          value={value}
          thumbTintColor={"#2a652c"}
          minimumValue={16}
          maximumValue={34}
          step={4}
          onValueChange={(v) => setValue(v)}
        />
        <View style={styles.texts}>
          <Text style={{fontSize:16}}>T</Text>
          <Text style={{fontSize:34}}>T</Text>
        </View>
      </View>
      <Button
        buttonStyle={styles.saveButton}
        title="Save Changes"
        onPress={storeSettings}
      />
    </View>
  );
}

FontSize.propTypes = {
  route: PropTypes.any
}

export default FontSize;
