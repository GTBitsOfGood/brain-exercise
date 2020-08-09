/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import Text from "../../components/Text";
import "react-native-gesture-handler";

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
    alignContent: "space-between",
    marginTop: 20,
    borderRadius: 10,
  },
  pause: {
    // alignContent: "space-between",
    borderRadius: 10,
  },
});

function ExtraPractice({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          titleStyle={{
            color: "white",
            fontSize: 16,
          }}
          buttonStyle={styles.pause}
          onPress={() => navigation.navigate("Pause")}
          title="⏸"
          type="clear"
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Insert Extra Practice Problems here!</Text>
      <Button
        title="Return to Home"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}

ExtraPractice.propTypes = {
  navigation: PropTypes.object,
};

export default ExtraPractice;
