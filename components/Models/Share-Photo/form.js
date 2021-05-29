import { LazyLoadImage } from 'react-lazy-load-image-component';
import Alert from '../../UI/Alert';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Disabled = Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #fffa;
    z-index: 10;
`;

const SharePhotoForm = ({ options }) => {
  const {
    auth,
    setData,
    setError,
    photoName,
    setPhotoName,
    setAlt,
    alt,
    deleteContent,
    errorFirstore,
    url,
    setErrorFirstore
  } = options;

  const onsubmit = event => {
    event.preventDefault();
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
  return (
    <form className="add_detail" onSubmit={onsubmit}>
      {url == '' && <Disabled />}
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
          <div className="imgBox">
            <LazyLoadImage src={url} alt="preview" className="previewImg" />
          </div>
        ) : (
          <p>Preview</p>
        )}
      </section>
      <section className="actions">
        <button className="cancel" onClick={deleteContent} type="button">
          cancel
        </button>
        <button className="save" type="submit">
          save
        </button>
      </section>
      {errorFirstore && (
        <Alert
          type={errorFirstore.type}
          message={errorFirstore.message}
          closeAlert={() => {
            setErrorFirstore(null);
          }}
        />
      )}
    </form>
  );
};

SharePhotoForm.propTypes = {
  options: PropTypes.shape({
    photoName: PropTypes.string.isRequired,
    setPhotoName: PropTypes.func.isRequired,
    setAlt: PropTypes.func.isRequired,
    alt: PropTypes.string.isRequired,
    deleteContent: PropTypes.func.isRequired,
    errorFirstore: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
    setErrorFirstore: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    setData: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired
  })
};

export default SharePhotoForm;
