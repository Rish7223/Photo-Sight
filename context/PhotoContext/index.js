import { useContext, createContext, useReducer } from 'react';
import photoReducer from './reducer';
import {
  fetMyPhotos,
  fetchAllPhotos,
  savePhoto,
  uploadPhoto,
  deleteData
} from './action';
import { SET_ERROR, SET_PROGRESS, SET_URL } from './types';

const PhotoContext = createContext();

export const usePhotoContext = () => useContext(PhotoContext);

const initialState = {
  photoList: [],
  myPhotoList: [],
  photosError: null,
  loadingPhotos: false,
  uploaded: {
    url: '',
    progress: 0
  }
};

const PhotosContextProvider = ({ children }) => {
  const [photoState, dispatch] = useReducer(photoReducer, initialState);

  const useFetchAllPhotos = () => {
    fetchAllPhotos(dispatch);
  };

  const useFetchMyPhotos = uid => {
    useFetchAllPhotos();
    fetMyPhotos(photoState.photoList, uid, dispatch);
  };

  const useSavePhoto = data => {
    savePhoto(data, dispatch, useFetchAllPhotos);
  };

  const useUploadPhoto = file => {
    uploadPhoto(file, dispatch);
  };

  const useDeleteFile = file => {
    deleteData(file, dispatch);
  };

  const useResetContent = () => {
    dispatch({ type: SET_URL, payload: '' });
    dispatch({ type: SET_PROGRESS, payload: 0 });
  };

  const useRemoveError = () => {
    dispatch({ type: SET_ERROR, payload: null });
  };

  return (
    <PhotoContext.Provider
      value={{
        photoState,
        useSavePhoto,
        useUploadPhoto,
        useFetchAllPhotos,
        useFetchMyPhotos,
        useRemoveError,
        useDeleteFile,
        useResetContent
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotosContextProvider;
