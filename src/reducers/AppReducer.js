import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isLoggedIn: false,
  loading: false,
  user: null,
  token: '',
};

export const AppSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    loginSuccess: (state, action) => {
      console.log(state);
      console.log(action);
      state.isLoggedIn = true;
    },
  },
});

export const {
  loginSuccess,
} = AppSlice.actions;

export default AppSlice.reducer;
