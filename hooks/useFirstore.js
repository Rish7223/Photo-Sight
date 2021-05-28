import { useEffect, useState } from 'react';
import { fireDb } from '../firebase/firebaseConfig';

const collectionRef = fireDb.collection('photos');

const useFirstore = () => {
  const [data, setData] = useState(null);
  const [errorFirstore, setErrorFirstore] = useState(null);

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
    try {
      if (data) {
        const dataModel = {
          photoURL: data.url,
          photoALT: data.alt,
          photoName: data.name,
          user: data.user,
          likes: [],
          comments: []
        };

        const result = await collectionRef.add(dataModel);
        console.log(result.id);
        setErrorFirstore({
          type: 'success',
          message: 'Photo is successfully posted!'
        });
      }
    } catch (error) {
      if (error.message) {
        setErrorFirstore({ type: 'error', message: error.message });
      } else {
        setErrorFirstore({ type: 'error', message: 'network error!' });
      }
    }
  };

  return { data, setData, errorFirstore };
};

export default useFirstore;
