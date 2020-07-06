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

function FinishedScreen({ navigation }) {
  return (
    <View>
      <Text>Congratulations on completing today&apos;s brain exercise!</Text>
      <Button
        title="Return to Home"
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Button
        title="Extra Practice"
        style={styles.button}
        onPress={() => navigation.navigate("ExtraPractice")}
      />
    </View>
  );
}

FinishedScreen.propTypes = {
  navigation: PropTypes.object,
};

export default FinishedScreen;
