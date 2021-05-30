import AppLayout from '../components/App-Layout';
import MainNavbar from '../components/Section/Navbar/Navbar';
import { HomeLayout } from '../components/Home-Layout';
import { useUserContext } from '../context/UserContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePhotoContext } from '../context/PhotoContext';
import AllPhotos from '../components/Section/All-Photos';

export default function Home() {
  const {
    authState: { isAuthenticate },
    dispatchAuthenticate
  } = useUserContext();

  const {
    photoState: { photoList, loadingPhotos },
    useFetchAllPhotos
  } = usePhotoContext();

  const router = useRouter();

  useEffect(() => {
    dispatchAuthenticate();
  }, [isAuthenticate]);

  useEffect(() => {
    if (isAuthenticate !== null) {
      !isAuthenticate && router.push('/');
    }
  }, [isAuthenticate]);

  useEffect(() => {
    isAuthenticate && useFetchAllPhotos();
  }, [isAuthenticate]);

  return (
    <AppLayout>
      <HomeLayout>
        <MainNavbar />
        <AllPhotos loadingPhotos={loadingPhotos} photoList={photoList} />
      </HomeLayout>
    </AppLayout>
  );
}
