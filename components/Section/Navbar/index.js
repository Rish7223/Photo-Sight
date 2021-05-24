import Image from 'next/image';
import { StyledNavbar } from './StyledNavbar';

const Navbar = () => {
  return (
    <StyledNavbar>
      <Image src="/Images/logo.svg" width={150} height={30} layout="fixed" />
    </StyledNavbar>
  );
};

export default Navbar;
