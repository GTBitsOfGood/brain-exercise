import "react-native-gesture-handler";
import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import Text from "../../components/Text";

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
  },
  button: {
    alignContent: "space-between",
    marginTop: 20,
    borderRadius: 10,
    color: "black",
  },
});

function Pause({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Pause screen</Text>
      <Button
        title="Unpause"
        buttonStyle={styles.button}
        type="outline"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Return to Home"
        buttonStyle={styles.button}
        type="outline"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}

Pause.propTypes = {
  navigation: PropTypes.object,
};

export default Pause;
