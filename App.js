import {FlatList, StyleSheet, View} from 'react-native';
import RestaurantCard from './src/components/RestaurantCard';

export default function App() {

  const ristoranti = [
    {
      id: '1',
      ragioneSociale: 'Villa Crespi 1',
      descrizione: 'ababablue blue',
      voto: '10',
    },
    {
      id: '2',
      ragioneSociale: 'Villa Crespi 2',
      descrizione: 'ababablue blue',
      voto: '10',
    },
    {
      id: '3',
      ragioneSociale: 'Villa Crespi 3',
      descrizione: 'ababablue blue',
      voto: '10',
    },
    {
      id: '4',
      ragioneSociale: 'Villa Crespi 4',
      descrizione: 'ababablue blue',
      voto: '10',
    },
  ];

  return (
      <View style={styles.container}>
        <FlatList style={styles.list}
                  data={ristoranti}
                  renderItem={({item}) => <RestaurantCard restaurantCard={{
                    ragioneSociale: item.ragioneSociale,
                    descrizione: item.descrizione,
                    voto: item.voto,
                  }}/>}
                  keyExtractor={(item) => item.id}
        />
      </View>
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
