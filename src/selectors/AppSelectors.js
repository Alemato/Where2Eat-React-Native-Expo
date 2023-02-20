function sApp(state) {
  return state.app;
}

export const sAppIsLoggedIn = (state) => sApp(state).isLoggedIn;
export const sAppLoading = (state) => sApp(state).loading;
export const sAppUser = (state) => sApp(state).user;
export const sAppUserID = (state) => sApp(state).user.id;
export const sAppUserNome = (state) => sApp(state).user.nome;
export const sAppUserCognome = (state) => sApp(state).user.cognome;
export const sAppUserStatoAccount = (state) => sApp(state).user.statoAccount;
export const sAppUserRuolo = (state) => sApp(state).user.ruolo;
export const sAppUserEmail = (state) => sApp(state).user.email;
export const sAppUserTelefono = (state) => sApp(state).user.telefono;
export const sAppToken = (state) => sApp(state).token;

