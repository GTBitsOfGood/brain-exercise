/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PauseState } from "./types";

export const initialState: PauseState = {
  paused: false,
};

const pauseReducer = createSlice({
  name: "loadingState",
  initialState,
  reducers: {
    setPaused(state, action: PayloadAction<PauseState>) {
      state.paused = action.payload.paused;
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
export default pauseReducer.reducer;

export const { setPaused, pause, unpause } = pauseReducer.actions;
