import {StyleSheet, View} from 'react-native';

export default function ItemContainer({children, style}) {
  return (
      <View style={[styles.itemContainer, style]}>
        {children}
      </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 12,
    marginBottom: 24,
  },
});

