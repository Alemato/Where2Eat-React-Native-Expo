import {StyleSheet, View} from 'react-native';

export default function Card({children}) {
  return (
      <View style={styles.card}>{children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    // justifyContent: 'center', //Centered vertically
    // alignItems: 'center', // Centered horizontally
  },
});
