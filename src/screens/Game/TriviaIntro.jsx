import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";
import { useFocusEffect } from "@react-navigation/native";
import { sampleArticle, otherInterestingText } from "../../assets/stories";
import Text from "../../components/Text";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        margin: 25,
        marginVertical: 60,
    },
    instructions: {
        fontSize: 22,
        textAlign: "center",
        marginVertical: 20,
    },
    headInstruction: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    nextButton: {
        marginTop: 20,
        width: 320,
        height: 55,
        borderRadius: 5,
        backgroundColor: "#005AA3",
    },
});

const image = require("../../assets/books.png");

// Each article has a readAlready field to check if it should be presented again
// The text is a text array where the text is split up by \n characters
export const defaultStories = {
    article1: {
        text: otherInterestingText,
        readAlready: false,
    },
    article2: {
        text: sampleArticle,
        readAlready: false,
    }
};


function TriviaIntro({ navigation }) {
    const [stories, setStories] = useState(defaultStories)
    // Update stories when page is loaded

    return (
        <View style={styles.root}>
            <Image 
             source={image}
             style={styles.Image}
            />
            <View style={styles.instructions}>
                <Text style={styles.headInstruction}>Read the following passage aloud</Text>
                <Text style={styles.instructions}>Total time: 10 minutes</Text>
            </View>
            <Button
            title="Start Reading"
            buttonStyle={styles.nextButton}
            onPress={() => navigation.navigate("ReadingMain", stories)}
            />
        </View>
    )
}

ReadingIntro.propTypes = {
    navigation: PropTypes.object,
}

export default ReadingIntro;