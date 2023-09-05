import { StyleSheet, Platform, Dimensions } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-around",
    marginHorizontal: 20,
    backgroundColor: "white",
  },
  image: {
    alignSelf: "center",
    width: Dimensions.get("window").width - 50,
    height: Platform.OS === "ios" && Platform.isPad ? 500 : Dimensions.get("window").height * 0.3,
    resizeMode: "contain",
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    color: "#4A4B57",
    marginBottom: 25,
  },
  icon: {
    fontSize: Platform.OS === "ios" && Platform.isPad ? 60 : 45,
  },
  squareButton: {
    width: Platform.OS === "ios" && Platform.isPad ? 150 : 99,
    height: Platform.OS === "ios" && Platform.isPad ? 150 : 99,
    backgroundColor: "white",
    borderColor: "#005AA3",
    borderWidth: 5,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  squareButtonTitle: {
    marginTop: 5,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "400",
  },
});

export default styles;