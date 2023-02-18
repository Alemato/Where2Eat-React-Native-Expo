function sApp(state) {
  return state.app;
}

export const sAppIsLoggedIn = (state) => sApp(state).isLoggedIn;
export const sAppLoading = (state) => sApp(state).loading;
export const sAppLoginForm = (state) => sApp(state).loginForm;
export const sAppLoginFormEmail = (state) => sApp(state).loginForm.email;
export const sAppLoginFormPassword = (state) => sApp(state).loginForm.password;
