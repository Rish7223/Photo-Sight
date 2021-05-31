import AppLayout from '../components/App-Layout';
import MainNavbar from '../components/Section/Navbar/Navbar';
import { HomeLayout } from '../components/Home-Layout';
import { useUserContext } from '../context/UserContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AllPhotos from '../components/Section/All-Photos';

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

  return (
    <AppLayout>
      <HomeLayout>
        <MainNavbar />
        <AllPhotos />
      </HomeLayout>
    </AppLayout>
  );
}
