import { StyledSharePhoto } from './style';
import { Heading } from '../../UI/Typography';
import { useEffect, useState } from 'react';
import useStorage from '../../../hooks/useStorage';
import ProgressBar from '../../UI/Progress-Bar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import useFirstore from '../../../hooks/useFirstore';
import { useUserContext } from '../../../context/UserContext';
import Alert from '../../UI/Alert';

const SharePhoto = () => {
  const {
    authState: { auth }
  } = useUserContext();
  const { url, setFile, progress, deleteData, storageLoading } = useStorage();
  const { setData, errorFirstore } = useFirstore();
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

  const onsubmit = () => {
    if (auth.user && url !== '') {
      const fileData = {
        url: url,
        alt: alt !== '' && alt,
        name: photoName,
        user: auth.user
      };
      setData(fileData);
    } else {
      setError({ message: 'please select a file!' });
    }
  };

  const deleteContent = () => {
    deleteData();
    resetContent();
  };

  const StorageLoading = () => {
    return (
      <div
        style={{
          height: '100%',
          weight: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#2b2b2b',
          position: 'absolute',
          top: '0',
          left: '0'
        }}
      >
        loading
      </div>
    );
  };

  return (
    <StyledSharePhoto>
      {storageLoading && <StorageLoading />}
      <Heading color="#2b2b2baa" fontSize="2rem">
        Share Photo
      </Heading>
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
      <form className="add_detail">
        <section className="add_detail-data">
          <label htmlFor="name">File Name</label>
          <input
            id="name"
            type="text"
            value={photoName}
            placeholder="Edit file name..."
            className="nameInput"
            onChange={e => setPhotoName(e.target.value)}
          />
        </section>
        <section className="add_detail-data">
          <label htmlFor="Alt">Alt value</label>
          <input
            id="Alt"
            type="text"
            value={alt}
            placeholder="Edit Alt value..."
            className="nameInput"
            onChange={e => setAlt(e.target.value)}
          />
        </section>
        <section className="preview">
          {url !== '' ? (
            <LazyLoadImage src={url} alt="demo" className="previewImg" />
          ) : (
            <p>Preview</p>
          )}
        </section>
        <section className="actions">
          <button className="cancel" onClick={deleteContent} type="button">
            cancel
          </button>
          <button className="save" type="button" onClick={onsubmit}>
            save
          </button>
        </section>
        {errorFirstore && errorFirstore.message}
      </form>
    </StyledSharePhoto>
  );
};

export default SharePhoto;
