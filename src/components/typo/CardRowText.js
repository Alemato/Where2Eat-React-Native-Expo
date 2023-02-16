import React from 'react';
import {StyleSheet, Text} from 'react-native';

function CardRowText({text, style}) {
  return <Text style={style ? style : styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 8,
  },
});
export default CardRowText;
