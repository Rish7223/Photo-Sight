import firebase, { auth } from '../../../firebase/firebaseConfig';
import { LOGIN, SOCIAL_LOGIN, SET_LOADING, SET_ERROR } from '../type';

const message = {
  server: 'Network error!'
};

export const loginUser = async (requestBody, dispatch) => {
  const { email, password } = requestBody;
  try {
    dispatch({
      type: SET_ERROR,
      payload: null
    });
    dispatch({ type: SET_LOADING, payload: true });
    const response = await auth.signInWithEmailAndPassword(email, password);
    dispatch({ type: LOGIN, payload: response.user });
    dispatch({ type: SET_LOADING, payload: false });
  } catch (err) {
    if (err.message) {
      dispatch({
        type: SET_ERROR,
        payload: { message: err.message, type: 'error' }
      });
      dispatch({ type: SET_LOADING, payload: false });
      return;
    }
    dispatch({
      type: SET_ERROR,
      payload: {
        message: err.message,
        type: { message: message.server, type: 'error' }
      }
    });
    dispatch({ type: SET_LOADING, payload: false });
  }
};

//   social authentication
export const socialLogin = async dispatch => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  try {
    dispatch({
      type: SET_ERROR,
      payload: null
    });
    const response = await auth.signInWithPopup(googleProvider);
    dispatch({ type: SOCIAL_LOGIN, payload: response.user });
  } catch (err) {
    if (err.message) {
      dispatch({
        type: SET_ERROR,
        payload: { message: err.message, type: 'error' }
      });
      dispatch({ type: SET_LOADING, payload: false });
      return;
    }
    dispatch({
      type: SET_ERROR,
      payload: {
        message: err.message,
        type: { message: message.server, type: 'error' }
      }
    });
    dispatch({ type: SET_LOADING, payload: false });
  }
};
