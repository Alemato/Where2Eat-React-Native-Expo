import {Alert, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

export default function MyButton({
                                   text,
                                   color,
                                   pressedColor,
                                   styleButton,
                                   styleText,
                                   setModalVisible,
                                   modalVisible,
                                   disabled = false,
                                 }) {
  function dismissModal() {
    setModalVisible(!modalVisible);
    if (modalVisible) {
      Alert.alert('Prenotazione eseguita', 'Ci vediamo al ristorante');
    }
  }

  return (
      <Pressable
          disabled={disabled}
          onPress={() => setModalVisible ? dismissModal() : null}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? pressedColor : color,
            },
            disabled ? styles.disabled : '',
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
