import Api from '../api/Api';
import {
  sAppToken,
  sCreateBookingDate,
  sCreateBookingSeat,
  sCreateBookingTime,
} from '../selectors';
import {erroreInternoApp, erroreInternoServer} from './actionConstants';
import {addBookings} from '../reducers/BookingsReducer';
import {Alert} from 'react-native';
import {resetRegistratiForm} from '../reducers/LoginRegistrazioneReducer';
import * as navigation from '../navigation/ServiceNavigator';
import {resetBookingForm} from '../reducers/CreateBookingReducer';
import {CREATE_BOOKINGS, GET_BOOKINGS, PATCH_BOOKINGS} from './action-types';

export function getServerBookings() {
  return function(dispatch, getState) {
    const state = getState();
    const token = sAppToken(state);
    dispatch({
      type: GET_BOOKINGS,
      payload: Api.getPrenotazioni({token}),
    }).then(
        function(disp) {
          const response = disp.action.payload;
          console.log('response: ', response);
          const prenotazioniFuture = response.data.filter(
              p => p.statoPrenotazione === 0 || p.statoPrenotazione === 1);
          const prenotazioniPassate = response.data.filter(
              p => p.statoPrenotazione === 2 || p.statoPrenotazione === 3 ||
                  p.statoPrenotazione === 4);
          dispatch(addBookings({
            bookings: {
              futureBookings: prenotazioniFuture,
              pastBookings: prenotazioniPassate,
            },
          }));
        },
    ).catch(function(error) {
      console.log('error');
      if (error.response) {
        erroreInternoServer();
      }
    });
  };
}

export function patchServerBookings(idRistorante, id, stato) {
  return function(dispatch, getState) {
    const state = getState();
    const token = sAppToken(state);
    dispatch({
      type: PATCH_BOOKINGS,
      payload: Api.modificaPrenotazione({idRistorante, id, stato, token}),
    }).then(
        function(disp) {
          const response = disp.action.payload;
          console.log('response: ', response);
          Alert.alert('Prenotazione Creata',
              'Ci dispiace tu abbia annullato la prenotazione, fai un\'altra prenotazione',
          );
        },
    ).catch(function(error) {
      console.log('error');
      if (error.response) {
        if (error.response.status === 400) {
          Alert.alert('Operazione non riuscita',
              'Richiesta non corretta',
          );
        } else if (error.response.status === 404) {
          Alert.alert('Operazione non riuscita',
              'Ristorante non trovato',
          );
        } else {
          erroreInternoServer();
        }
      } else if (error.request) {
        // La richiesta è stata effettuata ma non è stata ricevuta alcuna risposta
        erroreInternoApp();
      } else {
        // Si è verificato qualcosa durante l'impostazione della richiesta che ha attivato un errore
        console.log('Error', error.message);
        erroreInternoApp();
      }
    });
  };
}

export function createServerBooking(idRistorante) {
  return function(dispatch, getState) {
    const state = getState();
    const token = sAppToken(state);
    const date = sCreateBookingDate(state);
    const time = sCreateBookingTime(state);
    const seat = sCreateBookingSeat(state);
    dispatch({
      type: CREATE_BOOKINGS,
      payload: Api.createPrenotazione(
          {idRistorante, date, time, seat, token}),
    }).then(
        function(disp) {
          const response = disp.action.payload;
          dispatch(resetBookingForm());
          console.log('response: ', response);
          Alert.alert('Prenotazione Creata',
              'Vai alla pagina delle prenotazione per visualizzarla', [
                {
                  text: 'OK', onPress: () => {
                    dispatch(resetRegistratiForm);
                    navigation.navigate('Prenotazioni');
                  },
                },
              ]);
        },
    ).catch(function(error) {
      console.log('error');
      if (error.response) {
        if (error.response.status === 400) {
          Alert.alert('Operazione non riuscita',
              'Richiesta non corretta',
          );
        } else if (error.response.status === 404) {
          Alert.alert('Operazione non riuscita',
              'Ristorante non trovato',
          );
        } else {
          erroreInternoServer();
        }
      } else if (error.request) {
        // La richiesta è stata effettuata ma non è stata ricevuta alcuna risposta
        erroreInternoApp();
      } else {
        // Si è verificato qualcosa durante l'impostazione della richiesta che ha attivato un errore
        console.log('Error', error.message);
        erroreInternoApp();
      }
    });
  };
}
