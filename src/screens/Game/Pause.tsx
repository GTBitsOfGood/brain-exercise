import React from "react";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { unpause } from "../../redux/reducers/pauseReducer";
// import Button from "../../components/Button";
import Text from "../../components/Text";
import { RootStackParamList } from "../../types";
import ContinueButton from "../../components/ContinueButton";

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: "16%",
    backgroundColor: "white",
    height: "100%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2B3674",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 32,
  },
  button: {
    marginTop: 20,
    marginBottom: 15,
    backgroundColor: "#005AA3",
  },
  quit: {
    backgroundColor: "#EEE",
  },
});

function Pause() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.text}>Exercise Paused</Text>
        <View
          style={{
            display: "flex",
            borderWidth: 1,
            borderColor: "#E3EAFC",
            paddingVertical: 64,
            paddingHorizontal: 32,
            borderRadius: 12,
            marginTop: "10%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              borderWidth: 6,
              borderRadius: 100,
              padding: 10,
              borderColor: "#008AFC",
            }}
          >
            <FontAwesome5 name="pause" size={22} color="#008AFC" />
          </View>
          <Text
            style={styles.text}
          >{`You're just getting\nstarted. Keep going!`}</Text>
        </View>
      </View>
      <ContinueButton
        title="Resume"
        backgroundColor="#008AFC"
        titleColor="white"
        onPressFn={() => {
          dispatch(unpause());
          navigation.goBack();
        }}
      />
      {/* <Button
        title="Quit"
        buttonStyle={styles.quit}
        titleStyle={{ color: "red" }}
        onPress={() =>
          Alert.alert(
            "Quit the Game",
            "Are you sure? This will delete ALL of your progress.",
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Quit",
                onPress: () => {
                  dispatch(unpause());
                  navigation.navigate("HomeScreen");
                },
              },
            ],
            { cancelable: false },
          )
        }
      /> */}
    </View>
  );
}

export default Pause;
