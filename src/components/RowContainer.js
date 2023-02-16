import {StyleSheet, View} from 'react-native';

export default function RowContainer({children, style}) {
  return (
      <View style={style && style.flexDirection ?
          style :
          [styles.itemContainer, style]}>
        {children}
      </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
  },
});

