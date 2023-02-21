import {sAppToken} from '../selectors';
import Api from '../api/Api';
import {Alert} from 'react-native';
import {logout} from '../reducers/AppReducer';
import {erroreInternoApp, erroreInternoServer} from './actionConstants';
import {GET_HOME, GET_RISTORANTE} from './action-types';
import {addRistoranti} from '../reducers/RistorantiReducer';

export function getServerRistoranti() {
  return function(dispatch, getState) {
    const state = getState();
    const token = sAppToken(state);
    dispatch({
      type: GET_HOME,
      payload: Api.getHome(
          {token}),
    }).then(
        function(disp) {
          const response = disp.action.payload;
          console.log('response: ', response);
          dispatch(addRistoranti({ristoranti: response.data}));
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

export function getServerRistorante(id) {
  return function(dispatch, getState) {
    const state = getState();
    const token = sAppToken(state);
    dispatch({
      type: GET_RISTORANTE,
      payload: Api.getRistoranteById(
          {id, token}),
    }).then(
        function(disp) {
          const response = disp.action.payload;
          console.log('response: ', response);
          dispatch(addRistoranti({ristoranti: response.data}));
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
