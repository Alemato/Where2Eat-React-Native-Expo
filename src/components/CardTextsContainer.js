import {StyleSheet, View} from 'react-native';

export default function CardTextsContainer({children, style}) {
  return <View style={style && style.padding ?
      style : [style, styles.container]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
