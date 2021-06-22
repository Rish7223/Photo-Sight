import { HomeLayout } from '../components/Home-Layout';
import { useUserContext } from '../context/UserContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// dynamic imports
const AllPhotos = dynamic(() => import('../components/Section/All-Photos'));
const AppLayout = dynamic(() => import('../components/App-Layout'));
const MainNavbar = dynamic(() => import('../components/Section/Navbar/Navbar'));

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
