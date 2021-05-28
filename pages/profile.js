import AppLayout from '../components/App-Layout';
import { HomeLayout } from '../components/Home-Layout';
import MainNavbar from '../components/Section/Navbar/Navbar';
import { useUserContext } from '../context/UserContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import UserCard from '../components/Block/User_Card';
import SharePhoto from '../components/Models/Share-Photo';

export default function MyProfile() {
  const router = useRouter();
  const {
    authState: {
      isAuthenticate,
      loading,
      auth: { user }
    },
    dispatchAuthenticate
  } = useUserContext();

  useEffect(() => {
    dispatchAuthenticate();
  }, [isAuthenticate]);

  useEffect(() => {
    if (isAuthenticate !== null) {
      !isAuthenticate && router.push('/');
    }
  }, [isAuthenticate, loading]);
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
            <SharePhoto />
          </div>
        )}
      </HomeLayout>
    </AppLayout>
  );
}
