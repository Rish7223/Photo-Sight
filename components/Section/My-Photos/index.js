import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MyPhotoLayout } from './style';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect } from 'react';
import { usePhotoContext } from '../../../context/PhotoContext';
import { useUserContext } from '../../../context/UserContext';

const MyPhotos = () => {
  const {
    authState: {
      auth: { user }
    }
  } = useUserContext();
  const {
    photoState: { myPhotoList, photoList },
    useFetchMyPhotos
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
          </div>
        ))}
      </div>
    </MyPhotoLayout>
  );
};

export default MyPhotos;
