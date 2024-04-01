import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
const Subject = ({ iconName, iconBackgroundColor, subjectText }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <View style={styles.subjectContainer}>
      {/* icon */}
      <View
        style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}
      >
        <View style={styles.whiteCircle}>
          <FeatherIcon name={iconName} size={24} color='black' />
          {/* Adjusted for visibility */}
        </View>
      </View>
      {/* text & start button */}
      <View style={styles.textContainer}>
        <Text style={styles.subjectText}>{subjectText}</Text>
        {!isCompleted ? (
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => setIsCompleted(true)}
          >
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.completedContainer}>
            <FeatherIcon name='check-circle' size={24} color='#05CD99' />
            <Text style={styles.completedText}>Completed</Text>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  subjectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#E3EAFC',
    borderRadius: 12,
    marginTop: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
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
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },
  subjectText: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
    textAlign: 'left',
    color: '#2B3674',
  },
  startButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: '#E3EAFC',
    borderRadius: 12,
  },
  startButtonText: {
    color: '#008AFC',
    fontWeight: 'bold',
  },
  completedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  completedText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
export default Subject;