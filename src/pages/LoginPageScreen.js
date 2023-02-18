import {StyleSheet, View} from 'react-native';
import ItemContainer from '../components/ItemContainer';
import Card from '../components/Card';
import {InputLabel, Title} from '../components/typo';
import Input from '../components/Input';

export default function LoginPageScreen() {
  return (
      <View style={styles.pageContainer}>
        <View style={styles.cardContainer}>
          <Card>
            <ItemContainer>
              <Title title={'Accedi'} style={styles.title}/>
            </ItemContainer>
            <ItemContainer style={styles.labelContainer}>
              <InputLabel text={'Email'}/>
            </ItemContainer>
            <ItemContainer>
              <Input placeholder={'email@email.it'} style={styles.input}/>
            </ItemContainer>
          </Card>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    paddingTop: 2,
    paddingHorizontal: 10,
    marginTop: 20,
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 26,
    color: '#554E8F',
    marginBottom: 10,
    textAlign: 'center',
  },
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
  labelContainer: {
    paddingHorizontal: 12,
    marginBottom: 5,
  },
});
