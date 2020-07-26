import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
import PropTypes from "prop-types";
import { useFocusEffect } from "@react-navigation/native";
import { sampleArticle, otherInterestingText } from "../../assets/stories";

const styles = StyleSheet.create({
    root: {
        justifyContent: "space-between",
        flex: 1,
        margin: 25,
        marginVertical: 60,
        alignItems: "center"
    },
    instructions: {
        fontSize: 22,
        marginVertical: 20,
        textAlign: "center",
    },
    headInstruction: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
    },
    nextButton: {
        borderRadius: 5,
        marginTop: 20,
        height: 55,
        width: 320,
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

const pullStories = async () => {
    const jsonStories = await AsyncStorage.getItem("STORIES")
    if (jsonStories !== null) {
        const parsedStories = await JSON.parse(jsonStories)
        return parsedStories
    }
    return defaultStories
}

function ReadingIntro({ navigation }) {
    const [stories, setStories] = useState(defaultStories)
    // Update stories when page is loaded
    useFocusEffect(
        React.useCallback(() => {
            pullStories()
            .then((item) => setStories(item))
        })
    )

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