import Image from 'next/image';
import { useEffect } from 'react';
import { usePhotoContext } from '../../../context/PhotoContext';
import { useUserContext } from '../../../context/UserContext';
import PhotoBox from '../../Block/Photo_card';
import { GridLayout } from '../../Grid-Layout/style';

const AllPhotos = () => {
  const {
    authState: { isAuthenticate }
  } = useUserContext();

  const {
    photoState: { photoList, loadingPhotos },
    useFetchAllPhotos
  } = usePhotoContext();

  useEffect(() => {
    isAuthenticate && useFetchAllPhotos();
  }, [isAuthenticate]);

  return (
    <GridLayout>
      {loadingPhotos ? (
        <Image
          src="/Images/three-dots.svg"
          color="#2b2b2b"
          width={50}
          height={50}
          layout="fixed"
        />
      ) : (
        photoList.map(photoData => (
          <PhotoBox key={photoData.photoId} data={photoData} />
        ))
      )}
    </GridLayout>
  );
};

export default AllPhotos;
