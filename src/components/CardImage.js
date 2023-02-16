import {Image, StyleSheet} from 'react-native';

export default function CardImage({source, style}) {
  return <Image style={style ? style : styles.image} source={source}></Image>;
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
