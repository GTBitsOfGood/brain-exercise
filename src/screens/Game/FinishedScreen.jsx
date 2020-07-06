import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "#f5f5f5",
    marginVertical: 30,
    marginHorizontal: 30,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 30,
  },
  button: {
    borderRadius: 10,
    marginTop: 20,
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
