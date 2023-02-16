import {FlatList, StatusBar, StyleSheet} from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import ItemContainer from '../components/ItemContainer';

export default function HomePageScreen() {
  const ristoranti = [
    {
      id: 1,
      ragioneSociale: 'Villa Crespi',
      indirizzo: 'Lago di Como 1',
      localita: 'Roma',
      prezzoMedioDichiarato: 200,
      emailAziendale: 'villa.crespi@ristorante',
      telefonoAziendale: '1234567891',
      statoRistorante: true,
      capienzaMassima: 100,
      descrizione: 'Ristorante proprio bellissimo',
      descrizioneBreve: 'La dimora venne costruita nel 1879 per iniziativa dell\'imprenditore Cristoforo Benigno Crespi',
      immagini: [
        {
          id: 1,
          alt: 'Villa Crespi',
          path: 'ristorante/1674145564026_2019-07-Lollo-Caffè.jpg',
        },
      ],
      servizi: [
        {
          id: 1,
          nome: 'Wi-Fi',
        },
      ],
      metodiPagamento: [
        {
          id: 1,
          nome: 'Mastercard',
        },
        {
          id: 2,
          nome: 'Visa',
        },
        {
          id: 3,
          nome: 'PayPal',
        },
      ],
      tipologiaCucina: [
        {
          id: 1,
          nome: 'Gourmet',
        },
        {
          id: 2,
          nome: 'Mediterraneo',
        },
      ],
      recensioni: [
        {
          id: 6,
          titolo: 'Bellissima',
          contenuto: 'Bellissima esperienza',
          voto: 5.0,
          idUtente: 5,
        },
        {
          id: 6,
          titolo: 'Bellissima',
          contenuto: 'Bellissima esperienza',
          voto: 4.0,
          idUtente: 5,
        },
        {
          id: 6,
          titolo: 'Bellissima',
          contenuto: 'Bellissima esperienza',
          voto: 2.0,
          idUtente: 5,
        },
      ],
    },
    {
      id: 2,
      ragioneSociale: 'Villa Crespi',
      indirizzo: 'Lago di Como 1',
      localita: 'Roma',
      prezzoMedioDichiarato: 200,
      emailAziendale: 'villa.crespi@ristorante',
      telefonoAziendale: '1234567891',
      statoRistorante: true,
      capienzaMassima: 100,
      descrizione: 'Ristorante proprio bellissimo',
      descrizioneBreve: 'Ristorante bellissimo Ristorante bellissimo Ristorante bellissimo ',
      immagini: [
        {
          id: 1,
          alt: 'Villa Crespi',
          path: 'ristorante/1674145564026_2019-07-Lollo-Caffè.jpg',
        },
      ],
      servizi: [
        {
          id: 1,
          nome: 'Wi-Fi',
        },
      ],
      metodiPagamento: [
        {
          id: 1,
          nome: 'Mastercard',
        },
        {
          id: 2,
          nome: 'Visa',
        },
        {
          id: 3,
          nome: 'PayPal',
        },
      ],
      tipologiaCucina: [
        {
          id: 1,
          nome: 'Gourmet',
        },
      ],
      recensioni: [],
    },
    {
      id: 3,
      ragioneSociale: 'Villa Crespi',
      indirizzo: 'Lago di Como 1',
      localita: 'Roma',
      prezzoMedioDichiarato: 200,
      emailAziendale: 'villa.crespi@ristorante',
      telefonoAziendale: '1234567891',
      statoRistorante: true,
      capienzaMassima: 100,
      descrizione: 'Ristorante proprio bellissimo',
      descrizioneBreve: 'Ristorante bellissimo Ristorante bellissimo Ristorante bellissimo ',
      immagini: [
        {
          id: 1,
          alt: 'Villa Crespi',
          path: 'ristorante/1674145564026_2019-07-Lollo-Caffè.jpg',
        },
      ],
      servizi: [
        {
          id: 1,
          nome: 'Wi-Fi',
        },
      ],
      metodiPagamento: [
        {
          id: 1,
          nome: 'Mastercard',
        },
        {
          id: 2,
          nome: 'Visa',
        },
        {
          id: 3,
          nome: 'PayPal',
        },
      ],
      tipologiaCucina: [
        {
          id: 1,
          nome: 'Gourmet',
        },
      ],
      recensioni: [
        {
          id: 6,
          titolo: 'Bellissima',
          contenuto: 'Bellissima esperienza',
          voto: 5,
          idUtente: 5,
        },
      ],
    },
    {
      id: 4,
      ragioneSociale: 'Villa Crespi',
      indirizzo: 'Lago di Como 1',
      localita: 'Roma',
      prezzoMedioDichiarato: 200,
      emailAziendale: 'villa.crespi@ristorante',
      telefonoAziendale: '1234567891',
      statoRistorante: true,
      capienzaMassima: 100,
      descrizione: 'Ristorante proprio bellissimo',
      descrizioneBreve: 'Ristorante bellissimo',
      immagini: [
        {
          id: 1,
          alt: 'Villa Crespi',
          path: 'ristorante/1674145564026_2019-07-Lollo-Caffè.jpg',
        },
      ],
      servizi: [
        {
          id: 1,
          nome: 'Wi-Fi',
        },
      ],
      metodiPagamento: [
        {
          id: 1,
          nome: 'Mastercard',
        },
        {
          id: 2,
          nome: 'Visa',
        },
        {
          id: 3,
          nome: 'PayPal',
        },
      ],
      tipologiaCucina: [
        {
          id: 1,
          nome: 'Gourmet',
        },
      ],
      recensioni: [
        {
          id: 6,
          titolo: 'Bellissima',
          contenuto: 'Bellissima esperienza',
          voto: 5,
          idUtente: 5,
        },
      ],
    },
    {
      id: 5,
      ragioneSociale: 'Villa Crespi',
      indirizzo: 'Lago di Como 1',
      localita: 'Roma',
      prezzoMedioDichiarato: 200,
      emailAziendale: 'villa.crespi@ristorante',
      telefonoAziendale: '1234567891',
      statoRistorante: true,
      capienzaMassima: 100,
      descrizione: 'Ristorante proprio bellissimo',
      descrizioneBreve: 'Ristorante bellissimo',
      immagini: [
        {
          id: 1,
          alt: 'Villa Crespi',
          path: 'ristorante/1674145564026_2019-07-Lollo-Caffè.jpg',
        },
      ],
      servizi: [
        {
          id: 1,
          nome: 'Wi-Fi',
        },
      ],
      metodiPagamento: [
        {
          id: 1,
          nome: 'Mastercard',
        },
        {
          id: 2,
          nome: 'Visa',
        },
        {
          id: 3,
          nome: 'PayPal',
        },
      ],
      tipologiaCucina: [
        {
          id: 1,
          nome: 'Gourmet',
        },
      ],
      recensioni: [
        {
          id: 6,
          titolo: 'Bellissima',
          contenuto: 'Bellissima esperienza',
          voto: 5,
          idUtente: 5,
        },
      ],
    },
    {
      id: 6,
      ragioneSociale: 'Villa Crespi',
      indirizzo: 'Lago di Como 1',
      localita: 'Roma',
      prezzoMedioDichiarato: 200,
      emailAziendale: 'villa.crespi@ristorante',
      telefonoAziendale: '1234567891',
      statoRistorante: true,
      capienzaMassima: 100,
      descrizione: 'Ristorante proprio bellissimo',
      descrizioneBreve: 'Ristorante bellissimo',
      immagini: [
        {
          id: 1,
          alt: 'Villa Crespi',
          path: 'ristorante/1674145564026_2019-07-Lollo-Caffè.jpg',
        },
      ],
      servizi: [
        {
          id: 1,
          nome: 'Wi-Fi',
        },
      ],
      metodiPagamento: [
        {
          id: 1,
          nome: 'Mastercard',
        },
        {
          id: 2,
          nome: 'Visa',
        },
        {
          id: 3,
          nome: 'PayPal',
        },
      ],
      tipologiaCucina: [
        {
          id: 1,
          nome: 'Gourmet',
        },
      ],
      recensioni: [
        {
          id: 6,
          titolo: 'Bellissima',
          contenuto: 'Bellissima esperienza',
          voto: 5,
          idUtente: 5,
        },
      ],
    },

  ];

  return (
      <ItemContainer style={styles.container}>
        <FlatList style={styles.list}
                  data={ristoranti}
                  renderItem={({item}) => <RestaurantCard restaurantCard={{
                    ristorante: item,
                  }}/>}
                  keyExtractor={(item) => item.id}
        />
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
