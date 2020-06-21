import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 30,
  },
});

function ExtraPractice({ navigation }) {
  return (
    <View style={styles.root}>
      <Text>Insert Extra Practice Problems here!</Text>
      <Button
        title="Return to Home"
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Button
        title="Pause"
        style={styles.button}
        onPress={() => navigation.navigate("Pause")}
      />
    </View>
  );
}

ExtraPractice.propTypes = {
  navigation: PropTypes.object,
};

export default ExtraPractice;
