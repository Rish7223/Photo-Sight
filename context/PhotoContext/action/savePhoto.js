import { fireDb, timeStamp } from '../../../firebase/firebaseConfig';
import { SET_LOADING, SET_ERROR } from '../types';

const collectionRef = fireDb.collection('photos');

export const savePhoto = async (data, dispatch, fetchAllPhotos) => {
  try {
    if (data) {
      dispatch({ type: SET_LOADING, payload: true });
      const dataModel = {
        photoURL: data.url,
        photoALT: data.alt,
        photoName: data.name,
        user: data.user,
        postedAt: timeStamp(),
        likes: [],
        comments: []
      };

      const response = await collectionRef.add(dataModel);
      await collectionRef.doc(response.id).update({
        photoId: response.id
      });
      dispatch({
        type: SET_ERROR,
        payload: { type: 'success', message: 'Photo is successfully posted!' }
      });
      dispatch({ type: SET_LOADING, payload: false });
      fetchAllPhotos();
    }
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
        payload: { type: 'error', message: 'network error!' }
      });
      dispatch({ type: SET_LOADING, payload: false });
    }
  }
};
