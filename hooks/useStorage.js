import { useState, useEffect } from 'react';
import { firStorage } from '../firebase/firebaseConfig';

const useStorage = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [storageLoading, setStorageLoading] = useState(false);

  useEffect(() => {
    setStorageLoading(true);
    if (file) {
      const storageRef = firStorage.ref(file.name);
      storageRef.put(file).on(
        'state_changed',
        snap => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        error => {
          setError(error);
          setStorageLoading(false);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setUrl(url);
          setStorageLoading(false);
        }
      );
    } else {
      setError(null);
      setProgress(0);
      setUrl('');
      setStorageLoading(false);
    }
  }, [file]);

  const deleteData = async () => {
    if (file) {
      setStorageLoading(true);
      const storageRef = firStorage.ref(file.name);
      const result = storageRef.delete();
      console.log(result);
      setFile(null);
      setUrl('');
      setError(null);
      setProgress(0);
      setStorageLoading(false);
    }
  };

  return { url, error, progress, setFile, deleteData, storageLoading };
};

export default useStorage;
