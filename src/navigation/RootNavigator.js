import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePageScreen from '../pages/HomePageScreen';

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
      <RootStack.Navigator>
        <RootStack.Screen name={'Login'} component={HomePageScreen}/>
        <RootStack.Screen name={'Registrazione'} component={HomePageScreen}/>
      </RootStack.Navigator>
  );
}
