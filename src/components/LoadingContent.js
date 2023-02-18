import {ActivityIndicator, StyleSheet, View} from 'react-native';

export default function LoadingContent({children, style}) {
  const loading = false;
  return (
      <View style={[
        styles.container,
        style,
      ]}>
        {children}
        {loading && <View style={[StyleSheet.absoluteFill, styles.loading]}>
          <ActivityIndicator size="large" color={'white'}/>
        </View>}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
