import AppLayout from '../components/App-Layout';
import MainNavbar from '../components/Section/Navbar/Navbar';
import PhotoBox from '../components/Block/Photo_card';
import { HomeLayout } from '../components/Home-Layout';
import { useUserContext } from '../context/UserContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GridLayout } from '../components/Grid-Layout/style';

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
        <GridLayout>
          <PhotoBox
            photo="/Photo/photo_1-min.jpg"
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
          <PhotoBox
            photo="/Photo/photo_2.jpg"
            userImg="/Photo/user.jpg"
            postedAt="5 days ago"
            likes="568"
            userName="Nandinee Sharma"
          />
          <PhotoBox
            photo="/Photo/photo_5.jpg"
            userImg="/Photo/user.jpg"
            postedAt="8 days ago"
            likes="120k"
            userName="Rishabh Tyagi"
          />
        </GridLayout>
      </HomeLayout>
    </AppLayout>
  );
}
