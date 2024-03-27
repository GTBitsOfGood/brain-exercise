/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { GameDetails } from "../../../types";

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
      state = {
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
} = gameDetailsReducer.actions;
