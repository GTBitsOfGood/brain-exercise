import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 30,
  },
  button: {
    marginTop: 20,
    borderRadius: 10,
  }
});

function FinishedScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Congratulations on completing today&apos;s brain exercise!</Text>
      <Button
        title="Return to Home"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Button
        title="Extra Practice"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("ExtraPractice")}
      />
    </View>
  );
}

FinishedScreen.propTypes = {
  navigation: PropTypes.object,
};

export default FinishedScreen;

// This page is also known as "Exercises Completed"