import { GameDescriptions } from "../../types";

const mathSound = require('../../assets/math.mp3');
const mathImage = require("../../assets/Mathematics_Icon.png");
const readingSound = require('../../assets/reading.mp3');
const readingImage = require("../../assets/Reading_Icon.png");
const writingSound = require('../../assets/writing.mp3');
const writingImage = require("../../assets/Prompts_Icon.png");
const triviaSound = require('../../assets/writing.mp3');
const triviaImage = require("../../assets/Trivia_Icon.png");

const gameDescriptions: GameDescriptions = {
  "Math": {
    title: "Math",
    minutes: 1,
    intro: {
      name: "MathIntro",
      sound: mathSound,
      image: mathImage,
      description: "Solve math questions as fast as you can",
      buttonTitle: "Start Math",
      nextScreenArgs: ["MathMain"],
    },
    game: {
      name: "MathMain",
      nextScreenArgs: ["ReadingIntro"],
    },
  },
  "Reading": {
    title: "Reading",
    minutes: 1,
    intro: {
      name: "ReadingIntro",
      sound: readingSound,
      image: readingImage,
      description: "Read the following passage aloud",
      buttonTitle: "Start Reading",
      nextScreenArgs: ["ReadingMain"],
    },
    game: {
      name: "ReadingMain",
      nextScreenArgs: ["TriviaIntro"], // Intentionally skipping Writing section
    },
  },
  "Writing": {
    title: "Writing",
    minutes: 1,
    intro: {
      name: "WritingIntro",
      sound: writingSound,
      image: writingImage,
      description: "Grab some paper and a pencil and write what you see.",
      buttonTitle: "Start Writing",
      nextScreenArgs: ["WritingMain"],
    },
    game: {
      name: "WritingMain",
      nextScreenArgs: ["TriviaIntro"],
    },
  },
  "Trivia": {
    title: "Writing (Trivia)",
    minutes: 1,
    intro: {
      name: "TriviaIntro",
      sound: triviaSound,
      image: triviaImage,
      description: "Grab some paper and a pencil.",
      subDescription: "Writing is a great way to exercise your brain, so please write each trivia question first before answering.",
      buttonTitle: "Start Writing",
      nextScreenArgs: ["TriviaMain"],
    },
    game: {
      name: "TriviaMain",
      nextScreenArgs: ["ExercisesCompleted"],
    },
  },
};

export default gameDescriptions;