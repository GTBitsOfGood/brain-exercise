import { StyleSheet, Platform, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "white",
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: 300,
    alignItems: "center",
  },
  greeting: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 8,
    color: "#2B3674",
    fontWeight: "600",
  },
  motivation: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 8,
    color: "#4A4B57",
    fontWeight: "400",
    paddingLeft: 4,
  },
  name: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 8,
    color: "#008AFC",
    fontWeight: "600",
  },
  footerButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: 10,
  },
  bodyContainer: {
    justifyContent: "space-between",
    paddingTop: 16,
    paddingBottom: 16,
  },
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 4,
  },
  divider: {
    width: "100%",
    minWidth: 230,
    height: 1.5,
    backgroundColor: "#E3EAFC",
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

  headingText: { fontSize: 20, fontWeight: "bold" },

  exercisesContainer: { marginBottom: 24 },

  summaryButton: {
    backgroundColor: "#E3EAFC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    flexDirection: "row",
    padding: 10,
    marginLeft: 60,
    marginRight: 60,
    gap: 10,
  },

  summaryText: {
    backgroundColor: "#E3EAFC",
    color: "#008AFC",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    alignSelf: "center",
    width: Dimensions.get("window").width - 200,
    height:
      Platform.OS === "ios" && Platform.isPad
        ? 400
        : Dimensions.get("window").height * 0.15,
    resizeMode: "contain",
  },
  icon: {
    fontSize: Platform.OS === "ios" && Platform.isPad ? 60 : 45,
  },
});

export const streakStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 8,
  separatorStrokeUnfinishedWidth: 8,
  separatorStrokeFinishedWidth: 8,
  stepStrokeWidth: 0,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: "#005AA3",
  stepStrokeFinishedColor: "#005AA3",
  stepStrokeUnfinishedColor: "#005AA3",
  separatorFinishedColor: "#005AA3",
  separatorUnFinishedColor: "#dbdbdb",
  stepIndicatorFinishedColor: "#005AA3",
  stepIndicatorUnFinishedColor: "#dbdbdb",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnfinishedColor: "#000000",
};
