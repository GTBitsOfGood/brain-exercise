import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import Text from "../../components/Text";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    alignContent: "space-between",
    marginTop: 20,
    borderRadius: 10,
  },
});

function Pause({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{`You're just getting started. Keep going!`}</Text>
      <Button
        title="Resume"
        buttonStyle={styles.button}
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Return to Home"
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
