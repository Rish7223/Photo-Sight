import { useState, useEffect } from 'react';
import { fireDb } from '../firebase/firebaseConfig';

const collectionRef = fireDb.collection('photos');

const useFetchImages = ({ isAuthenticate }) => {
  const [photoList, setPhotoList] = useState([]);
  const [myPhotoList, setMyPhotoList] = useState([]);
  const [fetchPhotoLoading, setFetchPhotoLoading] = useState(false);
  const [fetchPhotoError, setFetchPhotoError] = useState(null);
  const fetchPhoto = async () => {
    try {
      setFetchPhotoLoading(true);
      let list = [];
      const snapshot = await collectionRef.get();
      snapshot.forEach(photo => list.push(photo.data()));
      setPhotoList(list);
      setFetchPhotoLoading(false);
    } catch (error) {
      if (error.message) {
        setFetchPhotoError({ type: 'error', message: error.message });
        setFetchPhotoLoading(false);
      }
      setFetchPhotoError({
        type: 'error',
        message:
          'firebase connectivity fail! please check your network connection'
      });
      setFetchPhotoLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticate) {
      fetchPhoto();
    }
  }, [isAuthenticate]);

  const fetchMyPhoto = id => {
    setFetchPhotoLoading(true);
    let list = photoList.filter(item => item.user.UID === id);
    setMyPhotoList(list);
    setFetchPhotoLoading(false);
  };

  return {
    photoList,
    setFetchPhotoError,
    fetchPhotoLoading,
    fetchPhotoError,
    myPhotoList,
    fetchMyPhoto
  };
};

export default useFetchImages;
