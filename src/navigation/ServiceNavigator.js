import {createNavigationContainerRef} from '@react-navigation/native';

export const serviceNavigator = createNavigationContainerRef();

export function navigate(name, params) {
  if (serviceNavigator.isReady()) {
    serviceNavigator.navigate(name, params);
  }
}
