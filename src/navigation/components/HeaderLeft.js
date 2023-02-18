import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import {useDrawerStatus} from '@react-navigation/drawer';

export default function HeaderLeft({tintColor: color}) {
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';
  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          navigation.toggleDrawer();
        }}>
          <Entypo name="menu" size={24} color={color}/>
        </TouchableOpacity>

        {navigation.canGoBack() && !isDrawerOpen && (
            <TouchableOpacity style={styles.goBack} onPress={() => {
              navigation.goBack();
            }}>
              <Entypo name="chevron-left" size={24} color={color}/>
            </TouchableOpacity>
        )}

      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  goBack: {
    paddingStart: 10,
  },
});
