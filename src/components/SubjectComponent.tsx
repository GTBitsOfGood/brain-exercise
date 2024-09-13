import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OneSixthPieChartIcon from "../assets/OneSixthPieChartIcon";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const styles = StyleSheet.create({
    whiteCircle: {
      width: 39,
      height: 38,
      borderRadius: 19,
      backgroundColor: "#F4F7FE",
      justifyContent: "center",
      alignItems: "center",
    }
  });


interface Props {
  title: string;
  iconName: string;
  attempted: boolean;
  questionsCompleted: number;
  totalTimeSpent: number;
  averageTimePerQuestion: number;
  statColor: string;
}

export default function SubjectComponent({
  title,
  iconName,
  attempted,
  questionsCompleted,
  totalTimeSpent,
  averageTimePerQuestion,
  statColor
}: Props) {


    function secondsToTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;


        if (hours <= 0 && minutes <= 0) {
            return `${secs} sec`;
        } else if (hours <= 0) {
            return `${minutes} min ${secs} sec`;
        } else {
            return `${hours} hr ${minutes} min ${secs} sec`;
        }

    }
    

  return (
    <View
        style={{
            display: "flex",
            marginTop: 10,
            width: "92%",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#E3EAFC",
            backgroundColor: "#FFF",
            paddingTop: "5%",
            paddingBottom: "5%",
            paddingLeft: "4%",
            paddingRight: "4%",
        }}
        >
        {
            attempted ?
            <>
            <View
            style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: "3%",
            }}
        >
            <View style={styles.whiteCircle}>
                <FontAwesome5Icon name={iconName} size={20} color={statColor} />
            </View>
            <Text
            style={{
                color: "#2B3674",
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: "600",
                paddingLeft: "3%",
            }}
            >
            {title}
            </Text>
        </View>
        
        {
            questionsCompleted > 0 ?
            <>
            <View
            style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: "3%",
            }}
        >

            <Text
            style={{
                color: "#2B3674",
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: "600",
                paddingTop: "3%",
            }}
            >
            Questions Completed
            </Text>
        </View>
        <Text
            style={{
            color: `${statColor}`,
            fontSize: 36,
            fontStyle: "normal",
            fontWeight: "600",
            }}
        >
            {questionsCompleted}
        </Text>
        </>
        :
        <></>
        }

        {
        totalTimeSpent > 0 ? 
        <>
        <View
            style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: "3%",
            }}
        >
            <Text
            style={{
                color: "#2B3674",
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: "600",
                paddingTop: "3%",
            }}
            >
            Total Time Spent
            </Text>
        </View>
        <Text
            style={{
            color: `${statColor}`,
            fontSize: 36,
            fontStyle: "normal",
            fontWeight: "600",
            }}
        >
            {secondsToTime(totalTimeSpent)}
        </Text>
        </> :
        <></>
        }
        {

            averageTimePerQuestion > 0 ?
            <>
            <Text
            style={{
                color: "#2B3674",
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: "600",
                paddingTop: "3%",
            }}
            >
            Average time per question
            </Text>
        {/* </View> */}
        <Text
            style={{
            color: `${statColor}`,
            fontSize: 36,
            fontStyle: "normal",
            fontWeight: "600",
            paddingTop: "3%"
            }}
        >
            {secondsToTime(averageTimePerQuestion)} 
        </Text>
        </>
        :
        <></>
        }  
        </>
        :
        <>
        <View
            style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: "3%",
            }}
        >
            <View style={styles.whiteCircle}>
                <FontAwesome5Icon name={iconName} size={20} color={"#9CA5C2"}/>
            </View>
            <Text
            style={{
                color: "#2B3674",
                fontSize: 16,
                fontStyle: "normal",
                fontWeight: "600",
                paddingLeft: "3%",
            }}
            >
            {title}
            </Text>
        </View>
        <Text
            style={{
            color: `#2B3674`,
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: "400",
            }}
        >
            Please complete the {title} exercise to view the completion summary. 
        </Text>
        </>

        }
        </View>
  )};
