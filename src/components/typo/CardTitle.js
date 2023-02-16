import {StyleSheet, Text} from 'react-native';

export default function CardTitle({title, style}) {
  return <Text style={style ? style : styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 26,
    color: '#554E8F',
    marginBottom: 10,
  },
});
