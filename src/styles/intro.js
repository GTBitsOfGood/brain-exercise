import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white"
  },
  instructions: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 20,
  },
  headInstruction: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subInstructions: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
  },
  image: {
    height: "100%",
    resizeMode: 'contain',
  }
});

export default styles;