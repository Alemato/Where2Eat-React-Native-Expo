import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestaurantPageScreen from '../pages/RestaurantPageScreen';
import HomePageScreen from '../pages/HomePageScreen';

const HomeStack = createNativeStackNavigator();
const screenOptions = {
  headerShown: true,
};
export default function HomeNavigator() {
  return (
      <HomeStack.Navigator screenOptions={screenOptions}
                           initialRouteName="Home">
        <HomeStack.Group>
          <HomeStack.Screen name="Home" component={HomePageScreen}/>
          <HomeStack.Screen name="RestaurantPage"
                            component={RestaurantPageScreen}/>
        </HomeStack.Group>
      </HomeStack.Navigator>
  );
}
