import Image from 'next/image';
import Link from 'next/link';
import UserDrop from '../../Block/Drop-Downs/userDrop';
import { IconLink } from '../../UI/UserIcon';
import { NavbarComponent } from './StyledNavbar';

// demo_components

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
        <IconLink>
          <Link href="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
        </IconLink>
        <IconLink>
          <Link href="#search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </IconLink>
        <IconLink>
          <Link href="#music">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
          </Link>
        </IconLink>
      </div>
      <div>
        <section>
          <UserDrop />
        </section>
      </div>
    </NavbarComponent>
  );
};

export default MainNavbar;
