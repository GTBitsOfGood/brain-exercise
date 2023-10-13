/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Button from "../../components/Button";
import Text from "../../components/Text";
import "react-native-gesture-handler";
import { RootStackParamList } from "../../types";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  pause: {
    // alignContent: "space-between",
    borderRadius: 10,
  },
  button: {
    marginTop: 15,
  },
});

type Props = NativeStackScreenProps<RootStackParamList, "ExtraPractice">;

function ExtraPractice({ navigation }: Props) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Choose an exercise!</Text>
      <View>
        <Button
          title="Math"
          icon={{
            name: "calculator",
            type: "font-awesome",
            size: 20,
            color: "white",
          }}
          buttonStyle={styles.button}
          onPress={() =>
            navigation.navigate("MathIntro", {
              nextScreenArgs: [
                "MathMain",
                { nextScreenArgs: ["ExtraPractice"] },
              ],
            })
          }
        />
        <Button
          title="Reading"
          icon={{
            name: "book",
            type: "font-awesome",
            size: 20,
            color: "white",
          }}
          buttonStyle={styles.button}
          onPress={() =>
            navigation.navigate("ReadingIntro", {
              nextScreenArgs: [
                "ReadingMain",
                { nextScreenArgs: ["ExtraPractice"] },
              ],
            })
          }
        />
        <Button
          title="Writing Prompts"
          icon={{
            name: "pencil",
            type: "font-awesome",
            size: 20,
            color: "white",
          }}
          buttonStyle={styles.button}
          onPress={() =>
            navigation.navigate("WritingIntro", {
              nextScreenArgs: [
                "WritingMain",
                { nextScreenArgs: ["ExtraPractice"] },
              ],
            })
          }
        />
        <Button
          title="Trivia"
          icon={{
            name: "question-circle",
            type: "font-awesome",
            size: 20,
            color: "white",
          }}
          buttonStyle={styles.button}
          onPress={() =>
            navigation.navigate("TriviaIntro", {
              nextScreenArgs: [
                "TriviaMain",
                { nextScreenArgs: ["ExtraPractice"] },
              ],
            })
          }
        />
        <Button
          title="Return to Home"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
    </View>
  );
}

ExtraPractice.propTypes = {
  navigation: PropTypes.object,
};

export default ExtraPractice;
