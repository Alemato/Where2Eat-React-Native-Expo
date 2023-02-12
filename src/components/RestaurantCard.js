import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import ItemContainer from './ItemContainer';
import Card from './Card';

class RestaurantCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {restaurantCard} = this.props;

    return (
        <ItemContainer style={styles.cardContainer}>
          <Card>
            <Image style={styles.image}
                   source={{uri: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
            />
            <View style={styles.texts}>
              <View style={styles.titleRow}>
                <Text style={styles.ragioneSociale}>
                  {restaurantCard.ragioneSociale}
                </Text>
                <Text>
                  {restaurantCard.voto}
                </Text>
              </View>
              <Text>
                {restaurantCard.descrizione}
              </Text>

              <View style={styles.buttonContent}>
                <Button title="Dettagli"
                        onPress={() => {
                          navigation.navigate('Ristorante');
                        }}
                />
              </View>
            </View>
          </Card>
        </ItemContainer>
    );
  }
}

export default RestaurantCard;

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
  },
  ragioneSociale: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  texts: {
    padding: 20,
  },
  cardContainer: {
    marginHorizontal: 10,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
