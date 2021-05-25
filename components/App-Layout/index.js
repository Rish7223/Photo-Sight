import styled from 'styled-components';
import Head from 'next/head';
import { useDarkContext } from '../../context/Darkmode';
import { useUserContext } from '../../context/UserContext';
import { useEffect } from 'react';

const LayoutComponent = styled.div`
  min-height: 100vh;
  line-height: 1.7;
  padding: 0 6rem;
  background-color: ${props => (props.bgColor ? props.bgColor : '#F5F9FF')};

  @media screen and (max-width: 700px) {
    padding: 0;
  }
`;

const AppLayout = ({ title = 'Photosight', children }) => {
  const { authState, userAuthenticate } = useUserContext();
  const {
    state: { bgColor }
  } = useDarkContext();

  useEffect(() => {
    userAuthenticate();
  }, []);

  console.log(authState);

  return (
    <LayoutComponent bgColor={bgColor}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </LayoutComponent>
  );
};

export default AppLayout;
