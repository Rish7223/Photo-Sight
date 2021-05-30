import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MyPhotoLayout } from './style';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyPhotos = ({ photoList }) => {
  return (
    <MyPhotoLayout>
      <div className="content">
        {photoList.map(item => (
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
