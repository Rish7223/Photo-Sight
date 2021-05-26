import Image from 'next/image';
import { useUserContext } from '../../../context/UserContext';
import useAuthentication from '../../../hooks/useAuthentication';
import { Button } from '../../UI/Button';
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 20 20"
            fill="#404348"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
          <p>{auth.user && auth.user.email}</p>
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
