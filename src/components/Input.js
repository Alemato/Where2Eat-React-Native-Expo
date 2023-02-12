import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {value, placeholder, handleChangeText, style} = this.props;
    return (
        <TextInput {...this.props} style={[styles.input, style]}
                   value={value}
                   onChangeText={handleChangeText}
                   placeholder={placeholder}
                   placeholderTextColor={styles.placeholderColor}/>
    );
  }
}

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderBottomColor: '#000000',
    fontSize: 18,
    height: 35,
    paddingHorizontal: 5,
    color: 'black',
  },
  placeholderColor: 'rgb(201,201,201)',
});
