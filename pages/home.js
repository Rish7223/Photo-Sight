import AppLayout from '../components/App-Layout';
import MainNavbar from '../components/Section/Navbar/Navbar';
import PhotoBox from '../components/Block/Photo_card';
import { HomeLayout } from '../components/Home-Layout';
import { useUserContext } from '../context/UserContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const {
    authState: { isAuthenticate }
  } = useUserContext();

  const router = useRouter();

  useEffect(() => {
    if (isAuthenticate !== null) {
      !isAuthenticate && router.push('/');
    }
  }, [isAuthenticate]);

  return (
    <AppLayout>
      <HomeLayout>
        <MainNavbar />
        <div
          style={{
            margin: '3rem auto',
            width: '1000px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: '2rem',
            rowGap: '2rem'
          }}
        >
          <PhotoBox
            photo="/Photo/photo_1.jpg"
            userImg="/Photo/user.jpg"
            postedAt="3 days ago"
            likes="234"
            userName="Rishabh Tyagi"
          />
          <PhotoBox
            photo="/Photo/photo_3.jpg"
            userImg="/Photo/user.jpg"
            postedAt="4 days ago"
            likes="543"
            userName="Jorden234"
          />
        </div>
      </HomeLayout>
    </AppLayout>
  );
}
