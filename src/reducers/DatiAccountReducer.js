import {createSlice} from '@reduxjs/toolkit';
import {logout} from './AppReducer';

const INITIAL_STATE = {
  nome: '',
  cognome: '',
  telefono: '',
  email: '',
};

export const DatiAccountSlice = createSlice({
  name: 'datiAccount',
  initialState: INITIAL_STATE,
  reducers: {
    resetForm: (state) => {
      Object.assign(state, INITIAL_STATE);
    },
    changeNome: (state, action) => {
      state.nome = action.payload;
    },
    changeCognome: (state, action) => {
      state.cognome = action.payload;
    },
    changeTelefono: (state, action) => {
      state.telefono = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state, action) => {
      Object.assign(state, INITIAL_STATE);
    });
  },
});

export const {
  resetForm,
  changeNome,
  changeCognome,
  changeTelefono,
  changeEmail,
} = DatiAccountSlice.actions;

export default DatiAccountSlice.reducer;

