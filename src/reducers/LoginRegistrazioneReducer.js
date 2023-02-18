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
      console.log(state);
      state.loginForm = INITIAL_STATE.loginForm;
    },
    loginFormChangeEmail: (state, action) => {
      console.log(state);
      console.log(action);
      state.loginForm.email = action.payload;
    },
    loginFormChangePassword: (state, action) => {
      console.log(state);
      console.log(action);
      state.loginForm.password = action.payload;
    },
    resetRegistratiForm: (state) => {
      console.log(state);
      state.resetRegistratiForm = INITIAL_STATE.registratiForm;
    },
    registratiChangeNome: (state, action) => {
      state.resetRegistratiForm.nome = action.payload;
    },
    registratiChangeCognome: (state, action) => {
      state.resetRegistratiForm.cognome = action.payload;
    },
    registratiChangeTelefono: (state, action) => {
      state.resetRegistratiForm.telefono = action.payload;
    },
    registratiChangeEmail: (state, action) => {
      state.resetRegistratiForm.email = action.payload;
    },
    registratiChangePassword: (state, action) => {
      state.resetRegistratiForm.password = action.payload;
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
