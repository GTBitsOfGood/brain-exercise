/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { GameDetails, LastSessionMetrics } from "../../../types";

export const initialState: GameDetails = {
  active: false,
  streak: [],
  lastSessionsMetrics: Array<GameDetails["lastSessionsMetrics"][0]>(2).fill({
    date: new Date(),
    math: {
      attempted: false,
      questionsAttempted: 0,
      questionsCorrect: 0,
      finalDifficultyScore: 0,
      timePerQuestion: 0,
    },
    trivia: {
      attempted: false,
      questionsAttempted: 0,
      questionsCorrect: 0,
      timePerQuestion: 0,
      // subjects: [
      //   { subject: "Animals", count: 1, color: "#265599" },
      //   { subject: "Art and Culture", count: 2, color: "#EA4335" },
      //   { subject: "Food", count: 0, color: "#9747FF" },
      //   { subject: "Geography", count: 0, color: "#FE7D35" },
      //   { subject: "History", count: 4, color: "#58C23D" },
      //   { subject: "Holidays", count: 0, color: "#FFB6C1" },
      //   { subject: "Language", count: 0, color: "#4682B4" },
      //   { subject: "Literature", count: 0, color: "#8B4513" },
      //   { subject: "Math and Science", count: 0, color: "#32CD32" },
      //   { subject: "Miscellaneous", count: 0, color: "#D3D3D3" },
      //   { subject: "Movies and TV", count: 2, color: "#EDCF35" },
      //   { subject: "Music", count: 0, color: "#FF69B4" },
      //   { subject: "Politics", count: 0, color: "#FFD700" },
      //   { subject: "Sports", count: 0, color: "#00CED1" },
      //   { subject: "Other", count: 0, color: "#A9A9A9" },
      // ],
    },
    reading: {
      attempted: false, // should be true if the user attempts the section but skips without completing
      passagesRead: 0,
      timePerPassage: 0,
      wordsPerMinute: 0,
      skipped: false,
    },
    writing: {
      attempted: false, // should be true if the user attempts the section but skips without completing
      questionsAnswered: 0,
      timePerQuestion: 0,
      skipped: false,
    },
  }),
};

const gameDetailsReducer = createSlice({
  name: "GameDetailsState",
  initialState,
  reducers: {
    resetAttempted(state) {
      state.lastSessionsMetrics[0].math.attempted = false;
      state.lastSessionsMetrics[0].reading.attempted = false;
      state.lastSessionsMetrics[0].writing.attempted = false;
      state.lastSessionsMetrics[0].trivia.attempted = false;
    },
    updateFullState(state, action: { payload: GameDetails; type: string }) {
      return {
        ...initialState,
        ...action.payload,
      };
    },
    completedMath(state) {
      state.lastSessionsMetrics[0].math.attempted = true;
    },
    completedReading(state) {
      state.lastSessionsMetrics[0].reading.attempted = true;
    },
    completedWriting(state) {
      state.lastSessionsMetrics[0].writing.attempted = true;
    },
    completedTrivia(state) {
      state.lastSessionsMetrics[0].trivia.attempted = true;
    },
    setDifficultyScore(state, action: { payload: number; type: string }) {
      state.lastSessionsMetrics[0].math.finalDifficultyScore = action.payload;
    },
    updateLastSessionsMetricsState(
      state,
      action: { payload: Partial<LastSessionMetrics> },
    ) {
      return {
        ...state,
        lastSessionsMetrics: state.lastSessionsMetrics.map((item, i) =>
          i === 0
            ? {
                ...item,
                // Ensure deep merge of nested properties
                math: { ...item.math, ...action.payload.math },
                trivia: { ...item.trivia, ...action.payload.trivia },
                reading: { ...item.reading, ...action.payload.reading },
                writing: { ...item.writing, ...action.payload.writing },
                ...action.payload, // Shallow merge the rest of the properties
              }
            : item,
        ),
      };
    },
  },
});

// make sure to add your reducer to the root reducer and store
export default gameDetailsReducer.reducer;

export const {
  resetAttempted,
  updateFullState,
  completedMath,
  completedReading,
  completedTrivia,
  completedWriting,
  setDifficultyScore,
  updateLastSessionsMetricsState,
} = gameDetailsReducer.actions;
