import { StyleSheet } from "react-native";

const SettingsStyle = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    padding: 20,
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
    marginLeft: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 15,
  },
  subtext: {
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
    borderRadius: 10,
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
  },
  icon: {
    marginRight: 10,
  },
  rowInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default SettingsStyle;
