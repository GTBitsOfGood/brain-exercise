/* eslint-disable react/display-name */
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
    marginVertical: 30,
  },
  button: {
    borderRadius: 10,
  },
  pause: {
    // alignContent: "space-between",
    borderRadius: 10,
  },
});

function GameplayIntermediate({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="⏸"
          titleStyle={{
            color: "white",
            fontSize: 16,
          }}
          buttonStyle={styles.pause}
          type="clear"
          onPress={() => navigation.navigate("Pause")}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Intermediate</Text>
      <Button
        title="Finished"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("FinishedScreen")}
      />
    </View>
  );
}

GameplayIntermediate.propTypes = {
  navigation: PropTypes.object,
};

export default GameplayIntermediate;
