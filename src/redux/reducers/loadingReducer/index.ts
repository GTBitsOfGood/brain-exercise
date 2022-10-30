import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from './types';

const initialState = {
  loadingStatus: false,
  loadStartTime: 0 // the epoch
} as LoadingState;

type setLoadingType = { loading: boolean }

const loadingReducer = createSlice({
  name: 'loadingState',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<setLoadingType>) {
      state.loadingStatus = action.payload.loading;
    },
    flipLoading(state) {
      state.loadingStatus = !state.loadingStatus;
    },
  }
});

// make sure to add your reducer to the root reducer and store
export default loadingReducer.reducer;

export const { setLoading, flipLoading } = loadingReducer.actions;