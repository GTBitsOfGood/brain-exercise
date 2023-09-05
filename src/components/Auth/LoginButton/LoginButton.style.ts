import { StyleSheet, Platform, Dimensions } from "react-native";

const styles = StyleSheet.create({
  loggedInLabel: {
    textAlign: "center",
    fontSize: 20,
  },
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 34,
    textAlign: "center",
    marginVertical: 8,
    color: "#4A4B57",
  },
  squareButton: {
    width: Platform.OS === "ios" && Platform.isPad ? 150 : 99,
    height: Platform.OS === "ios" && Platform.isPad ? 150 : 99,
    backgroundColor: "white",
    borderColor: "#005AA3",
    borderWidth: 5,
    borderRadius: 25,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
  },
  buttonTitle: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  squareButtonTitle: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "400",
  },
  imageContainer: {
    flex: 2,
    width: "100%",
    height: 150,
    borderRadius: 2,
    flexDirection: "column",
    padding: 8,
  },
  image: {
    alignSelf: "center",
    width: Dimensions.get("window").width - 50,
    height:
      Platform.OS === "ios" && Platform.isPad
        ? 400
        : Dimensions.get("window").height * 0.2,
    resizeMode: "contain",
  },
});

export default styles;
