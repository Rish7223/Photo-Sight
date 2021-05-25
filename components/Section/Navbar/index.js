import Image from 'next/image';
import { StyledNavbar } from './StyledNavbar';

const Navbar = ({ logout }) => {
  return (
    <StyledNavbar>
      <Image
        src="/Images/logo.svg"
        width={150}
        height={30}
        layout="fixed"
        alt="logo"
      />
      <button onClick={logout}>logout</button>
    </StyledNavbar>
  );
};

export default Navbar;
