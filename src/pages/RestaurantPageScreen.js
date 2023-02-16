import {Button, FlatList, ScrollView, StyleSheet, View} from 'react-native';
import ItemContainer from '../components/ItemContainer';
import CardImage from '../components/CardImage';
import {
  CardRowText,
  CardTitle,
  ItemHorizontalListSeparator,
  Title,
} from '../components/typo';
import CardRestaurantDetails from '../components/CardRestaurantDetails';
import React from 'react';
import RowContainer from '../components/RowContainer';

export default function RestaurantPageScreen() {

  const ristorante = {
    id: 1,
    ragioneSociale: 'Villa Crespi',
    indirizzo: 'Lago di Como 1',
    localita: 'Roma',
    prezzoMedioDichiarato: 200,
    emailAziendale: 'villa.crespi@ristorante',
    telefonoAziendale: '1234567891',
    statoRistorante: true,
    capienzaMassima: 100,
    descrizione: 'La villa, in stile moresco, trae ispirazione dagli edifici dei paesi mediorientali, dai quali Cristoforo Crespi era affascinato. È suddivisa in tre piani dalle pareti rivestite da stucco a stampo tipico dei paesi Arabi. Le sale di ogni piano sono attraversate da alcuni archi rialzati e il piano terra presenta cinque sale ognuna differentemente decorata. Il pavimento del vestibolo (oggi la reception) è rivestito con l\'antico metodo veneziano del palladianesimo.',
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
      {
        id: 2,
        nome: '',
      },
      {
        id: 3,
        nome: '',
      },
      {
        id: 4,
        nome: 'Wi-Fi',
      },
      {
        id: 5,
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
  };

  function separator() {
    return <ItemHorizontalListSeparator/>;
  }

  function votoMedio(recensioni) {
    let votoMedio = 0;
    recensioni.forEach((r) => {
      votoMedio += r.voto;
    });
    return (recensioni && recensioni.length !== 0 ?
        parseFloat((votoMedio / recensioni.length).toFixed(1)).toString() :
        'nessun');
  }

  function serviceList() {
    return (
        <FlatList
            ListEmptyComponent={<View/>}
            data={ristorante.servizi}
            renderItem={({item}) =>
                <CardRowText text={' \u2022    ' + item.nome}></CardRowText>
            }/>
    );
  }

  return (
      <ItemContainer style={styles.container}>
        <ScrollView style={styles.scroll}>
          <CardImage style={styles.image}
                     source={{uri: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}>
          </CardImage>
          <Title title={ristorante.ragioneSociale}></Title>
          <CardRestaurantDetails>
            <CardTitle title="Dettagli Ristorante"></CardTitle>
            <RowContainer>
              <CardRowText text={'Località:   '}/>
              <CardRowText text={ristorante.localita}/>
            </RowContainer>
            <RowContainer>
              <CardRowText text={'Indirizzo:   '}/>
              <CardRowText text={ristorante.indirizzo}/>
            </RowContainer>
            <RowContainer>
              <CardRowText text={'Tipo cucina:   '}/>
              <FlatList horizontal={true}
                        ItemSeparatorComponent={separator}
                        ListEmptyComponent={<View/>}
                        data={ristorante.tipologiaCucina}
                        renderItem={({item}) =>
                            <CardRowText text={item.nome}></CardRowText>
                        }/>
            </RowContainer>
            <RowContainer>
              <CardRowText text={'Numero posti:   '}/>
              <CardRowText text={ristorante.capienzaMassima}/>
            </RowContainer>
            <RowContainer>
              <CardRowText text={'Email:   '}/>
              <CardRowText text={ristorante.emailAziendale}/>
            </RowContainer>
            <RowContainer>
              <CardRowText text={'Telefono:   '}/>
              <CardRowText text={ristorante.telefonoAziendale}/>
            </RowContainer>
            <RowContainer>
              <CardRowText text={'Pagamento:   '}/>
              <FlatList horizontal={true}
                        ItemSeparatorComponent={separator}
                        ListEmptyComponent={<View/>}
                        data={ristorante.metodiPagamento}
                        renderItem={({item}) =>
                            <CardRowText text={item.nome}></CardRowText>
                        }/>
            </RowContainer>
            <RowContainer>
              <CardRowText text={'Voto:   '}/>
              <CardRowText text={!ristorante.recensioni ||
              ristorante.recensioni.length === 0 ?
                  'Nessuna recensione' :
                  ristorante.recensioni.length}/>
              <CardRowText text={!ristorante.recensioni ||
              ristorante.recensioni.length === 0 ?
                  '' :
                  ' recensioni con media: '}/>
              <CardRowText text={!ristorante.recensioni ||
              ristorante.recensioni.length === 0 ?
                  '' :
                  votoMedio(ristorante.recensioni)}/>
            </RowContainer>
          </CardRestaurantDetails>
          <CardRestaurantDetails>
            <CardTitle title="Descrizione Ristorante"></CardTitle>
            <RowContainer>
              <CardRowText text={ristorante.descrizione}/>
            </RowContainer>
          </CardRestaurantDetails>
          <CardRestaurantDetails>
            <CardTitle title="Servizi opperti"></CardTitle>
            <RowContainer>
              <FlatList horizontal={true}
                        ListEmptyComponent={<View/>}
                        ItemSeparatorComponent={separator}
                        data={ristorante.servizi}
                        renderItem={({item}) =>
                            <CardRowText
                                text={item.nome}></CardRowText>
                        }/>

            </RowContainer>
          </CardRestaurantDetails>
          <Button title="Prenota sl ristorante"
                  onPress={() => {
                    navigation.navigate('RestaurantPageScreen');
                  }}
          />
        </ScrollView>
      </ItemContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 30,
    paddingBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  scroll: {
    width: '100%',
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});
