import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
    paddingTop: 5,
  },
  expressionText: {
    fontSize: 50,
    fontWeight: "bold",
    paddingBottom: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 40,
    paddingTop: 80,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    alignSelf: "center",
    minWidth: 99,
    height: 99,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "#005AA3",
    backgroundColor: "#fff",
  },
  selectedButton: {
    backgroundColor: "#005AA3",
  },
  buttonTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  selectedButtonTitle: {
    color: "white",
  },
  disabledButtonTitle: {
    color: "dimgrey",
  },
});
export default styles;
