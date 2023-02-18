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

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loginRegistrati'],
};

const reducers = combineReducers({
  app: AppReducer,
  loginRegistrati: LoginRegistrazioneReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(promise),
});

export const persistor = persistStore(store);
