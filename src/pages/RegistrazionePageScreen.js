import {ScrollView, StyleSheet, View} from 'react-native';
import Card from '../components/Card';
import ItemContainer from '../components/ItemContainer';
import {InputLabel, Title} from '../components/typo';
import Input from '../components/Input';
import MyButton from '../components/MyButton';

export default function RegistrazionePageScreen() {
  return (
      <ScrollView style={styles.pageContainer}>
        <View style={styles.cardContainer}>
          <Card>
            <ItemContainer>
              <Title title={'Registrati'} style={styles.title}/>
            </ItemContainer>

            <ItemContainer style={styles.labelContainer}>
              <InputLabel text={'Nome'}/>
            </ItemContainer>
            <ItemContainer style={styles.inputContainer}>
              <Input placeholder={'Nome'} style={styles.input}
                     rest={{placeholderTextColor: 'rgb(159,159,159)'}}/>
            </ItemContainer>


            <ItemContainer style={styles.labelContainer}>
              <InputLabel text={'Cognome'}/>
            </ItemContainer>
            <ItemContainer style={styles.inputContainer}>
              <Input placeholder={'Cognome'} style={styles.input}
                     rest={{placeholderTextColor: 'rgb(159,159,159)'}}/>
            </ItemContainer>

            <ItemContainer style={styles.labelContainer}>
              <InputLabel text={'Numero di telefono'}/>
            </ItemContainer>
            <ItemContainer style={styles.inputContainer}>
              <Input placeholder={'Numero di telefono'} style={styles.input}
                     rest={{placeholderTextColor: 'rgb(159,159,159)'}}
                     keyboardType={'number-pad'}/>
            </ItemContainer>


            <ItemContainer style={styles.labelContainer}>
              <InputLabel text={'Email'}/>
            </ItemContainer>
            <ItemContainer style={styles.inputContainer}>
              <Input placeholder={'email@email.it'} style={styles.input}
                     rest={{placeholderTextColor: 'rgb(159,159,159)'}}
                     keyboardType={'email-address'}/>
            </ItemContainer>


            <ItemContainer style={styles.labelContainer}>
              <InputLabel text={'Password'}/>
            </ItemContainer>
            <ItemContainer style={styles.inputContainer}>
              <Input placeholder={'Password'} style={styles.input}
                     rest={{
                       secureTextEntry: true,
                       placeholderTextColor: 'rgb(159,159,159)',
                     }}/>
            </ItemContainer>


            <ItemContainer style={styles.buttonContainer}>
              <MyButton text={'REGISTRATI'}
                        color={'#0089FF'}
                        pressedColor={'#00539C'} styleText={styles.button}/>
            </ItemContainer>
          </Card>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  cardContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 35,
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
  inputContainer: {
    paddingHorizontal: 12,
    marginBottom: 24,
  },
  button: {
    color: 'white',
    padding: 10,
    fontWeight: '800',
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 12,
    marginBottom: 35,
  },
});
