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
  CREATE_BOOKINGS,
  CREATE_BOOKINGS_REJECTED,
  GET_BOOKINGS,
  GET_BOOKINGS_REJECTED,
  GET_HOME,
  GET_HOME_REJECTED,
  GET_RISTORANTE,
  GET_RISTORANTE_REJECTED,
  LOGIN,
  LOGIN_REJECTED,
  MODIFICA_ACCOUNT,
  MODIFICA_ACCOUNT_REJECTED,
  PATCH_BOOKINGS,
  PATCH_BOOKINGS_REJECTED,
  REGISTRAZIONE,
  REGISTRAZIONE_REJECTED,
  RICERCA,
  RICERCA_REJECTED,
} from '../actions/action-types';
import DatiAccountReducer from '../reducers/DatiAccountReducer';
import RistorantiReducer from '../reducers/RistorantiReducer';
import bookingsReducer from '../reducers/BookingsReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [
    'app',
    'loginRegistrati',
    'createBooking',
    'datiAccount',
    'ristoranti',
    'bookings'],
};

const persistConfigAppReducer = {
  key: 'app',
  storage: AsyncStorage,
  blacklist: ['loading'],
};

const reducers = combineReducers({
//app: AppReducer,
  app: persistReducer(persistConfigAppReducer, AppReducer),
  loginRegistrati: LoginRegistrazioneReducer,
  createBooking: CreateBookingReducer,
  datiAccount: DatiAccountReducer,
  ristoranti: RistorantiReducer,
  bookings: bookingsReducer,
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
            REGISTRAZIONE_REJECTED,
            MODIFICA_ACCOUNT,
            MODIFICA_ACCOUNT_REJECTED,
            GET_HOME,
            GET_HOME_REJECTED,
            GET_RISTORANTE,
            GET_RISTORANTE_REJECTED,
            RICERCA,
            RICERCA_REJECTED,
            GET_BOOKINGS,
            GET_BOOKINGS_REJECTED,
            PATCH_BOOKINGS,
            PATCH_BOOKINGS_REJECTED,
            CREATE_BOOKINGS,
            CREATE_BOOKINGS_REJECTED,
          ],
        },
      }).concat(promise),
});

export const persistor = persistStore(store);
