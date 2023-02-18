import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

export default function MyButton({
                                   text,
                                   color,
                                   pressedColor,
                                   styleButton,
                                   styleText,
                                   disabled = false,
                                   onPress,
                                 }) {

  return (
      <Pressable
          disabled={disabled}
          onPress={onPress}
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
