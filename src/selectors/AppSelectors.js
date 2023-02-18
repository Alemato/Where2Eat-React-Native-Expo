function sApp(state) {
  return state.app;
}

export const sAppIsLoggedIn = (state) => sApp(state).isLoggedIn;
export const sAppLoading = (state) => sApp(state).loading;

