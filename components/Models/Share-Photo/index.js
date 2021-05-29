import { FormLayout, StyledSharePhoto } from './style';
import { Heading } from '../../UI/Typography';
import { useEffect, useState } from 'react';
import useStorage from '../../../hooks/useStorage';
import ProgressBar from '../../UI/Progress-Bar';
import useFirstore from '../../../hooks/useFirstore';
import { useUserContext } from '../../../context/UserContext';
import ProcessLoading from '../../Section/Process-Loading';
import SharePhotoForm from './form';

const SharePhoto = ({ closeModel }) => {
  const {
    authState: { auth }
  } = useUserContext();
  const { url, setFile, progress, deleteData } = useStorage();
  const { setData, errorFirstore, storageLoading, setErrorFirstore } =
    useFirstore();
  const [photo, setPhoto] = useState(null);
  const [photoName, setPhotoName] = useState('');
  const [error, setError] = useState(null);
  const [alt, setAlt] = useState('');

  useEffect(() => {
    if (errorFirstore) {
      errorFirstore.type === 'success' && resetContent();
    }
  }, [errorFirstore]);

  const handelPhoto = event => {
    if (!photo) {
      const selected = event.target.files[0];
      const types = ['image/png', 'image/jpg', 'image/jpeg'];
      if (selected && types.includes(selected.type)) {
        setPhoto(selected);
        setError(null);
        setPhotoName(selected.name);
        setFile(selected);
      } else {
        setError({ message: 'please choose the image file only (png, jpg)!' });
        setPhoto(null);
      }
    } else {
      setError({ message: 'one photo is already selected!' });
    }
  };
  const resetContent = () => {
    setPhoto(null);
    setFile(null);
    setAlt('');
    setError(null);
    setPhotoName('');
    setData(null);
  };

  const deleteContent = () => {
    deleteData();
    resetContent();
  };

  return (
    <FormLayout>
      <StyledSharePhoto>
        {storageLoading && <ProcessLoading />}
        <div className="head">
          <Heading color="#2b2b2baa" fontSize="2rem">
            Share Photo
          </Heading>
          <button onClick={closeModel}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="select_photo">
          <label htmlFor="photo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              viewBox="0 0 20 20"
              fill="#eb1461"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            <p>{!photoName ? 'select a photo' : photoName}</p>
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            className="photoInput"
            onChange={handelPhoto}
          />
          <ProgressBar progress={progress} />
          {error && error.message}
        </div>
        <SharePhotoForm
          options={{
            photoName,
            setPhotoName,
            setAlt,
            alt,
            deleteContent,
            errorFirstore,
            url,
            onsubmit,
            setErrorFirstore,
            auth,
            setData,
            setError
          }}
        />
      </StyledSharePhoto>
    </FormLayout>
  );
};

export default SharePhoto;
