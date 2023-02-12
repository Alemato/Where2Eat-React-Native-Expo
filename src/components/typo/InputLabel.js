import {StyleSheet} from 'react-native';

function InputLabel({text}) {
  return <Text style={styles.text}>{text}</Text>;
}

export default InputLabel;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: 'rgb(201,201,201)',
  },
});
