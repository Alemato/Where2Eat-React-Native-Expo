import {
  sAppToken,
  sAppUserRuolo,
  sAppUserStatoAccount,
  sDatiAccountCognome,
  sDatiAccountEmail,
  sDatiAccountNome,
  sDatiAccountTelefono,
} from '../selectors';
import {MODIFICA_ACCOUNT} from './action-types';
import Api from '../api/Api';
import {logout} from '../reducers/AppReducer';
import {Alert} from 'react-native';
import {erroreInternoApp, erroreInternoServer} from './actionConstants';

export function modificaAccount() {
  return function(dispatch, getState) {
    const state = getState();
    const token = sAppToken(state);
    const statoAccount = sAppUserStatoAccount(state);
    const ruolo = sAppUserRuolo(state);
    const nome = sDatiAccountNome(state);
    const cognome = sDatiAccountCognome(state);
    const telefono = sDatiAccountTelefono(state);
    const email = sDatiAccountEmail(state);
    dispatch({
      type: MODIFICA_ACCOUNT,
      payload: Api.modificaAccount(
          {nome, cognome, telefono, email, statoAccount, ruolo, token}),
    }).then(
        function(disp) {
          const response = disp.action.payload;
          console.log('response: ', response);
          Alert.alert('Operazione Riuscita',
              'Rieffettua la login!', [
                {
                  text: 'OK', onPress: () => {
                    dispatch(logout());
                  },
                },
              ]);
        },
    ).catch(function(error) {
      console.log('error');
      if (error.response) {
        // La richiesta è stata effettuata e il server ha risposto con un codice di stato
        // che non rientra nell'intervallo di 2xx
        if (error.response.status === 403) {
          Alert.alert('Operazione non consentita',
              'Non hai le autorizzazioni necessarie! Rieffettua la login!', [
                {
                  text: 'OK', onPress: () => {
                    dispatch(logout());
                  },
                },
              ]);
        } else {
          erroreInternoServer();
        }
      } else if (error.request) {
        // La richiesta è stata effettuata ma non è stata ricevuta alcuna risposta
        // `error.request` è un'istanza di XMLHttpRequest nel browser e un'istanza di
        // http.ClientRequest in node.js
        console.log(error.request);
        erroreInternoApp();
      } else {
        // Si è verificato qualcosa durante l'impostazione della richiesta che ha attivato un errore
        console.log('Error', error.message);
        erroreInternoApp();
      }
    });

  };
}
