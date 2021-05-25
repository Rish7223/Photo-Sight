import AppLayout from '../components/App-Layout';
import { LoginForm, SignUpForm } from '../components/Auth-Form';
import Navbar from '../components/Section/Navbar';
import LoginFormPattern from '../components/UI/PatternBox';
import Styled from 'styled-components';
import { useState } from 'react';
import useAuthentication from '../hooks/useAuthentication';
import Alert from '../components/UI/Alert';

const ContentDiv = Styled.div`
  min-height: 90vh;
  position: relative;
  display :flex;
  align-items: center;
  justify-content: center;
  width: 100%;

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
      transform: translateY(-20%);
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      margin: 0;
    }
  }
`;

export default function Home() {
  const { loading, authenticate, error, register, socialLogin, logout } =
    useAuthentication();
  const [isLoginComponent, setLoginComponent] = useState(true);

  return (
    <AppLayout>
      <Navbar logout={logout} />
      {error && <Alert type={error.type} message={error.message} />}
      <ContentDiv>
        {isLoginComponent ? (
          <LoginForm
            className="form"
            loading={loading}
            authenticate={authenticate}
            socialLogin={socialLogin}
          />
        ) : (
          <SignUpForm
            className="form"
            loading={loading}
            register={register}
            socialLogin={socialLogin}
          />
        )}
        <LoginFormPattern
          className="pattern"
          setLoginComponent={setLoginComponent}
          isLoginComponent={isLoginComponent}
        />
      </ContentDiv>
    </AppLayout>
  );
}
