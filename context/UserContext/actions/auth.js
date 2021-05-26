import { auth } from '../../../firebase/firebaseConfig';
import { AUTH, SET_ERROR, AUTH_FAIL, SET_APP_LOADING } from '../type';

const message = {
  server: 'Network error!'
};

export const authentication = async dispatch => {
  try {
    dispatch({ type: SET_APP_LOADING, payload: true });
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: AUTH, payload: user });
        dispatch({ type: SET_APP_LOADING, payload: false });
      } else {
        dispatch({ type: AUTH_FAIL, payload: null });
        dispatch({ type: SET_APP_LOADING, payload: false });
      }
    });
  } catch (err) {
    if (err.message) {
      dispatch({
        type: SET_ERROR,
        payload: { message: err.message, type: 'error' }
      });
      dispatch({ type: SET_APP_LOADING, payload: false });
      return;
    }
    dispatch({
      type: SET_ERROR,
      payload: {
        message: err.message,
        type: { message: message.server, type: 'error' }
      }
    });
    dispatch({ type: SET_APP_LOADING, payload: false });
  }
};
