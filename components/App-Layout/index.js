import styled from 'styled-components';
import Head from 'next/head';
import { useDarkContext } from '../../context/Darkmode';
import { useUserContext } from '../../context/UserContext';
import Loading from '../Block/Loading';

const LayoutComponent = styled.div`
  position: relative;
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
    authState: { loading }
  } = useUserContext();

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
    <Loading />
  );
};

export default AppLayout;
