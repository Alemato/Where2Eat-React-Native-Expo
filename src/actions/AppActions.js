import {
  sLoginRegistrazioneLoginFormEmail,
  sLoginRegistrazioneLoginFormPassword,
} from '../selectors';
import {LOGIN} from './action-types';
import Api, {TOKEN_JWT_NAME} from '../api/Api';
import {Alert} from 'react-native';
import {erroreInternoApp, erroreInternoServer} from './actionConstants';
import {
  resetLoginForm,
  resetRegistratiForm,
} from '../reducers/LoginRegistrazioneReducer';
import {loginSuccess} from '../reducers/AppReducer';

export function appSignIn() {
  return function(dispatch, getState) {
    const state = getState();
    const email = sLoginRegistrazioneLoginFormEmail(state);
    const password = sLoginRegistrazioneLoginFormPassword(state);
    dispatch({
      type: LOGIN, payload: Api.loggedIn({email, password}),
    }).then(
        function(disp) {
          const response = disp.action.payload;
          console.log('response: ', response);
          dispatch(loginSuccess(
              {user: response.data, token: response.headers[TOKEN_JWT_NAME]}));
          dispatch(resetLoginForm);
          dispatch(resetRegistratiForm);
        },
    ).catch(function(error) {
      console.log('error');
      if (error.response) {
        // La richiesta è stata effettuata e il server ha risposto con un codice di stato
        // che non rientra nell'intervallo di 2xx
        if (error.response.status === 401) {
          Alert.alert('Credenziali non valide',
              'Inserisci delle credenziali corrette!', [
                {
                  text: 'OK', onPress: () => {
                    dispatch(resetLoginForm());
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

/*Api.loggedIn({email, password}).then(
        function(response) {
          console.log("response");
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);
          console.log(response.headers);
          console.log(response.config);
        },
    ).catch(function(error) {
      console.log("error");
      if (error.response) {
        // La richiesta è stata effettuata e il server ha risposto con un codice di stato
        // che non rientra nell'intervallo di 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // La richiesta è stata effettuata ma non è stata ricevuta alcuna risposta
        // `error.request` è un'istanza di XMLHttpRequest nel browser e un'istanza di
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Si è verificato qualcosa durante l'impostazione della richiesta che ha attivato un errore
        console.log('Error', error.message);
      }
      console.log(error.config);
    });*/
