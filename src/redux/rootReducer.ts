import { combineReducers } from "@reduxjs/toolkit";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

import authReducer from "./reducers/authReducer";
import loadingReducer from "./reducers/loadingReducer";
import pauseReducer from "./reducers/pauseReducer";
import gameDetailsReducer from "./reducers/gameDetailsReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["auth.getIdToken"],
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    loading: loadingReducer,
    paused: pauseReducer,
    game: gameDetailsReducer,
  }),
);

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
