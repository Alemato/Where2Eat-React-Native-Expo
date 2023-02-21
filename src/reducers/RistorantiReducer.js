import {createSlice} from '@reduxjs/toolkit';
import {logout} from './AppReducer';

const INITIAL_STATE = {
  ristoranti: [],
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
      Object.assign(state, INITIAL_STATE);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state, action) => {
      Object.assign(state, INITIAL_STATE);
    });
  },
});

export const {addRistoranti, resetRistoranti} = RistorantiSlice.actions;
export default RistorantiSlice.reducer;
