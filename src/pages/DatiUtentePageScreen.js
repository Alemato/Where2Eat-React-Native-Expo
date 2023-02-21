import {ScrollView, StyleSheet, View} from 'react-native';
import ItemContainer from '../components/ItemContainer';
import {InputLabel, Title} from '../components/typo';
import Input from '../components/Input';
import MyButton from '../components/MyButton';
import {useDispatch, useSelector} from 'react-redux';
import {
  sAppUser,
  sDatiAccountCognome,
  sDatiAccountEmail,
  sDatiAccountNome,
  sDatiAccountTelefono,
} from '../selectors';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {
  changeCognome,
  changeEmail,
  changeNome,
  changeTelefono,
  resetForm,
} from '../reducers/DatiAccountReducer';
import {modificaAccount} from '../actions/DatiAccountActions';

export default function DatiUtentePageScreen() {
  const dispatch = useDispatch();
  const userApp = useSelector(sAppUser);
  const nome = useSelector(sDatiAccountNome);
  const cognome = useSelector(sDatiAccountCognome);
  const telefono = useSelector(sDatiAccountTelefono);
  const email = useSelector(sDatiAccountEmail);

  useFocusEffect(useCallback(function() {
    dispatch(changeNome(userApp.nome));
    dispatch(changeCognome(userApp.cognome));
    dispatch(changeTelefono(userApp.telefono));
    dispatch(changeEmail(userApp.email));
    return () => {
      dispatch(resetForm());
    };
  }, []));

  function handleChangeTextNome(nome) {
    dispatch(changeNome(nome));
  }

  function handleChangeTextCognome(cognome) {
    dispatch(changeCognome(cognome));
  }

  function handleChangeTextTelefono(telefono) {
    dispatch(changeTelefono(telefono));
  }

  function handleChangeTextEmail(email) {
    dispatch(changeEmail(email));
  }

  function handleOnPressRegistrati() {
    dispatch(modificaAccount());
  }

  return (
      <ScrollView style={styles.pageContainer}>
        <View style={styles.cardContainer}>
          <ItemContainer>
            <Title title={'Modifica Account'} style={styles.title}/>
          </ItemContainer>

          <ItemContainer style={styles.labelContainer}>
            <InputLabel text={'Nome'}/>
          </ItemContainer>
          <ItemContainer style={styles.inputContainer}>
            <Input placeholder={'Nome'} style={styles.input}
                   onChangeData={handleChangeTextNome}
                   data={nome}
                   rest={{placeholderTextColor: 'rgb(159,159,159)'}}/>
          </ItemContainer>


          <ItemContainer style={styles.labelContainer}>
            <InputLabel text={'Cognome'}/>
          </ItemContainer>
          <ItemContainer style={styles.inputContainer}>
            <Input placeholder={'Cognome'} style={styles.input}
                   onChangeData={handleChangeTextCognome}
                   data={cognome}
                   rest={{placeholderTextColor: 'rgb(159,159,159)'}}/>
          </ItemContainer>

          <ItemContainer style={styles.labelContainer}>
            <InputLabel text={'Numero di telefono'}/>
          </ItemContainer>
          <ItemContainer style={styles.inputContainer}>
            <Input placeholder={'1234567'} style={styles.input}
                   onChangeData={handleChangeTextTelefono}
                   data={telefono}
                   rest={{placeholderTextColor: 'rgb(159,159,159)'}}
                   keyboardType={'number-pad'}/>
          </ItemContainer>

          <ItemContainer style={styles.labelContainer}>
            <InputLabel text={'Email'}/>
          </ItemContainer>
          <ItemContainer style={styles.inputContainer}>
            <Input placeholder={'email@email.it'} style={styles.input}
                   onChangeData={handleChangeTextEmail}
                   data={email}
                   rest={{placeholderTextColor: 'rgb(159,159,159)'}}
                   keyboardType={'email-address'}/>
          </ItemContainer>

          <ItemContainer style={styles.buttonContainer}>
            <MyButton text={'MODIFICA ACCOUNT'}
                      color={'#0089FF'}
                      pressedColor={'#00539C'} styleText={styles.button}
                      disabled={!(nome != null && nome !== '' && cognome !=
                          null && cognome !== '' && telefono != null &&
                          telefono !== '' && email != null && email !== '')}
                      onPress={handleOnPressRegistrati}
            />
          </ItemContainer>
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
  inputContainer: {
    paddingHorizontal: 12,
    marginBottom: 24,
  },
  labelContainer: {
    paddingHorizontal: 12,
    marginBottom: 5,
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
