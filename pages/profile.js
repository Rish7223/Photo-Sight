import AppLayout from '../components/App-Layout';
import { HomeLayout } from '../components/Home-Layout';
import MainNavbar from '../components/Section/Navbar/Navbar';
import { useUserContext } from '../context/UserContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import UserCard from '../components/Block/User_Card';

export default function MyProfile() {
  const router = useRouter();
  const {
    authState: {
      isAuthenticate,
      loading,
      auth: { user }
    }
  } = useUserContext();

  useEffect(() => {
    if (isAuthenticate !== null) {
      !isAuthenticate && router.push('/');
    }
  }, [isAuthenticate, loading]);
  return (
    <AppLayout page="profile">
      <HomeLayout>
        <MainNavbar />
        <div
          className="content"
          style={{
            margin: '3rem auto'
          }}
        >
          {user && (
            <UserCard userName={user.displayName} userImage={user.photoURL} />
          )}
        </div>
      </HomeLayout>
    </AppLayout>
  );
}
