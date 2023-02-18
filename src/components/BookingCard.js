/*
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ItemContainer from './ItemContainer';
import Card from './Card';
import {CardRowText, CardTitle, ItemHorizontalListSeparator} from './typo';
import RowContainer from './RowContainer';
import CardImage from './CardImage';
import CardTextsContainer from './CardTextsContainer';
import Badge from './Bedge';
import MyButton from './MyButton';

export default function BookingCard({restaurantCard}) {

  function separator() {
    return <ItemHorizontalListSeparator/>;
  }



  return (
      <ItemContainer style={styles.cardContainer}>
        <Card>
          <CardImage
              source={{uri: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
          />
          <CardTextsContainer>
            <RowContainer style={styles.titleRow}>
              <CardTitle title={restaurantCard.ristorante.ragioneSociale}/>
              <CardRowText text={'Voto medio:   ' +
                  votoMedio(restaurantCard.ristorante.recensioni)}>
              </CardRowText>
            </RowContainer>
            <FlatList horizontal={true}
                      ItemSeparatorComponent={separator}
                      ListEmptyComponent={<View/>}
                      data={restaurantCard.ristorante.tipologiaCucina}
                      renderItem={({item}) =>
                          <CardRowText text={item.nome}></CardRowText>
                      }/>
            <FlatList horizontal={true}
                      ItemSeparatorComponent={separator}
                      ListEmptyComponent={<View/>}
                      data={restaurantCard.ristorante.servizi}
                      renderItem={({item}) =>
                          <CardRowText text={item.nome}></CardRowText>
                      }>
            </FlatList>
            <FlatList horizontal={true}
                      data={restaurantCard.ristorante.metodiPagamento}
                      renderItem={({item}) =>
                          <Badge text={item.nome}></Badge>
                      }>
            </FlatList>
            <CardRowText text={'Prezzo medio:   ' +
                restaurantCard.ristorante.prezzoMedioDichiarato + ' €'}>
              Prezzo
              medio: {restaurantCard.ristorante.prezzoMedioDichiarato} €
            </CardRowText>
            <CardRowText
                text={restaurantCard.ristorante.descrizioneBreve}></CardRowText>

            <View style={styles.buttonContent}>
              <MyButton text={'PRENOTA AL RISTORNATE'} color={'#0089FF'}
                        pressedColor={'#00539C'} styleButton={styles.button}/>
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
    marginTop: 10,
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
});
*/