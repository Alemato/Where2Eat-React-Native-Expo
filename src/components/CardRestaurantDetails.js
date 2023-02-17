import {StyleSheet, View} from 'react-native';

export default function CardRestaurantDetails({children}) {
  return (
      <View style={styles.card}>{children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginBottom: 30,
    padding: 20,
    marginHorizontal: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    width: '95%',
  },
});
