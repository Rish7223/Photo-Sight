import { useEffect, useState } from 'react';
import { fireDb, timeStamp } from '../firebase/firebaseConfig';

const collectionRef = fireDb.collection('photos');

const useFirstore = () => {
  const [data, setData] = useState(null);
  const [errorFirstore, setErrorFirstore] = useState(null);
  const [storageLoading, setStorageLoading] = useState(false);

  useEffect(() => {
    if (errorFirstore) {
      setTimeout(() => {
        setErrorFirstore('');
      }, 5000);
    }
  }, [errorFirstore]);

  useEffect(() => {
    if (data) {
      saveData();
    }
  }, [data]);
  const saveData = async () => {
    setStorageLoading(true);
    try {
      if (data) {
        const dataModel = {
          photoURL: data.url,
          photoALT: data.alt,
          photoName: data.name,
          user: data.user,
          postedAt: timeStamp(),
          likes: [],
          comments: []
        };

        await collectionRef.add(dataModel);
        setErrorFirstore({
          type: 'success',
          message: 'Photo is successfully posted!'
        });
        setStorageLoading(false);
      }
    } catch (error) {
      if (error.message) {
        setErrorFirstore({ type: 'error', message: error.message });
        setStorageLoading(false);
      } else {
        setErrorFirstore({ type: 'error', message: 'network error!' });
        setStorageLoading(false);
      }
    }
  };

  return { data, setData, errorFirstore, storageLoading, setErrorFirstore };
};

export default useFirstore;
