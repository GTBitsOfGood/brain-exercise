import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import PropTypes from "prop-types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";

const styles = StyleSheet.create({
  subjectContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#E3EAFC",
    borderRadius: 12,
    marginTop: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    padding: 8,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    paddingTop: 15,
    paddingBottom: 15,
  },
  whiteCircle: {
    width: 39,
    height: 38,
    borderRadius: 19,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
  subjectText: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 36,
    textAlign: "left",
    color: "#2B3674",
  },
  startButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: "#E3EAFC",
    borderRadius: 12,
  },
  startButtonText: {
    color: "#008AFC",
    fontWeight: "bold",
  },
  completedContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  completedText: {
    fontSize: 16,
    fontWeight: "500",
  },
});

interface SubjectProps {
  iconName: string;
  iconBackgroundColor: string;
  subjectText: string;
  isCompleted: boolean;
}

const Subject: React.FC<SubjectProps> = ({
  iconName,
  iconBackgroundColor,
  subjectText,
  isCompleted,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View
      style={[styles.subjectContainer, isCompleted ? { opacity: 0.5 } : {}]}
    >
      {/* icon */}
      <View
        style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}
      >
        <View style={styles.whiteCircle}>
          <FontAwesome5 name={iconName} size={24} color={iconBackgroundColor} />
        </View>
      </View>

      {/* text & start button */}
      <View style={styles.textContainer}>
        <Text style={styles.subjectText}>{subjectText}</Text>
        {!isCompleted ? (
          <TouchableOpacity
            accessibilityRole="button"
            style={styles.startButton}
            onPress={() => {
              if (subjectText === "Math") {
                navigation.navigate("MathOverview");
              } else if (subjectText === "Reading") {
                navigation.navigate("ReadingOverview");
              } else if (subjectText === "Writing") {
                navigation.navigate("WritingOverview");
              } else if (subjectText === "Trivia") {
                navigation.navigate("TriviaOverview");
              }
            }}
          >
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.completedContainer}>
            <FontAwesome name="check-circle" size={24} color="#05CD99" />
            <Text style={styles.completedText}>Completed</Text>
          </View>
        )}
      </View>
    </View>
  );
};

Subject.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconBackgroundColor: PropTypes.string.isRequired,
  subjectText: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default Subject;
