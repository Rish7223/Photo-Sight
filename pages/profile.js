import AppLayout from '../components/App-Layout';
import { HomeLayout } from '../components/Home-Layout';
import MainNavbar from '../components/Section/Navbar/Navbar';
import { useUserContext } from '../context/UserContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import UserCard from '../components/Block/User_Card';
import MyPhotos from '../components/Section/My-Photos';
import EditProfileModel from '../components/Models/Edit-Profile';
import useModel from '../hooks/useModel';

export default function MyProfile() {
  const {
    authState: {
      isAuthenticate,
      loading,
      auth: { user }
    },
    dispatchAuthenticate
  } = useUserContext();

  const { isModel, openModel, closeModel } = useModel();

  const router = useRouter();

  useEffect(() => {
    dispatchAuthenticate();
  }, [isAuthenticate]);

  useEffect(() => {
    if (isAuthenticate !== null) {
      !isAuthenticate && router.push('/');
    }
  }, [loading]);

  return (
    <AppLayout page="profile">
      {isModel && <EditProfileModel closeModel={closeModel} />}
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
            <UserCard
              userName={user.displayName}
              userImage={user.photoURL}
              description={user.description}
              openModel={openModel}
            />
            <MyPhotos />
          </div>
        )}
      </HomeLayout>
    </AppLayout>
  );
}
