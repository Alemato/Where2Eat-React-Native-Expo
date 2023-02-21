import {ScrollView, StyleSheet, View} from 'react-native';
import Card from '../components/Card';
import ItemContainer from '../components/ItemContainer';
import {InputLabel, Title} from '../components/typo';
import Input from '../components/Input';
import MyButton from '../components/MyButton';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {
  registratiChangeCognome,
  registratiChangeEmail,
  registratiChangeNome,
  registratiChangePassword,
  registratiChangeTelefono,
  resetRegistratiForm,
} from '../reducers/LoginRegistrazioneReducer';
import {
  sLoginRegistrazioneRegistratiFormCognome,
  sLoginRegistrazioneRegistratiFormEmail,
  sLoginRegistrazioneRegistratiFormNome,
  sLoginRegistrazioneRegistratiFormPassword,
  sLoginRegistrazioneRegistratiFormTelefono,
} from '../selectors';
import {registrazioneServer} from '../actions/LoginRegistrazioneActions';

export default function RegistrazionePageScreen() {
  const dispatch = useDispatch();
  const nome = useSelector(sLoginRegistrazioneRegistratiFormNome);
  const cognome = useSelector(sLoginRegistrazioneRegistratiFormCognome);
  const telefono = useSelector(sLoginRegistrazioneRegistratiFormTelefono);
  const email = useSelector(sLoginRegistrazioneRegistratiFormEmail);
  const password = useSelector(sLoginRegistrazioneRegistratiFormPassword);

  useFocusEffect(useCallback(function() {
    return () => {
      dispatch(resetRegistratiForm());
    };
  }, []));

  function handleChangeTextNome(nome) {
    dispatch(registratiChangeNome(nome));
  }

  function handleChangeTextCognome(cognome) {
    dispatch(registratiChangeCognome(cognome));
  }

  function handleChangeTextTelefono(telefono) {
    dispatch(registratiChangeTelefono(telefono));
  }

  function handleChangeTextEmail(email) {
    dispatch(registratiChangeEmail(email));
  }

  function handleChangeTextPassword(password) {
    dispatch(registratiChangePassword(password));
  }

  function handleOnPressRegistrati() {
    dispatch(registrazioneServer());
  }

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


            <ItemContainer style={styles.labelContainer}>
              <InputLabel text={'Password'}/>
            </ItemContainer>
            <ItemContainer style={styles.inputContainer}>
              <Input placeholder={'Password'} style={styles.input}
                     data={password}
                     onChangeData={handleChangeTextPassword}
                     rest={{
                       secureTextEntry: true,
                       placeholderTextColor: 'rgb(159,159,159)',
                     }}/>
            </ItemContainer>


            <ItemContainer style={styles.buttonContainer}>
              <MyButton text={'REGISTRATI'}
                        color={'#0089FF'}
                        pressedColor={'#00539C'} styleText={styles.button}
                        disabled={!(nome != null && nome !== '' && cognome !=
                            null && cognome !== '' && telefono != null &&
                            telefono !== '' && email != null && email !== '' &&
                            password !=
                            null && password !== '')}
                        onPress={handleOnPressRegistrati}
              />
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
