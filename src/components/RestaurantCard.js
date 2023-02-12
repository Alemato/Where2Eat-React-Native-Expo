import React from "react";
import {Alert, Button, Image, StyleSheet, Text, View} from "react-native";


class RestaurantCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {restaurantCard} = this.props;
        return (
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Image style={styles.image}
                           source={require('../images/2019-07-Lollo-Caffè.jpg')}
                    />
                    <View style={styles.texts}>
                        <Text style={styles.ragioneSociale}>
                            {restaurantCard.ragioneSociale}
                        </Text>
                        <Text>
                            {restaurantCard.descrizione}
                        </Text>

                        <View style={styles.buttonContent}>
                            <Button style={styles.button}
                                    title="Dettagli"
                                    onPress={() => Alert.alert('Pagina ristorante')}
                            />
                        </View>

                    </View>

                </View>
            </View>
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
        // justifyContent: 'center', //Centered vertically
        // alignItems: 'center', // Centered horizontally
    },
    ragioneSociale: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 30
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    image: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    botton: {
        borderRadius: 10
    },
    texts: {
        padding: 20
    },
    cardContainer: {
        marginHorizontal: 10
    }
})
