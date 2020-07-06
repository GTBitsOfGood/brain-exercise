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
  },
  button: {
    alignContent: "space-between",
    color: "black",
    borderRadius: 10,
    marginTop: 20,
  },
});

function Pause({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Pause screen</Text>
      <Button
        title="Unpause"
        type="outline"
        buttonStyle={styles.button}
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Return to Home"
        type="outline"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}

Pause.propTypes = {
  navigation: PropTypes.object,
};

export default Pause;
