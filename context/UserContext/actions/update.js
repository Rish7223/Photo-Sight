import { findUser } from '../../../firebase/findUser';
import { fireDb, timeStamp } from '../../../firebase/firebaseConfig';
import { SET_LOADING, SET_ERROR } from '../type';
import { saveUser } from './auth';

const collectionRef = fireDb.collection('users');

export const updateUserProfile = async (body, user, dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const { id, data } = await findUser(user.UID);
    await collectionRef.doc(id).update({
      displayName: body.name,
      description: body.description,
      lastUpdate: timeStamp()
    });
    saveUser({ uid: data.UID }, dispatch);
    dispatch({
      type: SET_ERROR,
      payload: { message: 'user is successfully updated', type: 'success' }
    });
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
        type: { message: 'network error!', type: 'error' }
      }
    });
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export default updateUserProfile;
