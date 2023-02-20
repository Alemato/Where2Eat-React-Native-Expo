import axios from 'axios';
import {LOCALHOST} from './ProxyConstants';

export const API_URL = `http://${LOCALHOST}:8080/api/`;
export const IMAGE_API_URL = `http://${LOCALHOST}:8080/uploads/`;
export const TOKEN_JWT_NAME = 'access_token';

function serializerResponse(response) {
  return {
    data: response.data,
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
}

export default Api;
