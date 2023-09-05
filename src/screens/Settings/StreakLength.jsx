import React, { useState, useEffect } from "react";
import { Slider } from "react-native-elements";
import { CommonActions } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import defaultSettings from "../../components/DefaultSettings";
import Button from "../../components/Button";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
  },
  texts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    textAlign: "center",
  },
  textWrapper: {
    justifyContent: "center",
    minHeight: 200,
  },
});

function StreakLength({ route, navigation }) {
  const settingsObj = route.params;
  const [value, setValue] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    settingsObj.streakLength =
      route.params.streakLength || defaultSettings.streakLength;
    setTimeout(
      () => setValue(route.params.streakLength || defaultSettings.streakLength),
      50,
    );
  }, []);

  const storeSettings = async () => {
    setIsLoading(true);
    settingsObj.streakLength = value;
    const jsonSettings = JSON.stringify(settingsObj);
    await AsyncStorage.setItem("SETTINGS", jsonSettings);
    setIsLoading(false);
  };

  return (
    <View style={styles.root}>
      <View style={styles.textWrapper}>
        <Text style={{ fontSize: settingsObj.fontSize, textAlign: "center" }}>
          Drag the slider below to set the streak length on the home page.
        </Text>
      </View>
      <View>
        <Slider
          // style={styles.slider}
          thumbTintColor={"#2a652c"}
          allowTouchTrack={true}
          minimumValue={1}
          maximumValue={7}
          step={1}
          onValueChange={(v) => setValue(v)}
          value={value}
        />
        <View style={styles.texts}>
          <Text style={{ fontSize: settingsObj.fontSize }}>1</Text>
          <Text style={{ fontSize: settingsObj.fontSize }}>7</Text>
        </View>
      </View>
      <Button
        title="Save Changes"
        buttonStyle={styles.saveButton}
        onPress={async () => {
          await storeSettings();
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "HomeScreen" }],
            }),
          );
        }}
        loading={isLoading}
      />
    </View>
  );
}

StreakLength.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.any,
};

export default StreakLength;
