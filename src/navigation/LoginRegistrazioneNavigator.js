import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPageScreen from '../pages/LoginPageScreen';
import RegistrazionePageScreen from '../pages/RegistrazionePageScreen';

const LoginRegistrazioneStack = createNativeStackNavigator();

export default function LoginRegistrazioneNavigator() {
  return (
      <LoginRegistrazioneStack.Navigator>
        <LoginRegistrazioneStack.Screen name={'Login'}
                                        component={LoginPageScreen}
                                        options={{headerTitleAlign: 'center'}}/>
        <LoginRegistrazioneStack.Screen name={'Registrazione'}
                                        component={RegistrazionePageScreen}
                                        options={{headerTitleAlign: 'center'}}/>
      </LoginRegistrazioneStack.Navigator>
  );
}
