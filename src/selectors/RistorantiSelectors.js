function sStoreRistoranti(state) {
  return state.ristoranti;
}

export const sRistoranti = (state) => sStoreRistoranti(state).ristoranti;
export const sRistoranteSingolo = id => {
  return state => sRistoranti(state).find(ristorante => ristorante.id === id);
};
export const sFormRicerca = (state) => sStoreRistoranti(
    state).formRicerca;
export const sFormRicercaDove = (state) => sStoreRistoranti(
    state).formRicerca.dove;
export const sFormRicercaCosa = (state) => sStoreRistoranti(
    state).formRicerca.cosa;
export const sRisultatiRicerca = (state) => sStoreRistoranti(
    state).risultatiRicerca;
export const sQueryEffettuata = (state) => sStoreRistoranti(
    state).queryEffettuata;
