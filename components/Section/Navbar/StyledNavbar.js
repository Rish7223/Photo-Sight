import Styled from 'styled-components';

export const StyledNavbar = Styled.div`
  min-height: 70px;
  height: 10vh;
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px){
   padding: 0 10px;
}
`;

export const NavbarComponent = Styled.div`
min-height: 70px;
height: 10vh;
display: flex;
align-items: center;
justify-content: space-between;

.navItems {
  display: flex;
  align-items: center;
}

section {
  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
  }

  button {
    margin-left: 10px;
  }
}
`;
