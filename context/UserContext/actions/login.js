import { addSocialUser } from '../../../firebase/addUser';
import { findUser } from '../../../firebase/findUser';
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
    const result = await findUser(response.user.uid);
    dispatch({ type: LOGIN, payload: result });
    dispatch({ type: SET_LOADING, payload: false });
  } catch (err) {
    if (
      err.code === 'auth/user-not-found' ||
      err.code === 'auth/wrong-password'
    ) {
      dispatch({
        type: SET_ERROR,
        payload: {
          message: 'Authentication failed! Invalid password',
          type: 'error'
        }
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
    const userDetail = await addSocialUser(response.user);
    dispatch({ type: SOCIAL_LOGIN, payload: userDetail });
  } catch (err) {
    if (err.code === 'auth/popup-closed-by-user') {
      dispatch({
        type: SET_ERROR,
        payload: { message: 'popup closed by user!', type: 'info' }
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
