import {StyleSheet, View} from 'react-native';
import {CardRowText} from './typo';

function Badge({colorStyle, styleText, text, badgeStyle}) {
  return (
      <View style={[badgeStyle ? badgeStyle : styles.badge, colorStyle]}>
        <CardRowText style={styleText ? styleText : styles.text} text={text}/>
      </View>);
}

export default Badge;

const styles = StyleSheet.create({

  badge: {
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginTop: 10,
    paddingBottom: 5,
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 5,
    color: 'white',
  },
});
