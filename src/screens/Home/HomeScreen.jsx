import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { Button } from "react-native-elements"
import PropTypes from "prop-types";

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
    marginVertical: 30,
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
