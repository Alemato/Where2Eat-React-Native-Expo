import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import RicercaPageScreen from '../pages/RicercaPageScreen';
import HomePageScreen from '../pages/HomePageScreen';

const Tab = createBottomTabNavigator();
const TabBarIcon = ({name, color, size}) => <MaterialIcons name={name}
                                                           size={size}
                                                           color={color}/>;
const screenOptions = {
  headerShown: false,
  tabBarLabelStyle: {
    fontWeight: 'bold',
  },
  lazy: false,
  unmountOnBlur: false,
  tabBarIcon: (props) => {
    console.log(props);
    return null;
  },
};

export default function TabNavigator({navigation, route}) {
  return (
      <Tab.Navigator screenOptions={screenOptions}
          // tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tab.Screen name={'HomePageTab'}
                    component={HomePageScreen}
                    options={{
                      title: 'Home Page',
                      icon: 'home',
                      tabBarIcon: (props) =>
                          <TabBarIcon {...props} name={'home'}/>,
                    }}
        />
        <Tab.Screen name={'RicercaPage'}
                    component={RicercaPageScreen}
                    options={{
                      title: 'Ricerca Ristorante', icon: 'search',
                      tabBarIcon: (props) =>
                          <TabBarIcon {...props} name={'search'}/>,
                    }}
        />
      </Tab.Navigator>
  );
}
