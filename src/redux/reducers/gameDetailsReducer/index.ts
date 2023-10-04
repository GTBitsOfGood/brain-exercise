/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { GameDetails } from "./types";

export const initialState: GameDetails = {
  streak: [],
  math: {
    difficultyScore: 0,
  },
  completed: {
    math: false,
    reading: false,
    trivia: false,
  },
};

const gameDetailsReducer = createSlice({
  name: "GameDetailsState",
  initialState,
  reducers: {
    resetCompleted(state) {
      state.completed = {
        math: false,
        reading: false,
        trivia: false,
      };
    },
    updateGame(state, action: { payload: GameDetails; type: string }) {
      action.payload = {
        ...initialState,
        ...action.payload,
      };
      state.streak = [];
      for (let i = 0; i < action.payload.streak.length; i += 1) {
        state.streak.push(action.payload.streak[i]);
      }
      state.completed = {
        math: action.payload.completed.math,
        reading: action.payload.completed.reading,
        trivia: action.payload.completed.trivia,
      };
    },
    completedMath(state) {
      state.completed.math = true;
    },
    completedReading(state) {
      state.completed.reading = true;
    },
    completedTrivia(state) {
      state.completed.trivia = true;
    },
    setDifficultyScore(state, action: { payload: number; type: string }) {
      state.math.difficultyScore = action.payload;
    },
  },
});

// make sure to add your reducer to the root reducer and store
export default gameDetailsReducer.reducer;

export const {
  resetCompleted,
  updateGame,
  completedMath,
  completedReading,
  completedTrivia,
  setDifficultyScore,
} = gameDetailsReducer.actions;
