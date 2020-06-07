import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "red",
    fontSize: 20,
  },
  button: {
    color: "red",
    borderColor: "blue",
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        style={styles.button}
        title="GScreen"
        onPress={() => navigation.navigate("GameScreen")}
      />
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
