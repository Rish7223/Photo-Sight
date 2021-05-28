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
        <GridLayout>
          <PhotoBox
            photo="https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            userImg="/Photo/user.jpg"
            postedAt="3 days ago"
            likes="234"
            userName="Rishabh Tyagi"
          />
          <PhotoBox
            photo="https://images.unsplash.com/photo-1622126128180-ba5db1f738d8?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            userImg="/Photo/user.jpg"
            postedAt="4 days ago"
            likes="543"
            userName="Jorden234"
          />
          <PhotoBox
            photo="https://images.unsplash.com/photo-1622127566686-293ae65102aa?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            userImg="/Photo/user.jpg"
            postedAt="5 days ago"
            likes="568"
            userName="Nandinee Sharma"
          />
          <PhotoBox
            photo="https://images.unsplash.com/photo-1622071232460-7625da1a2098?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            userImg="/Photo/user.jpg"
            postedAt="8 days ago"
            likes="120k"
            userName="Rishabh Tyagi"
          />
          <PhotoBox
            photo="https://images.unsplash.com/photo-1622115066437-9c48a28a9738?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            userImg="/Photo/user.jpg"
            postedAt="8 days ago"
            likes="120k"
            userName="Rishabh Tyagi"
          />
          <PhotoBox
            photo="https://images.unsplash.com/photo-1621993646147-8cde7b9cc031?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
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
