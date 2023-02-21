import axios from 'axios';
import {LOCALHOST} from './ProxyConstants';

export const API_URL = `http://${LOCALHOST}:8080/api/`;
export const IMAGE_API_URL = `http://${LOCALHOST}:8080/uploads/`;
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
      telefono: telefono,
      email: email,
      statoAccount: statoAccount,
      ruolo: ruolo,
    }, {headers: {Authorization: `Bearer ${token}`}}).
        then((response) => serializerResponse(response));
  }

  static getHome({token}) {
    return axios.get(API_URL + 'ristoranti',
        {headers: {Authorization: `Bearer ${token}`}, params: {view: 'home'}}).
        then((response) => serializerResponse(response));
  }

  static getPrenotazioni({token}) {
    return axios.get(API_URL + 'prenotazioni',
        {headers: {Authorization: `Bearer ${token}`}}).
        then((response) => serializerResponse(response));
  }
}

export default Api;
