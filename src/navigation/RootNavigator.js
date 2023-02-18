import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPageScreen from '../pages/LoginPageScreen';
import RegistrazionePageScreen from '../pages/RegistrazionePageScreen';

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
      <RootStack.Navigator>
        <RootStack.Screen name={'Login'} component={LoginPageScreen}
                          options={{headerTitleAlign: 'center'}}/>
        <RootStack.Screen name={'Registrazione'}
                          component={RegistrazionePageScreen}
                          options={{headerTitleAlign: 'center'}}/>
      </RootStack.Navigator>
  );
}
