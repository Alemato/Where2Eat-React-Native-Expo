import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {persistor, store} from './src/stores';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import LoadingContent from './src/components/LoadingContent';
import {serviceNavigator} from './src/navigation/ServiceNavigator';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LoadingContent>
            <NavigationContainer ref={serviceNavigator}>
              <RootNavigator/>
            </NavigationContainer>
          </LoadingContent>
        </PersistGate>
        <StatusBar style="auto" backgroundColor="#ffff" animated={true}
                   barStyle="dark-content"/>
      </Provider>
  );
}
