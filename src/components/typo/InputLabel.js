import {StyleSheet, Text} from 'react-native';

function InputLabel({text}) {
  return <Text style={styles.text}>{text}</Text>;
}

export default InputLabel;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: 'rgb(47,47,47)',
  },
});
