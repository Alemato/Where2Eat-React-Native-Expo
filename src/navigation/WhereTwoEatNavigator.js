import {createDrawerNavigator} from '@react-navigation/drawer';
import {MaterialIcons} from '@expo/vector-icons';
import CustomDrawerContent from './components/CustomDrawerContent';
import PrenotazioniPageScreen from '../pages/PrenotazioniPageScreen';
import DatiUtentePageScreen from '../pages/DatiUtentePageScreen';
import TabNavigator from './TabNavigator';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import RestaurantPageScreen from '../pages/RestaurantPageScreen';

const AppStack = createDrawerNavigator();

const screenOptions = {
  headerShown: true,
  drawerType: 'front',
  drawerHideStatusBarOnOpen: false,
};

const styleHome = {
  drawerIcon: ({focused, size, color}) => (
      <MaterialIcons name="home" size={size} color={color}/>),
};
const DrawerIcon = ({name, color, size}) => <MaterialIcons name={name}
                                                           size={size}
                                                           color={color}/>;

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'HomePageTab':
      return 'Home';
    case 'RicercaPage':
      return 'Ricerca Ristorante';
  }
}

export default function WhereTwoEatNavigator({route}) {
  return (
      <AppStack.Navigator screenOptions={screenOptions}
                          drawerContent={CustomDrawerContent}>
        <AppStack.Screen name="Home"
                         component={TabNavigator}
                         options={({route}) => ({
                           headerTitle: getHeaderTitle(route),
                           drawerIcon: styleHome.drawerIcon,
                         })}/>
        <AppStack.Screen name="Prenotazioni"
                         component={PrenotazioniPageScreen}
                         options={{
                           drawerIcon: (props) => <DrawerIcon {...props}
                                                              name="note-add"/>,
                         }}/>
        <AppStack.Screen name="DatiUtente" component={DatiUtentePageScreen}
                         options={{
                           drawerIcon: (props) => <DrawerIcon {...props}
                                                              name="supervisor-account"/>,
                         }}/>
        <AppStack.Screen name="RestaurantPage"
                         component={RestaurantPageScreen}
                         options={{
                           drawerItemStyle: {height: 0},
                         }}/>
      </AppStack.Navigator>
  );
}

