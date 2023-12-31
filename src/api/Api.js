import axios from 'axios';
import {LOCALHOST} from './ProxyConstants';

export const API_URL = `http://${LOCALHOST}:8080/api/`;
export const IMAGE_API_URL = `http://${LOCALHOST}:8080/api/uploads/`;
export const TOKEN_JWT_NAME = 'access_token';

export function serializerResponse(response) {
  let data;
  if (Array.isArray(response.data)) {
    data = [...response.data];
  } else data = {...response.data};
  return {
    data: data,
    headers: {...response.headers},
    status: response.status,
    statusText: response.statusText,
  };
}

class Api {
  static loggedIn({email, password}) {
    return axios.post(API_URL + 'login', {username: email, password: password}).
        then((response) => serializerResponse(response));
  }

  static registrazione({nome, cognome, telefono, email, password}) {
    return axios.post(API_URL + 'account', {
      nome: nome,
      cognome: cognome,
      email: email,
      telefono: telefono,
      password: password,
    }).then((response) => serializerResponse(response));
  }

  static modificaAccount({
                           nome,
                           cognome,
                           telefono,
                           email,
                           statoAccount,
                           ruolo,
                           token,
                         }) {
    return axios.patch(API_URL + 'account', {
      nome: nome,
      cognome: cognome,
      statoAccount: statoAccount,
      ruolo: ruolo,
      email: email,
      telefono: telefono,
    }, {headers: {Authorization: `Bearer ${token}`}}).
        then((response) => serializerResponse(response));
  }

  static getHome({token}) {
    return axios.get(API_URL + 'ristoranti',
        {headers: {Authorization: `Bearer ${token}`}, params: {view: 'home'}}).
        then((response) => serializerResponse(response));
  }

  static getRistoranteById({id, token}) {
    return axios.get(API_URL + `ristoranti/${id}`,
        {headers: {Authorization: `Bearer ${token}`}, params: {view: 'home'}}).
        then((response) => serializerResponse(response));
  }

  static getPrenotazioni({token}) {
    return axios.get(API_URL + 'prenotazioni',
        {headers: {Authorization: `Bearer ${token}`}}).
        then((response) => serializerResponse(response));
  }

  static ricerca({dove, cosa, token}) {
    let params = undefined;
    if (dove != null && cosa != null) {
      params = {cosa: cosa, dove: dove};
    } else if (dove != null) {
      params = {dove: dove};
    }
    console.log(params);
    if (params !== undefined) {
      return axios.get(API_URL + 'ristoranti/search/',
          {
            headers: {Authorization: `Bearer ${token}`},
            params: params,
          }).
          then((response) => serializerResponse(response));
    } else {
      return axios.get(API_URL + 'ristoranti/search/',
          {headers: {Authorization: `Bearer ${token}`}}).
          then((response) => serializerResponse(response));
    }
  }

  static modificaPrenotazione({idRistorante, id, stato, token}) {
    return axios.patch(API_URL + `ristoranti/${idRistorante}/prenotazioni`, {
          id: id,
          stato: stato,
        },
        {headers: {Authorization: `Bearer ${token}`}}).
        then((response) => serializerResponse(response));
  }

  static createPrenotazione({idRistorante, date, time, seat, token}) {
    return axios.post(API_URL + 'prenotazioni', {
          id: idRistorante,
          data: date,
          ora: time,
          numeroPosti: seat,
        },
        {headers: {Authorization: `Bearer ${token}`}}).
        then((response) => serializerResponse(response));
  }
}

export default Api;
