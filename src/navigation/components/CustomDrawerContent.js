import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {MaterialIcons} from '@expo/vector-icons';
import {logout} from '../../reducers/AppReducer';
import {useDispatch} from 'react-redux';

export default function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
            label="Esci"
            icon={({focused, color, size}) => <MaterialIcons name="exit-to-app"
                                                             color={color}
                                                             size={size}/>}
            onPress={() => dispatch(logout())}
        />
      </DrawerContentScrollView>
  );
}
