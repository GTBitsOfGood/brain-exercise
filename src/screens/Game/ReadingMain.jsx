import propTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage"
import ProgressBar from "../../components/ProgressBar";

const styles = StyleSheet.create({
    root: {
        justifyContent: "space-between",
        flex: 1,
        margin: 25,
        alignItems: "center",
        marginHorizontal: 15,
    },
    instructions: {
        marginTop: 20,
        flex: 0.4,
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },
    article: {
        flex: 1.8,
        fontSize: 20,
        textAlign: "center",
    },
    nextButton: {
        borderRadius: 10,
        marginTop: 20,
        height: 55,
        width: 320,
        backgroundColor: "#005AA3",
    },
});

export default function ReadingMain({ navigation, route }) {
    const [stories, setStories] = useState(route.params);
    const [timeUp, setTimeUp] = useState(false);

    /**
     * Takes in a stories object and updates the status of each story in async.
     * @param {Object} storiesObj 
     */
    const updateStories = async (storiesObj) => {
        setStories(storiesObj);
        const storiesJsonString = JSON.stringify(storiesObj)
        await AsyncStorage.setItem("STORIES", storiesJsonString)
    }

    /**
     * Once all stories have been read, the readAlready status of the
     * stories are set to false to allow recycling of stories.
     */
    function resetStoryReadStatus() {
        const myStories = stories;
        const storyKeys = Object.keys(stories);
        for (let i = 0; i < storyKeys.length; i += 1) {
            const key = storyKeys[i];
            myStories[key].readAlready = false;
        }
        updateStories(myStories);
    } 

    const [currentArticle, setCurrentArticle] = useState();

    /**
     * Goes through the stories object and selects a story that hasn't been read yet
     * Returns an array of paragraphs
     */
    const loadStoryText = () => {
        const storyData = Object.values(stories)
        const storyNames = Object.keys(stories)
        const numStories = storyData.length
        // Find a story that hasn't been read yet
        for (let index = 0; index < numStories; index += 1) {
            const story = storyData[index];
            if (!story.readAlready) {
                setCurrentArticle(storyNames[index]);
                return story.text
            }
        }
        // If all stories have been read, recycle stories
        // and return the first one
        resetStoryReadStatus();
        setCurrentArticle(storyNames[0]);
        return storyData[0].text
    }

    const [paragraph, setParagraph] = useState("");
    const [paragraphs, setParagraphs] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const initialStory = loadStoryText();
        setParagraphs(initialStory);
        setParagraph(initialStory[0]);
    }, [])

    /**
     * If the 10 minutes alloted for reading are up, this will take the user to next section.
     * If not, this button will pull up the next paragraph of the current article or move on
     * to the next one once the user is finished.
     */
    const buttonFunction = () => {
        if (timeUp) {
            navigation.navigate("GameOverview")
        } else if (page === paragraphs.length - 1) {
            const myNewStories = stories;
            myNewStories[currentArticle].readAlready = true;
            updateStories(myNewStories);
            const initialStory = loadStoryText();
            setParagraphs(initialStory);
            setParagraph(initialStory[0]);
            setPage(0);
        } else {
            setParagraph(paragraphs[page + 1]);
            setPage(page + 1);
        }
    }

    return (
        <View style={styles.root}>
            <ProgressBar
             seconds={600}
             red={30}
             func={() => setTimeUp(true)}
             />
            <Text style={styles.instructions}>Read the passage aloud.</Text>
            <Text style={styles.article}>{paragraph}</Text>
            <Button
             title="Next"
             buttonStyle={styles.nextButton}
             onPress={() => buttonFunction()}
             />
        </View>
    )
}

ReadingMain.propTypes = {
    navigation: propTypes.object,
    route: propTypes.any,
}
