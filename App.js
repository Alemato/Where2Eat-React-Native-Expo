import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import {persistor, store} from './src/stores';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import WhereTwoEatNavigator from './src/navigation/WhereTwoEatNavigator';
import {StatusBar} from 'react-native';

export default function App() {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            {/*<RootNavigator/> */}
            <WhereTwoEatNavigator/>
          </NavigationContainer>
        </PersistGate>
        <StatusBar style="auto"/>
      </Provider>
  );
}
