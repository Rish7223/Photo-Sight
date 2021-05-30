import { CardIcon, UserIcon } from '../../UI/UserIcon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { PhotoCard } from './style';

const PhotoBox = ({ likes, photo, userName, userImg, postedAt, photoALT }) => {
  return (
    <PhotoCard>
      <div className="Image">
        <LazyLoadImage
          effect="blur"
          src={photo}
          className="img"
          alt={photoALT}
          width="100%"
          height="100%"
          delayTime="500"
        />
      </div>
      <div className="info">
        <div className="user">
          <UserIcon img={userImg} stroke="#eb1461" />
          <section className="user_detail">
            <h3>{userName}</h3>
            <p>{postedAt}</p>
          </section>
        </div>
        <div className="actions">
          <p className="likes">
            <span className="number">{likes}</span>
            <span>likes</span>
          </p>
          <CardIcon aria-label="like photo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </CardIcon>
          <CardIcon aria-label="comment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </CardIcon>
          <CardIcon aria-label="share photo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </CardIcon>
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
