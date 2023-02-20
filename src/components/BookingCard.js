import React from 'react';
import {StyleSheet, View} from 'react-native';
import ItemContainer from './ItemContainer';
import Card from './Card';
import {CardRowText, CardTitle, ItemHorizontalListSeparator} from './typo';
import CardImage from './CardImage';
import CardTextsContainer from './CardTextsContainer';
import Badge from './Bedge';
import MyButton from './MyButton';
import RowContainer from './RowContainer';

export default function BookingCard({prenotazioneCard}) {

  function statoPrenotazioneText() {
    switch (prenotazioneCard.prenotazione.statoPrenotazione) {
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

  return (
      <ItemContainer style={styles.cardContainer}>
        <Card>
          <CardTextsContainer>
            <RowContainer>
              <View style={{width: '65%'}}>
                <CardTitle
                    title={prenotazioneCard.prenotazione.ristorante.ragioneSociale}/>
                <Badge text={statoPrenotazioneText().nome}
                       badgeStyle={styles.badge}
                       colorStyle={statoPrenotazioneText().color}/>
                <CardRowText
                    text={prenotazioneCard.prenotazione.ristorante.localita +
                        ' - ' +
                        prenotazioneCard.prenotazione.ristorante.indirizzo}/>
              </View>
              <View style={{width: '35%'}}>
                <CardImage style={styles.image}
                           source={{uri: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                />
              </View>
            </RowContainer>

            <RowContainer style={styles.rowContainer}>
              <CardRowText style={styles.text}
                           text={prenotazioneCard.prenotazione.data}/>
              <ItemHorizontalListSeparator/>
              <CardRowText style={styles.text}
                           text={prenotazioneCard.prenotazione.ora}/>
              <ItemHorizontalListSeparator/>
              <CardRowText style={styles.text}
                           text={prenotazioneCard.prenotazione.numeroPosti}/>

            </RowContainer>
            <View style={styles.buttonContent}>
              {(prenotazioneCard.prenotazione.statoPrenotazione === 0 ||
                      prenotazioneCard.prenotazione.statoPrenotazione === 1) &&
                  <MyButton text={'ANNULLA'} color={'red'}
                            pressedColor={'#00539C'}
                            styleButton={styles.button}/>
              }

            </View>
          </CardTextsContainer>
        </Card>
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
    paddingHorizontal: 10,
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
