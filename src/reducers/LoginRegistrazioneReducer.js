import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  loginForm: {
    email: '',
    password: '',
  },
  registratiForm: {
    nome: '',
    cognome: '',
    telefono: '',
    email: '',
    password: '',
  },
};

export const LoginRegistrazioneSlice = createSlice({
  name: 'loginRegistrazione',
  initialState: INITIAL_STATE,
  reducers: {
    resetLoginForm: (state) => {
      state.loginForm = INITIAL_STATE.loginForm;
    },
    loginFormChangeEmail: (state, action) => {
      state.loginForm.email = action.payload;
    },
    loginFormChangePassword: (state, action) => {
      state.loginForm.password = action.payload;
    },
    resetRegistratiForm: (state) => {
      state.registratiForm = INITIAL_STATE.registratiForm;
    },
    registratiChangeNome: (state, action) => {
      state.registratiForm.nome = action.payload;
    },
    registratiChangeCognome: (state, action) => {
      state.registratiForm.cognome = action.payload;
    },
    registratiChangeTelefono: (state, action) => {
      state.registratiForm.telefono = action.payload;
    },
    registratiChangeEmail: (state, action) => {
      state.registratiForm.email = action.payload;
    },
    registratiChangePassword: (state, action) => {
      state.registratiForm.password = action.payload;
    },
  },
});

export const {
  resetLoginForm,
  loginFormChangeEmail,
  loginFormChangePassword,
  resetRegistratiForm,
  registratiChangeNome,
  registratiChangeCognome,
  registratiChangeTelefono,
  registratiChangeEmail,
  registratiChangePassword,
} = LoginRegistrazioneSlice.actions;

export default LoginRegistrazioneSlice.reducer;
