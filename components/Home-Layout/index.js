import Styled from 'styled-components';
import AddPostButton from '../UI/Post-Button';

const Layout = Styled.div`
  padding: 20px 0;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`;

export const HomeLayout = ({ children }) => {
  return (
    <Layout>
      <AddPostButton />
      {children}
    </Layout>
  );
};
