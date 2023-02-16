import React from 'react';
import {StyleSheet, Text} from 'react-native';

function ItemHorizontalListSeparator({style}) {
  return <Text style={style ? style : styles.separator}> {'\u2022'} </Text>;
}

export default ItemHorizontalListSeparator;

const styles = StyleSheet.create({
  separator: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 5,
  },
});
