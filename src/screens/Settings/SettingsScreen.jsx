import React from "react"; // useState
import { View, Text, StyleSheet } from "react-native"; // Switch,
import { Button } from "react-native-elements";
// import DateTimePicker from "@react-native-community/datetimepicker";
import PropTypes from "prop-types";
// import SwitchToggle from "./Components/SwitchToggle.jsx";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "black",
    fontSize: 30,
    padding: 30,
  },
  button: {
    padding: 30,
  },
});

// Settings Navigation
function SettingsScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Settings</Text>
      <Button
        title="Time Picker"
        style={styles.button}
        onPress={() => navigation.navigate("TimePicker")}
      />
      <Button
        title="Font Size"
        style={styles.button}
        onPress={() => navigation.navigate("Font Size")}
      />
    </View>
  );
}

SettingsScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SettingsScreen;

// Settings Screen Content

// const styles02 = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     paddingVertical: 30,
//   },
//   intermediate: {
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     marginBottom: 130,
//   },
//   notificationText: {
//     fontSize: 25,
//   },
// });

// function Settings() {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode] = useState("time");

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setDate(currentDate);
//   };

//   return (
//     <View style={styles02.root}>
//       <View style={styles02.intermediate}>
//         <Text style={styles02.notificationText}>Notifications</Text>
//         <Switch
//           trackColor={{ false: "#767577", true: "#4169e1" }}
//           ios_backgroundColor="#3e3e3e"
//           onValueChange={toggleSwitch}
//           value={isEnabled}
//         />
//       </View>
//       <View>
//         {isEnabled && (
//           <DateTimePicker
//             testID="dateTimePicker"
//             value={date}
//             mode={mode}
//             is24Hour={true}
//             display="default"
//             onChange={onChange}
//           />
//         )}
//       </View>
//     </View>
//   );
// }

// export default { SettingsScreen };
