import { combineReducers } from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import authReducer from './reducers/authReducer';
import loadingReducer from './reducers/loadingReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['jwt', 'authenticated', '_id', 'name', 'phoneNumber', 'auth0AccessToken', 'birthdate']
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  loading: persistReducer(persistConfig, loadingReducer)
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;