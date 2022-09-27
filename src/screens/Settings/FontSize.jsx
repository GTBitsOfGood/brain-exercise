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

function FontSize({ route, navigation }) {
  const settingsObj = route.params;
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    settingsObj.fontSize = route.params.fontSize || defaultSettings.fontSize;
    setTimeout(
      () => setValue(route.params.fontSize || defaultSettings.fontSize),
      50
    );
  }, []);

  const storeSettings = async () => {
    setIsLoading(true);
    settingsObj.fontSize = value;
    const jsonSettings = JSON.stringify(settingsObj);
    await AsyncStorage.setItem("SETTINGS", jsonSettings);
    setIsLoading(false);
  };

  return (
    <View style={styles.root}>
      <View style={styles.textWrapper}>
        <Text style={{ fontSize: value, textAlign: "center" }}>
          Drag the slider below to make the text on screen smaller or larger.
        </Text>
      </View>
      <View>
        <Slider
          // style={styles.slider}
          thumbTintColor={"#2a652c"}
          allowTouchTrack={true}
          minimumValue={16}
          maximumValue={28}
          step={3}
          onValueChange={(v) => setValue(v)}
          value={value}
        />
        <View style={styles.texts}>
          <Text style={{ fontSize: 16 }}>T</Text>
          <Text style={{ fontSize: 28 }}>T</Text>
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
            })
          );
        }}
        loading={isLoading}
      />
    </View>
  );
}

FontSize.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.any,
};

export default FontSize;
