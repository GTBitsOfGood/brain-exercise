import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import ConfettiCannon from "react-native-confetti-cannon";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    finishButton: {
        borderRadius: 5,
        marginTop: 20,
        height: 55,
        width: 320,
        backgroundColor: "#005AA3",
        flexDirection: "column"
    },
    goodWork: {
        fontWeight: "bold",
        fontSize: 42,
        textAlign: "center"
    },
    message: {
        fontSize: 23,
        textAlign: "center"
    }
})

function ExercisesCompleted({ navigation }) {
    return (
        <View>
            <ConfettiCannon
                count={200}
                origin={{x: -10, y: 0}}
                autoStart={true}
                fadeOut={true}
            />
            <Text style={styles.goodWork}>Good work!</Text>
            <Text style={styles.message}>You have completed all of today&apos;s exercises</Text>
            <Button
                title="Finish"
                buttonStyle={styles.finishButton}
                onPress={() => navigation.navigate("FinishedScreen")}
            />
        </View>
    )
}

ExercisesCompleted.propTypes = {
    navigation: PropTypes.object,
};

export default ExercisesCompleted;
