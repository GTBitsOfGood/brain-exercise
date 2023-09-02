import { GameDescriptions } from "../../types";
import Gameplay from "../Game/Gameplay";
import ReadingMain from "../Game/ReadingMain";
import TriviaScreen from "../Game/TriviaScreen";

const mathSound = require('../../assets/math.mp3');
const mathImage = require("../../assets/Mathematics_Icon.png");
const readingSound = require('../../assets/reading.mp3');
const readingImage = require("../../assets/Reading_Icon.png");
const triviaSound = require('../../assets/writing.mp3');
const triviaImage = require("../../assets/Trivia_Icon.png");

const gameDescriptions: GameDescriptions = {
  "Math": {
    title: "Math",
    minutes: 5,
    intro: {
      name: "MathIntro",
      sound: mathSound,
      image: mathImage,
      description: "Solve math questions as fast as you can",
      buttonTitle: "Start Math",
      nextScreen: "MathMain",
    },
    game: {
      name: "MathMain",
      component: Gameplay,
    },
  },
  "Reading": {
    title: "Reading",
    minutes: 10,
    intro: {
      name: "ReadingIntro",
      sound: readingSound,
      image: readingImage,
      description: "Read the following passage aloud",
      buttonTitle: "Start Reading",
      nextScreen: "ReadingMain",
    },
    game: {
      name: "ReadingMain",
      component: ReadingMain,
    },
  },
  "Trivia": {
    title: "Writing (Trivia)",
    minutes: 5,
    intro: {
      name: "TriviaIntro",
      sound: triviaSound,
      image: triviaImage,
      description: "Grab some paper and a pencil.",
      subDescription: "Writing is a great way to exercise your brain, so please write each trivia question first before answering.",
      buttonTitle: "Start Writing",
      nextScreen: "TriviaMain",
    },
    game: {
      name: "TriviaMain",
      component: TriviaScreen,
    },
  },
};

export default gameDescriptions;