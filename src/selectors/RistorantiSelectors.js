function sStoreRistoranti(state) {
  return state.ristoranti;
}

export const sRistoranti = (state) => sStoreRistoranti(state).ristoranti;
export const sRistoranteSingolo = id => {
  return state => sRistoranti(state).find(ristorante => ristorante.id === id);
};
