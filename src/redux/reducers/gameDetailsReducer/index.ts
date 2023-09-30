/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameDetails } from "./types";

export const initialState: GameDetails = {
  streak: 0,
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
    resetCompleted(state, action: PayloadAction<GameDetails>) {
      state.completed = false;
      state.completed = false;
      state.completed= false;
    },
    pause(state) {
      state.paused = true;
    },
    unpause(state) {
      state.paused = false;
    },
  },
});

// make sure to add your reducer to the root reducer and store
export default gameDetailsReducer.reducer;

export const { setPaused, pause, unpause } = pauseReducer.actions;
