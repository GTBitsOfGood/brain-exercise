import "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import Text from "../../components/Text";
import ScoreValues from "./ScoreValues";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "white"
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});

function FinishedScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Congratulations on completing today&apos;s brain exercise!</Text>
      <Text style={styles.text}>Score: {ScoreValues.correct}/{ScoreValues.total}</Text>
      <Button
        title="Return to Home"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Button
        title="More Practice"
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
