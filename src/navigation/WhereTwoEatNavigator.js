import {createDrawerNavigator} from '@react-navigation/drawer';
import {MaterialIcons} from '@expo/vector-icons';
import CustomDrawerContent from './components/CustomDrawerContent';
import PrenotazioniPageScreen from '../pages/PrenotazioniPageScreen';
import DatiUtentePageScreen from '../pages/DatiUtentePageScreen';
import TabNavigator from './TabNavigator';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import RestaurantPageScreen from '../pages/RestaurantPageScreen';
import HeaderLeft from './components/HeaderLeft';

const AppDrawer = createDrawerNavigator();

const screenOptions = {
  headerShown: true,
  drawerType: 'front',
  drawerHideStatusBarOnOpen: false,
};

const screenOptionsGroup = {
  headerLeft: (props) => <HeaderLeft {...props} />,
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
      <AppDrawer.Navigator screenOptions={screenOptions}
                           drawerContent={CustomDrawerContent}
                           backBehavior="history">
        <AppDrawer.Group screenOptions={screenOptionsGroup}>
          <AppDrawer.Screen name="Home"
                            component={TabNavigator}
                            options={({route}) => ({
                              headerTitle: getHeaderTitle(route),
                              drawerIcon: styleHome.drawerIcon,
                              headerTitleAlign: 'center',
                            })}/>
          <AppDrawer.Screen name="Prenotazioni"
                            component={PrenotazioniPageScreen}
                            options={{
                              headerTitleAlign: 'center',
                              drawerIcon: (props) => <DrawerIcon {...props}
                                                                 name="note-add"/>,
                            }}/>
          <AppDrawer.Screen name="DatiUtente" component={DatiUtentePageScreen}
                            options={{
                              headerTitleAlign: 'center',
                              drawerIcon: (props) => <DrawerIcon {...props}
                                                                 name="supervisor-account"/>,
                            }}/>
          <AppDrawer.Screen name="RestaurantPage"
                            component={RestaurantPageScreen}
                            options={{
                              headerTitleAlign: 'center',
                              drawerItemStyle: {height: 0},
                            }}/>
        </AppDrawer.Group>
      </AppDrawer.Navigator>
  );
}

