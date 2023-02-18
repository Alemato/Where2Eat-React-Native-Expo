import {sAppLoginFormEmail, sAppLoginFormPassword} from '../selectors';
import {loginSuccess} from '../reducers/AppReducer';

export function appSignIn() {
  return function(dispatch, getState) {
    const state = getState();

    const email = sAppLoginFormEmail(state);
    const password = sAppLoginFormPassword(state);

    if (email === 'mario') {
      dispatch(loginSuccess());
    } else {

    }

  };
}
