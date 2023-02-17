import {FlatList, StatusBar, StyleSheet} from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import ItemContainer from '../components/ItemContainer';

export default function BookingPageScreen() {
  const prenotazioni = [];

  return (
      <ItemContainer style={styles.container}>
        <FlatList style={styles.list}
                  data={prenotazioni}
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
