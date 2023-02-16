/*
import {FlatList, StyleSheet, View} from 'react-native';

import RestaurantCard from './src/components/RestaurantCard';
import {Provider} from 'react-redux';

import {store, persistor} from './src/stores';
import {PersistGate} from 'redux-persist/integration/react';
*/
import HomePageScreen from './src/pages/HomePageScreen';

export default function App() {
  return (
      <>
      {/*<Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>*/}
          <HomePageScreen />
        {/*</PersistGate>
      </Provider>*/}
      </>
  );
}
