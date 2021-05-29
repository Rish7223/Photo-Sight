import {
  SET_ALL_PHOTOS,
  SET_MY_PHOTOS,
  SET_ERROR,
  SET_LOADING,
  SET_PROGRESS,
  SET_URL
} from '../types';

const photoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALL_PHOTOS:
      return {
        ...state,
        photoList: payload
      };
    case SET_MY_PHOTOS:
      return {
        ...state,
        myPhotoList: payload
      };
    case SET_LOADING:
      return {
        ...state,
        loadingPhotos: payload
      };
    case SET_ERROR:
      return {
        ...state,
        photosError: payload
      };
    case SET_URL:
      return {
        ...state,
        uploaded: {
          ...state.uploaded,
          url: payload
        }
      };
    case SET_PROGRESS:
      return {
        ...state,
        uploaded: {
          ...state.uploaded,
          progress: payload
        }
      };
    default:
      return state;
  }
};

export default photoReducer;
