import {StyleSheet} from 'react-native';
import ItemContainer from '../components/ItemContainer';
import {Title} from '../components/typo';

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

  function divisioneListe() {
    console.log(prenotazioni.filter(
        p => p.statoPrenotazione === 0 || p.statoPrenotazione === 1));
    console.log(prenotazioni.filter(
        p => p.statoPrenotazione === 2 || p.statoPrenotazione ===
            3 || p.statoPrenotazione === 4));
    return {
      primoGrupo: prenotazioni.filter(
          p => p.statoPrenotazione === 0 || p.statoPrenotazione === 1),
      secondoGrupo: prenotazioni.filter(
          p => p.statoPrenotazione === 2 || p.statoPrenotazione ===
              3 || p.statoPrenotazione === 4),
    };
  }

  return (
      <ItemContainer style={styles.container}>
        <Title title={'Prossime Prenotazioni'}/>
        {/*<ScrollView style={styles.list}>
          {divisioneListe().map((item, index) => {
                return <BookingCard
                    prenotazioneCard={divisioneListe().primoGrupo}
                    key={index}/>;
              })}
          {divisioneListe().map((item, index) => {
                return <BookingCard
                    prenotazioneCard={divisioneListe().secondoGrupo}
                    key={index}/>;
              })}
        </ScrollView>*/}


        {/*<FlatList style={styles.list}
                  data={prenotazioni.filter(
                      p => p.statoPrenotazione === 0 || p.statoPrenotazione ===
                          1)}
                  renderItem={({item}) => <BookingCard
                      prenotazioneCard={{prenotazione: item}}/>}
                  keyExtractor={(item) => item.id}
        />

        <Title title={'Prenotazioni Passate'}/>
        <FlatList style={styles.list}
                  data={prenotazioni.filter(
                      p => p.statoPrenotazione === 2 || p.statoPrenotazione ===
                          3 || p.statoPrenotazione === 4)}
                  renderItem={({item}) => <BookingCard
                      prenotazioneCard={{prenotazione: item}}/>}
                  keyExtractor={(item) => item.id}
        />*/}
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
