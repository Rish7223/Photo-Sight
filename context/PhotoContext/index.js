import { useContext, createContext, useReducer, useEffect } from 'react';
import photoReducer from './reducer';
import {
  fetMyPhotos,
  fetchAllPhotos,
  savePhoto,
  uploadPhoto,
  deleteData,
  fetchPhotosLikes,
  deletePhoto
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

  const useFetchPhotosLikes = () => {
    fetchPhotosLikes(dispatch);
  };

  const useFetchMyPhotos = uid => {
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

  const useDeletePhoto = photoID => {
    deletePhoto(photoID, dispatch);
  };

  useEffect(() => {
    useFetchAllPhotos();
  }, []);

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
        useResetContent,
        useFetchPhotosLikes,
        useDeletePhoto
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotosContextProvider;
