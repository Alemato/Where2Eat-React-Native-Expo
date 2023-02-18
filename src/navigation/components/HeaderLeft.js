import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDrawerStatus} from '@react-navigation/drawer';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function HeaderLeft({tintColor: color}) {
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus() === 'open';
  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          navigation.toggleDrawer();
        }}>
          <MaterialCommunityIcons name="menu" size={24} color={color}/>
        </TouchableOpacity>

        {navigation.canGoBack() && !isDrawerOpen && (
            <TouchableOpacity style={styles.goBack} onPress={() => {
              navigation.goBack();
            }}>
              <MaterialCommunityIcons name="arrow-left" size={24}
                                      color={color}/>
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
