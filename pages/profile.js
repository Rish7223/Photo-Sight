import AppLayout from '../components/App-Layout';
import { HomeLayout } from '../components/Home-Layout';
import MainNavbar from '../components/Section/Navbar/Navbar';
import { useUserContext } from '../context/UserContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import UserCard from '../components/Block/User_Card';
import useFetchImages from '../hooks/useFetchImages';
import MyPhotos from '../components/Section/My-Photos';

export default function MyProfile() {
  const {
    authState: {
      isAuthenticate,
      loading,
      auth: { user }
    },
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
  }, [isAuthenticate, loading]);

  const { photoList, myPhotoList, fetchMyPhoto } = useFetchImages({
    isAuthenticate
  });

  useEffect(() => {
    if (user && photoList !== 0) {
      fetchMyPhoto(user.UID);
    }
  }, [photoList, user]);

  return (
    <AppLayout page="profile">
      <HomeLayout>
        <MainNavbar />
        {user && (
          <div
            className="content"
            style={{
              width: '100%',
              margin: '3rem auto',
              display: 'flex'
            }}
          >
            <UserCard userName={user.displayName} userImage={user.photoURL} />
            <MyPhotos photoList={myPhotoList} />
          </div>
        )}
      </HomeLayout>
    </AppLayout>
  );
}
