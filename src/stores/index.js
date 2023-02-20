import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import promise from 'redux-promise-middleware';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import AppReducer from '../reducers/AppReducer';
import LoginRegistrazioneReducer from '../reducers/LoginRegistrazioneReducer';
import CreateBookingReducer from '../reducers/CreateBookingReducer';
import {
  LOGIN,
  LOGIN_REJECTED,
  REGISTRAZIONE,
  REGISTRAZIONE_REJECTED,
} from '../actions/action-types';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['app', 'loginRegistrati', 'createBooking'],
};

const persistConfigAppReducer = {
  key: 'app',
  storage: AsyncStorage,
  blacklist: ['loading'],
};

const reducers = combineReducers({
  app: persistReducer(persistConfigAppReducer, AppReducer),
  createBooking: CreateBookingReducer,
  //app: AppReducer,
  loginRegistrati: LoginRegistrazioneReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
            LOGIN,
            LOGIN_REJECTED,
            REGISTRAZIONE,
            REGISTRAZIONE_REJECTED],
        },
      }).concat(promise),
});

export const persistor = persistStore(store);
