import React, { useState } from "react";
import { Button, Slider } from "react-native-elements";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from 'prop-types';
import AsyncStorage from "@react-native-community/async-storage";
import defaultSettings from "../../components/DefaultSettings"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  saveButton: {
    marginTop: 20,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#2a652c",
  },
  sliderWithButton: {
    paddingVertical: 160,
  },
  texts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

function FontSize ({ route, navigation }) {
  const settingsObj = route.params;
  const [value, setValue] = useState(route.params.fontSize 
    || defaultSettings.fontSize);
  settingsObj.fontSize = value

  const storeSettings = async () => {
    settingsObj.fontSize = value;
    const jsonSettings = JSON.stringify(settingsObj);
    await AsyncStorage.setItem("SETTINGS", jsonSettings);
  }

  return (
    <View style={styles.root}>
      <Text style={StyleSheet.create({fontSize: value, minHeight:200})}>
        Drag the slider below to make the text on screen smaller or larger.
      </Text>
      <View>
        <Slider
          // style={styles.slider}
          value={value}
          thumbTintColor={"#2a652c"}

          allowTouchTrack={true}
          
          minimumValue={16}
          maximumValue={32}
          step={4}
          onValueChange={(v) => setValue(v)}
        />
        <View style={styles.texts}>
          <Text style={{fontSize:16}}>T</Text>
          <Text style={{fontSize:34}}>T</Text>
        </View>
      </View>
      <Button
        title="Save Changes"
        buttonStyle={styles.saveButton}
        onPressIn={storeSettings}
        onPress={() => navigation.goBack(settingsObj)}
      />
    </View>
  );
}

FontSize.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.any
}

export default FontSize;
