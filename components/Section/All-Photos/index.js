import PhotoBox from '../../Block/Photo_card';
import { GridLayout } from '../../Grid-Layout/style';

const AllPhotos = ({ loadingPhotos, photoList }) => {
  return (
    <GridLayout>
      {loadingPhotos ? (
        <p>Fetching photos</p>
      ) : (
        photoList.map(photoData => {
          const { photoALT, photoURL, user, likes } = photoData;
          return (
            <PhotoBox
              photoALT={photoALT}
              photo={photoURL}
              userImg={user.photoURL}
              postedAt="3 days ago"
              likes={likes.length}
              userName={user.displayName}
              key={photoURL}
            />
          );
        })
      )}
    </GridLayout>
  );
};

export default AllPhotos;
