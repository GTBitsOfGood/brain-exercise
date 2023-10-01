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
      state.completed.math = false;
      state.completed.reading = false;
      state.completed.trivia = false;
    },
    updateGame(state, action: { payload: GameDetails; type: string }) {
      state.streak = [];
      for (let i = 0; i < action.payload.streak.length; i += 1) {
        state.streak.push(action.payload.streak[i]);
      }
      state.completed.math = action.payload.completed.math;
      state.completed.reading = action.payload.completed.reading;
      state.completed.trivia = action.payload.completed.trivia;
    },
  },
});

// make sure to add your reducer to the root reducer and store
export default gameDetailsReducer.reducer;

export const { resetCompleted, updateGame } = gameDetailsReducer.actions;
