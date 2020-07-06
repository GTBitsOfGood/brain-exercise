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

function GameMaterials({ navigation }) {
  return (
    <View style={styles.root}>
      <Text>Before you start, make sure you have the required materials!</Text>
      <Button
        title="GamePlay"
        style={styles.button}
        onPress={() => navigation.navigate("Gameplay")}
      />
    </View>
  );
}

GameMaterials.propTypes = {
  navigation: PropTypes.object,
};

export default GameMaterials;
