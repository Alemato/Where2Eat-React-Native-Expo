function sLoginRegistrazione(state) {
  return state.loginRegistrati;
}

export const sLoginRegistrazioneLoginForm = (state) => sLoginRegistrazione(state).loginForm;
export const sLoginRegistrazioneLoginFormEmail = (state) => sLoginRegistrazione(state).loginForm.email;
export const sLoginRegistrazioneLoginFormPassword = (state) => sLoginRegistrazione(state).loginForm.password;
export const sLoginRegistrazioneRegistratiForm = (state) => sLoginRegistrazione(state).registratiForm;
export const sLoginRegistrazioneRegistratiFormNome = (state) => sLoginRegistrazione(state).registratiForm.nome;
export const sLoginRegistrazioneRegistratiFormCognome = (state) => sLoginRegistrazione(state).registratiForm.cognome;
export const sLoginRegistrazioneRegistratiFormTelefono = (state) => sLoginRegistrazione(state).registratiForm.telefono;
export const sLoginRegistrazioneRegistratiFormEmail = (state) => sLoginRegistrazione(state).registratiForm.email;
export const sLoginRegistrazioneRegistratiFormPassword = (state) => sLoginRegistrazione(state).registratiForm.password;

