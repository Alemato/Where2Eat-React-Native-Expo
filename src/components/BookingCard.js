import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import ItemContainer from './ItemContainer';
import Card from './Card';
import {CardRowText, CardTitle, ItemHorizontalListSeparator} from './typo';
import CardImage from './CardImage';
import CardTextsContainer from './CardTextsContainer';
import Badge from './Bedge';
import MyButton from './MyButton';
import RowContainer from './RowContainer';
import BookingCancelModal from './BookingCancelModal';
import {patchServerBookings} from '../actions/BookingActions';
import {useDispatch} from 'react-redux';
import * as navigation from '../navigation/ServiceNavigator';
import {IMAGE_API_URL} from '../api/Api';

export default function BookingCard({prenotazione}) {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  function statoPrenotazioneText() {
    switch (prenotazione.statoPrenotazione) {
      case 1:
        return {nome: 'Confermato', color: styles.bedgeGreen};
      case 2:
        return {nome: 'Rifiutato', color: styles.bedgeRed};
      case 3:
        return {nome: 'Completato', color: styles.bedgeGreen};
      case 4:
        return {nome: 'Annullato', color: styles.bedgeRed};
      default:
        return {nome: 'Prenotato', color: styles.bedgeCyan};
    }
  }

  const toggleModalVisible = (modalState, annullato) => {
    console.log('ristorante: ' + prenotazione.ristorante.id,
        'prenotazione: ' + prenotazione.id);
    if (modalState) {
      setModalVisible(modalState);
    } else {
      if (annullato) {
        setModalVisible(modalState);
        dispatch(patchServerBookings(prenotazione.ristorante.id,
            prenotazione.id, 4));
      } else {
        setModalVisible(modalState);
      }
    }
  };

  function getImage(value) {
    return `${IMAGE_API_URL}${value[0].path}`;
  }

  return (
      <ItemContainer style={styles.cardContainer}>
        <Card>
          <CardTextsContainer>
            <RowContainer>
              <View style={{width: '65%'}}>
                <TouchableOpacity onPress={() => {
                  navigation.navigate('RestaurantPage',
                      {id: prenotazione.ristorante.id});
                }}>
                  <CardTitle
                      title={prenotazione.ristorante.ragioneSociale}/>
                </TouchableOpacity>

                <Badge text={statoPrenotazioneText().nome}
                       badgeStyle={styles.badge}
                       colorStyle={statoPrenotazioneText().color}/>
                <CardRowText
                    text={prenotazione.ristorante.localita +
                        ' - ' +
                        prenotazione.ristorante.indirizzo}/>
              </View>
              <View style={{width: '35%'}}>
                <CardImage style={styles.image}
                           source={{
                             uri: getImage(prenotazione.ristorante.immagini),
                           }}
                />
              </View>
            </RowContainer>

            <RowContainer style={styles.rowContainer}>
              <CardRowText style={styles.text}
                           text={prenotazione.data}/>
              <ItemHorizontalListSeparator/>
              <CardRowText style={styles.text}
                           text={prenotazione.ora}/>
              <ItemHorizontalListSeparator/>
              <CardRowText style={styles.text}
                           text={prenotazione.numeroPosti}/>

            </RowContainer>
            <View style={styles.buttonContent}>
              {(prenotazione.statoPrenotazione === 0 ||
                      prenotazione.statoPrenotazione === 1) &&
                  <MyButton
                      onPress={() => {
                        toggleModalVisible(!modalVisible, false,
                            prenotazione.id, prenotazione.ristorante.id);
                      }}
                      text={'ANNULLA'} color={'red'}
                      pressedColor={'darkred'}
                      styleButton={styles.button}/>
              }

            </View>
          </CardTextsContainer>
        </Card>
        <BookingCancelModal setModalVisible={toggleModalVisible}
                            modalVisible={modalVisible}/>
      </ItemContainer>
  );
}

const styles = StyleSheet.create({
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardContainer: {
    marginHorizontal: 10,
  },
  titleRow: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  bedgeRed: {
    backgroundColor: 'red',
  },
  bedgeGreen: {
    backgroundColor: 'green',
  },
  bedgeCyan: {
    backgroundColor: 'blue',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  button: {
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 113,
    marginTop: 5,
  },
  badge: {
    paddingHorizontal: 8,
    marginTop: 5,
    paddingBottom: 5,
    backgroundColor: 'grey',
    borderRadius: 10,
    width: '50%',
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    paddingVertical: 8,
    fontWeight: '400',
    paddingHorizontal: 15,
  },
  rowContainer: {
    marginVertical: 15,
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    borderRadius: 5,
  },
});
