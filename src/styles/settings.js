import { StyleSheet } from "react-native";
import "@fontsource/poppins";

const SettingsStyle = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingTop: 44,
    paddingBottom: 30,
  },
  layout: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "white",
  },
  notifications: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  notificationChildren: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#2b3674",
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 15,
  },
  headerText: {
    color: "#2b3674",
    fontFamily: "Poppins",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 15,
  },
  subtext: {
    color: "#2b3674",
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "left",
    alignSelf: "center",
    marginVertical: 15,
  },
  animationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  timeButton: {
    backgroundColor: "#e3eafc",
    borderRadius: "100%",
    width: 150,
    height: 30,
    padding: 0,
    borderColor: "transparent",
  },
  buttonText: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 20,
    color: "#2b3674",
  },
  touchableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "black",
    marginVertical: 10,
    alignItems: "center",
  },
  lines: {
    marginHorizontal: 30,
    fontSize: 16,
  },
  section: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  rowInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  thumbStyle: {
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  trackStyle: {
    backgroundColor: "787880",
  },
  slider: {
    marginBottom: 10,
    width: "75%",
  },
  minSize: {
    fontSize: 16,
    marginBottom: 10,
  },
  maxSize: {
    fontSize: 32,
    marginBottom: 10,
  },
  footerButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 4,
  },
  footerTextSelected: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2B3674",
    paddingTop: 4,
  },
  footerTextUnselected: {
    fontSize: 16,
    fontWeight: "500",
    color: "#9CA5C2",
    paddingTop: 4,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "500",
    paddingTop: 4,
  },
  logoutOpenButton: {
    backgroundColor: "#008AFC",
    borderRadius: 12,
    padding: 4,
  },
});
export default SettingsStyle;
