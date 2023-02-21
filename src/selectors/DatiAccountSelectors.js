function sDatiAccount(state) {
  return state.datiAccount;
}

export const sDatiAccountNome = (state) => sDatiAccount(state).nome;
export const sDatiAccountCognome = (state) => sDatiAccount(state).cognome;
export const sDatiAccountTelefono = (state) => sDatiAccount(state).telefono;
export const sDatiAccountEmail = (state) => sDatiAccount(state).email;
