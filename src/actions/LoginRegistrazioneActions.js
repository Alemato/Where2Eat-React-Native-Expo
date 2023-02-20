import {
  sLoginRegistrazioneRegistratiFormCognome,
  sLoginRegistrazioneRegistratiFormEmail,
  sLoginRegistrazioneRegistratiFormNome,
  sLoginRegistrazioneRegistratiFormPassword,
  sLoginRegistrazioneRegistratiFormTelefono,
} from '../selectors';
import {REGISTRAZIONE} from './action-types';
import Api from '../api/Api';
import {Alert} from 'react-native';
import {resetRegistratiForm} from '../reducers/LoginRegistrazioneReducer';
import {erroreInternoApp, erroreInternoServer} from './actionConstants';
import * as navigation from '../navigation/ServiceNavigator';

export function registrazioneServer() {
  return function(dispatch, getState) {
    const state = getState();
    const nome = sLoginRegistrazioneRegistratiFormNome(state);
    const cognome = sLoginRegistrazioneRegistratiFormCognome(state);
    const telefono = sLoginRegistrazioneRegistratiFormTelefono(state);
    const email = sLoginRegistrazioneRegistratiFormEmail(state);
    const password = sLoginRegistrazioneRegistratiFormPassword(state);
    dispatch({
      type: REGISTRAZIONE,
      payload: Api.registrazione({nome, cognome, telefono, email, password}),
    }).then(
        function(disp) {
          const response = disp.action.payload;
          console.log('response: ', response);
          Alert.alert('Registrazione Avvenuta',
              'La registrazione è avvenuta con successo! Torna alla login!', [
                {
                  text: 'OK', onPress: () => {
                    dispatch(resetRegistratiForm);
                    navigation.navigate('Login');
                  },
                },
              ]);
        },
    ).catch(function(error) {
      console.log('error');
      if (error.response) {
        // La richiesta è stata effettuata e il server ha risposto con un codice di stato
        // che non rientra nell'intervallo di 2xx
        console.log(error.response);
        erroreInternoServer();
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
