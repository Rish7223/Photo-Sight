import { firStorage } from '../../../firebase/firebaseConfig';
import { SET_ERROR, SET_PROGRESS, SET_URL } from '../types';

export const uploadPhoto = async (file, dispatch) => {
  try {
    if (file) {
      const storageRef = firStorage.ref(file.name);
      storageRef.put(file).on(
        'state_changed',
        snap => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          dispatch({ type: SET_PROGRESS, payload: percentage });
        },
        error => {
          dispatch({ type: SET_ERROR, payload: error });
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          dispatch({ type: SET_URL, payload: url });
        }
      );
    } else {
      dispatch({ type: SET_ERROR, payload: null });
      dispatch({ type: SET_PROGRESS, payload: 0 });
      dispatch({ type: SET_URL, payload: '' });
    }
  } catch (error) {
    if (error.message) {
      dispatch({
        type: SET_ERROR,
        payload: { type: 'error', message: error.message }
      });
    } else {
      dispatch({
        type: SET_ERROR,
        payload: { type: 'error', message: 'network error!' }
      });
    }
  }
};

export const deleteData = async (file, dispatch) => {
  if (file) {
    const storageRef = firStorage.ref(file.name);
    storageRef && (await storageRef.delete());
    dispatch({ type: SET_ERROR, payload: null });
    dispatch({ type: SET_PROGRESS, payload: 0 });
    dispatch({ type: SET_URL, payload: '' });
  }
};
