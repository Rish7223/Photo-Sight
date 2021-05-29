import AppLayout from '../components/App-Layout';
import MainNavbar from '../components/Section/Navbar/Navbar';
import PhotoBox from '../components/Block/Photo_card';
import { HomeLayout } from '../components/Home-Layout';
import { useUserContext } from '../context/UserContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GridLayout } from '../components/Grid-Layout/style';
import useFetchImages from '../hooks/useFetchImages';

export default function Home() {
  const {
    authState: { isAuthenticate },
    dispatchAuthenticate
  } = useUserContext();

  const router = useRouter();

  useEffect(() => {
    dispatchAuthenticate();
  }, [isAuthenticate]);

  useEffect(() => {
    if (isAuthenticate !== null) {
      !isAuthenticate && router.push('/');
    }
  }, [isAuthenticate]);

  const { photoList, fetchPhotoLoading } = useFetchImages({
    isAuthenticate
  });

  return (
    <AppLayout>
      <HomeLayout>
        <MainNavbar />
        <GridLayout>
          {fetchPhotoLoading ? (
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
      </HomeLayout>
    </AppLayout>
  );
}
