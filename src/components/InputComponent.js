import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

export default function InputComponent({
                                         data,
                                         onChangeData,
                                         placeholder,
                                         keyboardType,
                                         style,
                                       }) {

  return (
      <TextInput
          style={style ? style : styles.input}
          onChangeText={onChangeData}
          value={data}
          placeholder={placeholder}
          keyboardType={keyboardType}
      />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
