import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ItemContainer from '../components/ItemContainer';
import Card from '../components/Card';
import {InputLabel, Title} from '../components/typo';
import Input from '../components/Input';
import MyButton from '../components/MyButton';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  sLoginRegistrazioneLoginFormEmail,
  sLoginRegistrazioneLoginFormPassword,
} from '../selectors';
import {useCallback} from 'react';
import {
  loginFormChangeEmail,
  loginFormChangePassword,
  resetLoginForm,
} from '../reducers/LoginRegistrazioneReducer';
import {appSignIn} from '../actions/AppActions';

export default function LoginPageScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const email = useSelector(sLoginRegistrazioneLoginFormEmail);
  const password = useSelector(sLoginRegistrazioneLoginFormPassword);

  useFocusEffect(useCallback(function() {
    dispatch(resetLoginForm());
  }, []));

  function handleChangeTextEmail(email) {
    dispatch(loginFormChangeEmail(email));
  }

  function handleChangeTextPassword(password) {
    dispatch(loginFormChangePassword(password));
  }

  function handleOnPressLogin() {
    dispatch(appSignIn());
  }

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
            <ItemContainer>
              <MyButton text={'EFFETTA LA LOGIN'}
                        color={'#0089FF'}
                        pressedColor={'#00539C'} styleText={styles.button}
                        disabled={!(email != null && email !== '' && password !=
                            null && password !== '')}
                        onPress={handleOnPressLogin}
              />
            </ItemContainer>
            <ItemContainer>
              <TouchableOpacity
                  style={
                    styles.link.container}
                  onPress={() => navigation.navigate('Registrazione')}
              >
                <Text style={[styles.link.text]}>Non sei registrato? Registrati
                  ora!</Text>
              </TouchableOpacity>
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
  link: {
    container: {
      height: 40,
      alignItems: 'center',
    },
    text: {
      fontSize: 14,
      fontWeight: '500',
      color: 'black',
    },
  },
});
