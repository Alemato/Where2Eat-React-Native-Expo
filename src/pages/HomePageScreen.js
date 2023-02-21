import {FlatList, StyleSheet, Text} from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import ItemContainer from '../components/ItemContainer';
import {useDispatch, useSelector} from 'react-redux';
import {sRistoranti} from '../selectors';
import {resetRistoranti} from '../reducers/RistorantiReducer';
import {getServerRistoranti} from '../actions/RistorantiActions';
import {Title} from '../components/typo';

export default function HomePageScreen() {
  const dispatch = useDispatch();
  const ristoranti = useSelector(sRistoranti);

  useFocusEffect(useCallback(function() {
    if (ristoranti == null || ristoranti.length === 0) {
      dispatch(getServerRistoranti());
    }
    return () => {
      console.log('smonto');
      dispatch(resetRistoranti());
    };
  }, []));
  return (
      <ItemContainer style={styles.container}>
        <Title title={'I Ristoranti più scelti'}/>
        {(ristoranti == null || ristoranti.length === 0) &&
            <Text style={styles.text}>Nessun ristorante Disponibile</Text>}
        {(ristoranti != null && ristoranti.length > 0) &&
            <FlatList style={styles.list}
                      data={ristoranti}
                      renderItem={({item}) => <RestaurantCard
                          restaurantCard={{
                            ristorante: item,
                          }}/>}
                      keyExtractor={(item) => item.id}
            />}
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
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
