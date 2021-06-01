import { CardIcon, UserIcon } from '../../UI/UserIcon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { PhotoCard } from './style';
import LikePhotoButton from '../../UI/Like';
import { useUserContext } from '../../../context/UserContext';

const PhotoBox = ({ data }) => {
  const {
    authState: {
      auth: { user }
    }
  } = useUserContext();

  const { likes, photoURL, user: photoUser, photoALT } = data;
  return (
    <PhotoCard>
      <div className="Image">
        <LazyLoadImage
          effect="blur"
          src={photoURL}
          className="img"
          alt={photoALT}
          width="100%"
          height="100%"
          delayTime="500"
        />
      </div>
      <div className="info">
        <div className="user">
          <UserIcon img={photoUser.photoURL} stroke="#eb1461" />
          <section className="user_detail">
            <h3>{photoUser.displayName}</h3>
            <p>3 days ago</p>
          </section>
        </div>
        <div className="actions">
          <p className="likes">
            <span className="number">{likes.length}</span>
            <span>likes</span>
          </p>
          {user && <LikePhotoButton photoData={data} userId={user.UID} />}
          <CardIcon aria-label="more detail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </CardIcon>
        </div>
      </div>
    </PhotoCard>
  );
};

export default PhotoBox;
