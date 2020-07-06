import React from "react"; // { useState }
import { View, Text } from "react-native"; // Stylesheet
// import DateTimePicker from "@react-native-community/datetimepicker";
// import SwitchToggle from "./Components/SwitchToggle.jsx";

// const styles = StyleSheet.create({
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

function TimePicker() {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  // const [date, setDate] = useState(new Date(1598051730000));
  // const [mode] = useState("time");
  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setDate(currentDate);
  // };
  // return (
  //   <View style={styles.root}>
  //     <View>
  //       {isEnabled && (
  //         <DateTimePicker
  //           testID="dateTimePicker"
  //           value={date}
  //           mode={mode}
  //           is24Hour={true}
  //           display="default"
  //           onChange={onChange}
  //         />
  //       )}
  //     </View>
  //   </View>
  // );
  return (
    <View>
      <Text>Pick your time!</Text>
    </View>
  );
}

export default TimePicker;
