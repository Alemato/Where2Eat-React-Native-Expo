import React, {useCallback, useState} from 'react';
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  CardRowText,
  CardTitle,
  ItemHorizontalListSeparator,
  Title,
} from '../components/typo';
import {useDispatch, useSelector} from 'react-redux';
import {sRistoranteSingolo} from '../selectors';
import ItemContainer from '../components/ItemContainer';
import CardImage from '../components/CardImage';
import CardRestaurantDetails from '../components/CardRestaurantDetails';
import RowContainer from '../components/RowContainer';
import BookingModal from '../components/BookingModal';
import MyButton from '../components/MyButton';
import {useFocusEffect} from '@react-navigation/native';
import {getServerRistorante} from '../actions/RistorantiActions';
import {resetRistoranti} from '../reducers/RistorantiReducer';
import {IMAGE_API_URL} from '../api/Api';

export default function RestaurantPageScreen({route, navigation}) {
  const {id} = route.params;
  const dispatch = useDispatch();
  const ristorante = useSelector(sRistoranteSingolo(id));

  useFocusEffect(useCallback(function() {
    if (ristorante != null) {
      navigation.setOptions({headerTitle: ristorante.ragioneSociale});
    } else {
      dispatch(getServerRistorante(id));
    }
  }, [ristorante, id]));

  useFocusEffect(useCallback(function() {
    return () => {
      dispatch(resetRistoranti());
    };
  }, []));

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = (modalState) => {
    const successPrenotazione = false;
    if (modalState) {
      setModalVisible(modalState);
    } else {
      // spostare nel action crea prenotazione
      if (successPrenotazione) {
        setModalVisible(modalState);
        Alert.alert('Prenotazione eseguita', 'Ci vediamo al ristorante', [
          {
            text: 'OK', onPress: () => {
              console.log('OK Pressed vai alle prenotazioni');
              navigation.navigate('Prenotazioni');
            },
          },
        ]);
      } else {
        Alert.alert('Prenotazione non eseguita',
            'Prova con un altro giorno o un altro orario', [
              {
                text: 'OK', onPress: () => {
                  console.log('NO Prenota di nuovo');
                },
              },
            ]);
      }

    }
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
        '- (N.D)');
  }

  function dueColonne() {
    const serv = ristorante.servizi;
    if (serv.length > 0) {
      if (serv.length >= 2) {
        let result = [];
        const offset = Math.floor(serv.length / 2);
        const arry1 = serv.slice(0, offset);
        const arry2 = serv.slice(offset, offset + offset);
        result.push(arry1);
        result.push(arry2);
        return result;
      } else {
        let result = [];
        result.push(serv);
        return result;
      }
    }
  }

  return (
      <>
        {ristorante != null &&
            <ItemContainer style={styles.container}>
              <ScrollView style={styles.scroll}>
                <CardImage style={styles.image}
                           source={{uri: `${IMAGE_API_URL}${ristorante.immagini[0].path}`}}>
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
                  <CardTitle title="Servizi offerti"></CardTitle>
                  <View style={styles.serviziR}>
                    <View
                        style={styles.serviziC}>
                      {dueColonne()[0].map((item, index) => {
                        return <Text key={index}>{item.nome}</Text>;
                      })}
                    </View>
                    {dueColonne().length === 2 &&
                        <View style={styles.serviziC}>
                          {dueColonne()[1].map((item, index) => {
                            return <Text key={index}>{' \u2022    ' +
                                item.nome}</Text>;
                          })}
                        </View>}
                  </View>
                </CardRestaurantDetails>
              </ScrollView>
              <View style={styles.buttonContent}>
                <MyButton
                    onPress={() => {
                      toggleModalVisible(!modalVisible);
                    }}
                    text={'PRENOTA AL RISTORNATE'}
                    color={'#0089FF'}
                    pressedColor={'#00539C'}
                    styleButton={styles.button}/>
              </View>
              <BookingModal setModalVisible={toggleModalVisible}
                            modalVisible={modalVisible}/>
            </ItemContainer>}
        {ristorante == null &&
            <Text style={styles.text}>Ristorante non trovato</Text>}

      </>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  scroll: {
    width: '100%',
    height: '84%',
    paddingTop: 15,
  },
  buttonContent: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
  },
  button: {
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 75,
  },
  textButton: {
    color: 'white',
    padding: 10,
    fontWeight: '800',
  },
  serviziC: {flexDirection: 'column', paddingLeft: 10},
  serviziR: {flexDirection: 'row'},
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
