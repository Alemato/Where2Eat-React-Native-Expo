import {createSlice, isAnyOf} from '@reduxjs/toolkit';
import {
  GET_HOME_FULFILLED_ACTION,
  GET_HOME_PENDING_ACTION,
  GET_HOME_REJECTED_ACTION,
  GET_RISTORANTE_FULFILLED_ACTION,
  GET_RISTORANTE_PENDING_ACTION,
  GET_RISTORANTE_REJECTED_ACTION,
  LOGIN_FULFILLED_ACTION,
  LOGIN_PENDING_ACTION,
  LOGIN_REJECTED_ACTION,
  MODIFICA_ACCOUNT_FULFILLED_ACTION,
  MODIFICA_ACCOUNT_PENDING_ACTION,
  MODIFICA_ACCOUNT_REJECTED_ACTION,
  REGISTRAZIONE_FULFILLED_ACTION,
  REGISTRAZIONE_PENDING_ACTION,
  REGISTRAZIONE_REJECTED_ACTION,
  RICERCA_FULFILLED_ACTION,
  RICERCA_PENDING_ACTION,
  RICERCA_REJECTED_ACTION,
} from '../actions/action-types';

const INITIAL_STATE = {
  isLoggedIn: false,
  loading: false,
  user: {
    id: 0,
    nome: '',
    cognome: '',
    statoAccount: false,
    ruolo: '',
    email: '',
    telefono: '',
  },
  token: '',
};

export const AppSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user.id = action.payload.user.id;
      state.user.nome = action.payload.user.nome;
      state.user.cognome = action.payload.user.cognome;
      state.user.statoAccount = action.payload.user.statoAccount;
      state.user.ruolo = action.payload.user.ruolo;
      state.user.email = action.payload.user.email;
      state.user.telefono = action.payload.user.telefono;
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      Object.assign(state, INITIAL_STATE);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
        isAnyOf(LOGIN_PENDING_ACTION, REGISTRAZIONE_PENDING_ACTION,
            MODIFICA_ACCOUNT_PENDING_ACTION, GET_HOME_PENDING_ACTION,
            GET_RISTORANTE_PENDING_ACTION, RICERCA_PENDING_ACTION),
        (state, action) => {
          state.loading = true;
        }).
        addMatcher(isAnyOf(LOGIN_FULFILLED_ACTION, LOGIN_REJECTED_ACTION,
                REGISTRAZIONE_FULFILLED_ACTION, REGISTRAZIONE_REJECTED_ACTION,
                MODIFICA_ACCOUNT_FULFILLED_ACTION,
                MODIFICA_ACCOUNT_REJECTED_ACTION, GET_HOME_FULFILLED_ACTION,
                GET_HOME_REJECTED_ACTION, GET_RISTORANTE_FULFILLED_ACTION,
                GET_RISTORANTE_REJECTED_ACTION, RICERCA_FULFILLED_ACTION,
                RICERCA_REJECTED_ACTION),
            (state, action) => {
              state.loading = false;
            });
  },
});

export const {
  loginSuccess,
  logout,
} = AppSlice.actions;

export default AppSlice.reducer;
