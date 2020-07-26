import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { Button } from "react-native-elements"
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
  },
  button: {
    alignContent: "space-between",
    marginTop: 20,
    borderRadius: 10,
  },
  videoButton: {
    alignContent: "space-between",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#ca0000",
  },
  settingsButton: {
    alignContent: "space-between",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#2a652c",
  },
  
});

//  Home Screen Navigation
function HomeScreen({ navigation }) {
  const youtubeChannelURL = 'https://www.youtube.com/channel/UCDl_hKWzF26lNEg73FNVgtA'
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Brain Gains</Text>

      {/* Home Screen Navigation Buttons: */}

      <Button
        title="Start Exercises"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("ExercisesCompleted")}
      />
      <Button
        title="Settings"
        buttonStyle={styles.settingsButton}
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      <Button
        title="Videos"
        buttonStyle={styles.videoButton}
        onPress={() => Linking.openURL(youtubeChannelURL)}
      />
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
