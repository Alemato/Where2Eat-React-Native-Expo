import {sAppLoginFormEmail, sAppLoginFormPassword} from '../selectors';
import {
  loginFailure,
  loginSuccess,
  resetLoginForm,
} from '../reducers/AppReducer';

export function appSignIn() {
  return function(dispatch, getState) {
    const state = getState();

    const email = sAppLoginFormEmail(state);
    const password = sAppLoginFormPassword(state);

    if (email === 'mario') {
      dispatch(loginSuccess());
      dispatch(resetLoginForm());
    } else {
      dispatch(loginFailure());
      dispatch(resetLoginForm());
    }

  };
}
