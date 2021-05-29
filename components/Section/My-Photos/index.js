import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MyPhotoLayout } from './style';

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
            />
          </div>
        ))}
      </div>
    </MyPhotoLayout>
  );
};

export default MyPhotos;
