import { useState, useEffect } from 'react';
import { firStorage } from '../firebase/firebaseConfig';

const useStorage = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
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
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setUrl(url);
        }
      );
    } else {
      setError(null);
      setProgress(0);
      setUrl('');
    }
  }, [file]);

  const deleteData = async () => {
    if (file) {
      const storageRef = firStorage.ref(file.name);
      await storageRef.delete();
      setFile(null);
      setUrl('');
      setError(null);
      setProgress(0);
    }
  };

  return { url, error, progress, setFile, deleteData };
};

export default useStorage;
