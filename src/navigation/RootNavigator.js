import LoginRegistrazioneNavigator from './LoginRegistrazioneNavigator';
import WhereTwoEatNavigator from './WhereTwoEatNavigator';
import {useSelector} from 'react-redux';
import {sAppIsLoggedIn} from '../selectors';

export default function RootNavigator() {
  const isLoggedIn = useSelector(sAppIsLoggedIn);
  return (
      <>
        {!isLoggedIn && <LoginRegistrazioneNavigator/>}
        {isLoggedIn && <WhereTwoEatNavigator/>}
      </>
  );
}
