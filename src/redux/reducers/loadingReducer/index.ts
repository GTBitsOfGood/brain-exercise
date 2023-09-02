/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState, LoadingType } from "./types";

const initialState: LoadingState = {
  loadingStatus: false,
  loadStartTime: 0, // the epoch
};

const loadingReducer = createSlice({
  name: "loadingState",
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<LoadingType>) {
      state.loadingStatus = action.payload.loading;
    },
    flipLoading(state) {
      state.loadingStatus = !state.loadingStatus;
    },
  },
});

// make sure to add your reducer to the root reducer and store
export default loadingReducer.reducer;

export const { setLoading, flipLoading } = loadingReducer.actions;
