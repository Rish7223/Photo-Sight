import { fireDb } from '../../../firebase/firebaseConfig';
import {
  SET_LOADING,
  SET_ALL_PHOTOS,
  SET_MY_PHOTOS,
  SET_ERROR
} from '../types';

const collectionRef = fireDb.collection('photos');
export const fetchAllPhotos = async dispatch => {
  try {
    let list = [];
    dispatch({ type: SET_LOADING, payload: true });
    const snapshot = await collectionRef.get();
    snapshot.forEach(photo => list.push(photo.data()));
    dispatch({ type: SET_ALL_PHOTOS, payload: list });
    dispatch({ type: SET_LOADING, payload: false });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: SET_ERROR,
        payload: { type: 'error', message: error.message }
      });
      dispatch({ type: SET_LOADING, payload: false });
    } else {
      dispatch({
        type: SET_ERROR,
        payload: { type: 'error', message: 'network error' }
      });
      dispatch({ type: SET_LOADING, payload: false });
    }
  }
};

export const fetMyPhotos = (allPhotos, id, dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let list = allPhotos.filter(item => item.user.UID === id);
  dispatch({ type: SET_MY_PHOTOS, payload: list });
  dispatch({ type: SET_LOADING, payload: false });
};

export const fetchPhotosLikes = async dispatch => {
  try {
    let list = [];
    const snapshot = await collectionRef.get();
    snapshot.forEach(photo => list.push(photo.data()));
    dispatch({ type: SET_ALL_PHOTOS, payload: list });
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

export const deletePhoto = async (photoID, dispatch) => {
  try {
    const myPhotosRef = fireDb.collection('photos').doc(photoID);
    await myPhotosRef.delete();
    dispatch({
      type: SET_ERROR,
      payload: { type: 'success', message: 'photo is deleted successfully!' }
    });
    fetchPhotosLikes(dispatch);
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
