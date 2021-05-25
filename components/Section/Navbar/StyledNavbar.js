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
