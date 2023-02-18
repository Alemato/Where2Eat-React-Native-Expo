import {Alert, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function MyButton({
                                   text,
                                   color,
                                   pressedColor,
                                   styleButton,
                                   styleText,
                                   setModalVisible,
                                   modalVisible,
                                   disabled = false,
                                   pressHandler = () => {
                                   },
                                 }) {
  const navigation = useNavigation();

  function dismissModal() {
    // dispatch redux crea prenotazione e vedi cosa fare
    setModalVisible(!modalVisible);
    //modalVisible = true;
    if (modalVisible) {
      // spostare nel action crea prenotazione
      Alert.alert('Prenotazione eseguita', 'Ci vediamo al ristorante', [
        {
          text: 'OK', onPress: () => {
            console.log('OK Pressed vai alle prenotazioni');
            navigation.navigate('Prenotazioni');
          },
        },
      ]);
    }
  }

  return (
      <Pressable
          disabled={disabled}
          onPress={() => {
            setModalVisible ? dismissModal() : pressHandler();
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? pressedColor : color,
            },
            disabled ? styles.disabled : null,
            styleButton,
          ]}>
        <Text style={styleText ? styleText : styles.textButton}>{text}</Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  textButton: {
    color: 'white',
    padding: 10,
    fontWeight: '800',
  },
  disabled: {
    backgroundColor: '#9e9e9e',
  },
});
