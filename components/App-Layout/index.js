/* eslint-disable react-hooks/exhaustive-deps */
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
  const {
    authState: { loading, isAuthenticate },
    dispatchAuthenticate
  } = useUserContext();

  useEffect(() => {
    dispatchAuthenticate();
  }, [isAuthenticate]);

  const {
    state: { bgColor }
  } = useDarkContext();

  return !loading ? (
    <LayoutComponent bgColor={bgColor}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </LayoutComponent>
  ) : (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#7772',
        color: '#2b2b2b',
        fontSize: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      loading...
    </div>
  );
};

export default AppLayout;
