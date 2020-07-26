import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements"
import PropTypes from "prop-types";
import StepIndicator from "react-native-step-indicator";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#f5f5f5",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginVertical: 25,
  },

  button: {
    alignContent: "space-between",
    borderRadius: 10,
    marginTop: 20,
  },
  videoButton: {
    alignContent: "space-between",
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#ca0000",
  },
  settingsButton: {
    alignContent: "space-between",
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#2a652c",
  },
});

const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 8,
  separatorStrokeUnfinishedWidth: 8,
  separatorStrokeFinishedWidth: 8,
  stepStrokeWidth: 0,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: "#0363f5",
  stepStrokeFinishedColor: "#0363f5",
  stepStrokeUnfinishedColor: "#0363f5",
  separatorFinishedColor: "#0363f5",
  separatorUnFinishedColor: "#dbdbdb",
  stepIndicatorFinishedColor: "#0363f5",
  stepIndicatorUnFinishedColor: "#dbdbdb",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnfinishedColor: "#000000",  
}

//  Home Screen Navigation
function HomeScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>X of X Days</Text>

      {/* Home Screen Step Indicator */}

      <StepIndicator
        customStyles={customStyles}
        currentPosition={2}
      />

      <Text style={styles.title}>Keep Going!</Text>      

      {/* Home Screen Navigation Buttons: */}

      <Button
        title="Start Exercises"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("GameOverview")}
      />
      <Button
        title="Settings"
        buttonStyle={styles.settingsButton}
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      <Button
        title="Videos"
        buttonStyle={styles.videoButton}
        onPress={() => navigation.navigate("Video")}
      />
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
