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

function Gameplay({ navigation }) {
  return (
    <View>
      <Text>Game Play</Text>
      <Button
        title="Pause"
        style={styles.button}
        onPress={() => navigation.navigate("Pause")}
      />
      <Button
        title="Intermediate Level"
        style={styles.button}
        onPress={() => navigation.navigate("GameplayIntermediate")}
      />
    </View>
  );
}

Gameplay.propTypes = {
  navigation: PropTypes.object,
};

export default Gameplay;
