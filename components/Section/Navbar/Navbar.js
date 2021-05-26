import Image from 'next/image';
import UserDrop from '../../Block/Drop-Downs/userDrop';
import { NavbarComponent } from './StyledNavbar';

// demo_components
const Notification = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="#999"
    style={{
      height: '30px',
      width: '30px',
      marginRight: '10px'
    }}
  >
    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
  </svg>
);

const MainNavbar = () => {
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
        <section
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Notification />
          <UserDrop />
        </section>
      </div>
    </NavbarComponent>
  );
};

export default MainNavbar;
