import styled from 'styled-components';
import Head from 'next/head';
import { useDarkContext } from '../../context/Darkmode';

const LayoutComponent = styled.div`
  min-height: 100vh;
  line-height: 1.7;
  padding: 0 6rem;
  background-color: ${props => (props.bgColor ? props.bgColor : '#F5F9FF')};
`;

const AppLayout = ({ title = 'Photosight', children }) => {
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
