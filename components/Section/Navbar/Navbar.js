import Image from 'next/image';
import { useUserContext } from '../../../context/UserContext';
import useAuthentication from '../../../hooks/useAuthentication';
import { Button } from '../../UI/Button';
import { UserIcon } from '../../UI/UserIcon';
import { NavbarComponent } from './StyledNavbar';

const MainNavbar = () => {
  const {
    authState: { auth }
  } = useUserContext();
  const { logout } = useAuthentication();
  return (
    <NavbarComponent>
      <Image
        src="/Images/logo.svg"
        width={150}
        height={30}
        layout="fixed"
        alt="logo"
      />
      <div>
        <section>
          {auth.user && <UserIcon img={auth.user.photoURL} />}
          <p>{auth.user && auth.user.displayName}</p>
          <Button
            padding="8px 34px"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Button>
        </section>
      </div>
    </NavbarComponent>
  );
};

export default MainNavbar;
