import {createSlice} from '@reduxjs/toolkit';
import {logout} from './AppReducer';

const INITIAL_STATE = {
  ristoranti: [],
  formRicerca: {
    dove: '',
    cosa: '',
  },
  queryEffettuata: false,
  risultatiRicerca: [],
};

export const RistorantiSlice = createSlice({
  name: 'ristoranti',
  initialState: INITIAL_STATE,
  reducers: {
    addRistoranti: (state, action) => {
      if (Array.isArray(action.payload.ristoranti)) {
        state.ristoranti.push(...action.payload.ristoranti);
      } else {
        state.ristoranti.push(action.payload.ristoranti);
      }
    },
    resetRistoranti: (state, action) => {
      state.ristoranti = [];
    },
    formRicercaChangeDove: (state, action) => {
      state.formRicerca.dove = action.payload;
    },
    formRicercaChangeCosa: (state, action) => {
      state.formRicerca.cosa = action.payload;
    },
    setEffettuazioneRicerca: (state, action) => {
      state.queryEffettuata = action.payload;
    },
    addRisultatiRicerca: (state, action) => {
      if (Array.isArray(action.payload.ristoranti)) {
        state.risultatiRicerca.push(...action.payload.ristoranti);
      } else {
        state.risultatiRicerca.push(action.payload.ristoranti);
      }
    },
    resetFormRicerca: (state, action) => {
      state.risultatiRicerca = [];
      state.queryEffettuata = false;
      Object.assign(state.formRicerca, state.formRicerca);
    },
    resetRisultatiRicerca: (state, action) => {
      state.queryEffettuata = false;
      state.risultatiRicerca = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state, action) => {
      Object.assign(state, INITIAL_STATE);
    });
  },
});

export const {
  addRistoranti,
  resetRistoranti,
  formRicercaChangeDove,
  formRicercaChangeCosa,
  setEffettuazioneRicerca,
  addRisultatiRicerca,
  resetFormRicerca,
  resetRisultatiRicerca,
} = RistorantiSlice.actions;
export default RistorantiSlice.reducer;
