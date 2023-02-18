import {StatusBar, StyleSheet} from 'react-native';
import ItemContainer from '../components/ItemContainer';

export default function BookingPageScreen() {
  const prenotazioni = [
    {
      id: 1,
      data: '19/01/2023',
      ora: '20:15',
      statoPrenotazione: 2,
      numeroPosti: 1,
      idCliente: 5,
      ristorante: {
        id: 2,
        ragioneSociale: 'Villa Crespi',
        indirizzo: 'Lago di Como 1',
        localita: 'Roma',
        prezzoMedioDichiarato: null,
        emailAziendale: null,
        telefonoAziendale: null,
        statoRistorante: null,
        capienzaMassima: null,
        descrizione: null,
        descrizioneBreve: null,
        immagini: [
          {
            id: 1,
            alt: 'Villa Crespi',
            path: 'ristorante/1674145564026_2019-07-Lollo-Caffè.jpg',
          },
        ],
        servizi: [],
        metodiPagamento: [],
        tipologiaCucina: [],
        recensioni: [],
      },
    },
    {
      id: 2,
      data: '20/01/2023',
      ora: '12:00',
      statoPrenotazione: 3,
      numeroPosti: 1,
      idCliente: 5,
      ristorante: {
        id: 2,
        ragioneSociale: 'Villa Crespi',
        indirizzo: 'Lago di Como 1',
        localita: 'Roma',
        prezzoMedioDichiarato: null,
        emailAziendale: null,
        telefonoAziendale: null,
        statoRistorante: null,
        capienzaMassima: null,
        descrizione: null,
        descrizioneBreve: null,
        immagini: [
          {
            id: 1,
            alt: 'Villa Crespi',
            path: 'ristorante/1674145564026_2019-07-Lollo-Caffè.jpg',
          },
        ],
        servizi: [],
        metodiPagamento: [],
        tipologiaCucina: [],
        recensioni: [],
      },
    },
    {
      id: 3,
      data: '22/01/2023',
      ora: '12:00',
      statoPrenotazione: 3,
      numeroPosti: 100,
      idCliente: 5,
      ristorante: {
        id: 2,
        ragioneSociale: 'Villa Crespi',
        indirizzo: 'Lago di Como 1',
        localita: 'Roma',
        prezzoMedioDichiarato: null,
        emailAziendale: null,
        telefonoAziendale: null,
        statoRistorante: null,
        capienzaMassima: null,
        descrizione: null,
        descrizioneBreve: null,
        immagini: [
          {
            id: 1,
            alt: 'Villa Crespi',
            path: 'ristorante/1674145564026_2019-07-Lollo-Caffè.jpg',
          },
        ],
        servizi: [],
        metodiPagamento: [],
        tipologiaCucina: [],
        recensioni: [],
      },
    },
    {
      id: 4,
      data: '22/01/2023',
      ora: '12:00',
      statoPrenotazione: 3,
      numeroPosti: 10,
      idCliente: 5,
      ristorante: {
        id: 2,
        ragioneSociale: 'Villa Crespi',
        indirizzo: 'Lago di Como 1',
        localita: 'Roma',
        prezzoMedioDichiarato: null,
        emailAziendale: null,
        telefonoAziendale: null,
        statoRistorante: null,
        capienzaMassima: null,
        descrizione: null,
        descrizioneBreve: null,
        immagini: [
          {
            id: 1,
            alt: 'Villa Crespi',
            path: 'ristorante/1674145564026_2019-07-Lollo-Caffè.jpg',
          },
        ],
        servizi: [],
        metodiPagamento: [],
        tipologiaCucina: [],
        recensioni: [],
      },
    },
    {
      id: 13,
      data: '16/02/2023',
      ora: '12:45',
      statoPrenotazione: 0,
      numeroPosti: 6,
      idCliente: 5,
      ristorante: {
        id: 2,
        ragioneSociale: 'Villa Crespi',
        indirizzo: 'Lago di Como 1',
        localita: 'Roma',
        prezzoMedioDichiarato: null,
        emailAziendale: null,
        telefonoAziendale: null,
        statoRistorante: null,
        capienzaMassima: null,
        descrizione: null,
        descrizioneBreve: null,
        immagini: [
          {
            id: 1,
            alt: 'Villa Crespi',
            path: 'ristorante/1674145564026_2019-07-Lollo-Caffè.jpg',
          },
        ],
        servizi: [],
        metodiPagamento: [],
        tipologiaCucina: [],
        recensioni: [],
      },
    },
    {
      id: 14,
      data: '23/02/2023',
      ora: '12:30',
      statoPrenotazione: 0,
      numeroPosti: 3,
      idCliente: 5,
      ristorante: {
        id: 2,
        ragioneSociale: 'Villa Crespi',
        indirizzo: 'Lago di Como 1',
        localita: 'Roma',
        prezzoMedioDichiarato: null,
        emailAziendale: null,
        telefonoAziendale: null,
        statoRistorante: null,
        capienzaMassima: null,
        descrizione: null,
        descrizioneBreve: null,
        immagini: [
          {
            id: 1,
            alt: 'Villa Crespi',
            path: 'ristorante/1674145564026_2019-07-Lollo-Caffè.jpg',
          },
        ],
        servizi: [],
        metodiPagamento: [],
        tipologiaCucina: [],
        recensioni: [],
      },
    },
  ];

  return (
      <ItemContainer style={styles.container}>
        {/*<FlatList style={styles.list}
                  data={prenotazioni}
                  renderItem={({item}) =>
                  }/>}
                  keyExtractor={(item) => item.id}
        />*/}
        <StatusBar style="auto"/>
      </ItemContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
});
