import { REGISTER, SET_LOADING, SET_ERROR, LOGOUT, AUTH } from '../type';
import { auth } from '../../../firebase/firebaseConfig';
import { addUser } from '../../../firebase/addUser';

const message = {
  server: 'Network error!'
};

export const registerUser = async (requestBody, dispatch) => {
  const { email, password, confirmPassword } = requestBody;

  try {
    dispatch({
      type: SET_ERROR,
      payload: null
    });
    dispatch({ type: SET_LOADING, payload: true });
    if (String(confirmPassword) !== String(password)) {
      dispatch({
        type: SET_ERROR,
        payload: {
          message: 'passwords did not match, please retry!',
          type: 'error'
        }
      });
      dispatch({ type: SET_LOADING, payload: false });
      return;
    }
    const response = await auth.createUserWithEmailAndPassword(email, password);
    const userDetails = await addUser(response.user);
    dispatch({ type: REGISTER, payload: userDetails });
    dispatch({
      type: SET_ERROR,
      payload: { message: 'user is successfully created', type: 'success' }
    });
    dispatch({ type: SET_LOADING, payload: false });
  } catch (err) {
    if (err.code === 'auth/email-already-in-use') {
      dispatch({
        type: SET_ERROR,
        payload: {
          message: 'You have already register! please sign-in.',
          type: 'error'
        }
      });
      dispatch({ type: SET_LOADING, payload: false });
      return;
    }
    if (err.code === 'auth/weak-password') {
      dispatch({
        type: SET_ERROR,
        payload: {
          message: err.message,
          type: 'error'
        }
      });
      dispatch({ type: SET_LOADING, payload: false });
      return;
    }
    dispatch({
      type: SET_ERROR,
      payload: { message: message.server, type: 'error' }
    });

    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const logout = dispatch => {
  try {
    auth.signOut();
    dispatch({ type: AUTH, payload: false });
    dispatch({ type: LOGOUT, payload: null });

    dispatch({
      type: SET_ERROR,
      payload: { message: 'user is successfully signed-out!', type: 'success' }
    });
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
      payload: { message: message.server, type: 'error' }
    });

    dispatch({ type: SET_LOADING, payload: false });
  }
};
