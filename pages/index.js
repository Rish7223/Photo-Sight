import AppLayout from '../components/App-Layout';
import LoginForm from '../components/Login-Form';
import Navbar from '../components/Section/Navbar';
import LoginFormPattern from '../components/UI/PatternBox';
import Styled from 'styled-components';

const ContentDiv = Styled.div`
  min-height: 90vh;
  position: relative;
  display :flex;
  align-items: center;
  justify-content: center;

  .form {
    position: relative;
    left: 50px;
  }

  @media screen and (max-width: 700px){
    display :flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    .form {
      left: 0px;
      transform: translateY(-40%);
    }
  }
`;

export default function Home() {
  return (
    <AppLayout>
      <Navbar />
      <ContentDiv>
        <LoginForm className="form" />
        <LoginFormPattern className="pattern" />
      </ContentDiv>
    </AppLayout>
  );
}
