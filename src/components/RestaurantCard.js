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
import {useNavigation} from '@react-navigation/native';
import {IMAGE_API_URL} from '../api/Api';

export default function RestaurantCard({restaurantCard}) {
  const navigation = useNavigation();

  function separator() {
    return <ItemHorizontalListSeparator/>;
  }

  function votoMedio(recensioni) {
    let votoMedio = 0;
    recensioni.forEach((r) => {
      votoMedio += r.voto;
    });
    return (recensioni.length !== 0 ?
        parseFloat((votoMedio / recensioni.length).toFixed(1)).toString() :
        '- (N.D.)');
  }

  function getImage(value) {
    return `${IMAGE_API_URL}${value[0].path}`;
  }

  return (
      <ItemContainer style={styles.cardContainer}>
        <Card>
          <CardImage
              source={{uri: getImage(restaurantCard.ristorante.immagini)}}
          />
          <CardTextsContainer>
            <RowContainer style={styles.titleRow}>
              <CardTitle title={restaurantCard.ristorante.ragioneSociale}/>
            </RowContainer>
            <CardRowText text={'Voto medio:   ' +
                votoMedio(restaurantCard.ristorante.recensioni)}>
            </CardRowText>
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
                        pressedColor={'#00539C'} styleButton={styles.button}
                        onPress={() => {
                          navigation.navigate('RestaurantPage',
                              {id: restaurantCard.ristorante.id});
                        }}/>
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
  button: {
    borderRadius: 5,
    alignItems: 'center',
  },
});
