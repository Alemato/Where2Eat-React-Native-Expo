import {Alert} from 'react-native';

export function erroreInternoApp() {
  Alert.alert('Errore Interno Alla applicazione', 'Ricarica l\'Applicazione!');
}

export function erroreInternoServer() {
  Alert.alert('Errore del Server',
      'Si è verificato un errore interno al server. Ricarica l\'Applicazione');
}
