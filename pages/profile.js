import { HomeLayout } from '../components/Home-Layout';
import { useUserContext } from '../context/UserContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useModel from '../hooks/useModel';
import { usePhotoContext } from '../context/PhotoContext';
import dynamic from 'next/dynamic';

// dynamic imports
const Alert = dynamic(() => import('../components/UI/Alert'));
const UserCard = dynamic(() => import('../components/Block/User_Card'));
const MyPhotos = dynamic(() => import('../components/Section/My-Photos'));
const EditProfileModel = dynamic(() =>
  import('../components/Models/Edit-Profile')
);
const AppLayout = dynamic(() => import('../components/App-Layout'));

const MainNavbar = dynamic(() => import('../components/Section/Navbar/Navbar'));

export default function MyProfile() {
  const {
    authState: {
      isAuthenticate,
      loading,
      auth: { user }
    },
    dispatchAuthenticate
  } = useUserContext();

  const {
    photoState: { photosError },
    useRemoveError
  } = usePhotoContext();

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
      {photosError && (
        <Alert
          type={photosError.type}
          message={photosError.message}
          closeAlert={useRemoveError}
        />
      )}
    </AppLayout>
  );
}
