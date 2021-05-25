/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import Head from 'next/head';
import { useDarkContext } from '../../context/Darkmode';
import { useUserContext } from '../../context/UserContext';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
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
  const {
    authState: { isAuthenticate },
    userAuthenticate
  } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    userAuthenticate();
  }, []);

  useEffect(() => {
    if (isAuthenticate) {
      router.push('/home');
    } else {
      router.push('/');
    }
  }, [isAuthenticate]);

  const {
    state: { bgColor }
  } = useDarkContext();

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
