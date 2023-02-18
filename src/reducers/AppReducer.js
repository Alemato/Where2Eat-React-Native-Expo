import {createSlice} from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isLoggedIn: false,
  loading: false,
  loginForm: {
    email: '',
    password: '',
  },
};

export const AppSlice = createSlice({
  name: 'app',
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
    loginFailure: (state, action) => {
      console.log(state);
      console.log(action);
    },
    loginSuccess: (state, action) => {
      console.log(state);
      console.log(action);
      state.isLoggedIn = true;
    },
  },
});

export const {
  resetLoginForm,
  loginFormChangeEmail,
  loginFormChangePassword,
  loginFailure,
  loginSuccess,
} = AppSlice.actions;

export default AppSlice.reducer;
/*export default function AppReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
  }
  return state;
}*/
