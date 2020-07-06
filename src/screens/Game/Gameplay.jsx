/* eslint-disable react/display-name */
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
  },
  pause: {
    // alignContent: "space-between",
    borderRadius: 10,
  },
});

function Gameplay({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          titleStyle={{
            color: "white",
            fontSize: 16,
          }}
          buttonStyle={styles.pause}
          onPress={() => navigation.navigate("Pause")} title="Pause"
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Game Play</Text>
      <Button
        title="Go to Intermediate Level"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("GameplayIntermediate")}
      />
    </View>
  );
}

Gameplay.propTypes = {
  navigation: PropTypes.object,
};

export default Gameplay;
