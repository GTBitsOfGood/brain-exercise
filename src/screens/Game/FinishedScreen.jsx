import "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import Text from "../../components/Text";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    padding: 30,
    backgroundColor: "white"
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
        onPress={() => navigation.navigate("GameMaterials")}
      />
    </View>
  );
}

FinishedScreen.propTypes = {
  navigation: PropTypes.object,
};

export default FinishedScreen;

// This page is also known as "Exercises Completed"
