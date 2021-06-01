import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MyPhotoLayout } from './style';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect } from 'react';
import { usePhotoContext } from '../../../context/PhotoContext';
import { useUserContext } from '../../../context/UserContext';
import moment from 'moment';

const MyPhotos = () => {
  const {
    authState: {
      auth: { user }
    }
  } = useUserContext();
  const {
    photoState: { myPhotoList, photoList },
    useFetchMyPhotos,
    useDeletePhoto
  } = usePhotoContext();

  useEffect(() => {
    if (user && photoList.length > 0) {
      useFetchMyPhotos(user.UID);
    }
  }, [user, photoList]);

  return (
    <MyPhotoLayout>
      <div className="content">
        {myPhotoList.map(item => (
          <div key={item.photoURL} className="photoBox">
            <LazyLoadImage
              src={item.photoURL}
              alt={item.photoALT}
              className="photo"
              effect="blur"
              height="100%"
              width="100%"
            />
            <div className="info">
              <section>
                <p>Total likes: {item.likes.length}</p>
                <p>Posted at: {moment(item.postedAt.toDate()).fromNow()}</p>
              </section>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={() => {
                  useDeletePhoto(item.photoId);
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </MyPhotoLayout>
  );
};

export default MyPhotos;
