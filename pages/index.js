import { LoginForm, SignUpForm } from '../components/Auth-Form';
import Styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserContext';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// dynamic imports

const Alert = dynamic(() => import('../components/UI/Alert'));
const Navbar = dynamic(() => import('../components/Section/Navbar'));
const LoginFormPattern = dynamic(() => import('../components/UI/PatternBox'));
const AppLayout = dynamic(() => import('../components/App-Layout'));

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
  const router = useRouter();
  const [isLoginComponent, setLoginComponent] = useState(true);
  const {
    authState: { error, isAuthenticate },
    dispatchRemoveError,
    dispatchAuthenticate
  } = useUserContext();

  useEffect(() => {
    dispatchAuthenticate();
  }, [isAuthenticate]);

  useEffect(() => {
    if (isAuthenticate !== null && isAuthenticate) {
      router.push('/home');
    }
  }, [isAuthenticate]);

  return (
    <AppLayout>
      <Navbar />
      {error && (
        <Alert
          type={error.type}
          message={error.message}
          closeAlert={dispatchRemoveError}
        />
      )}
      <ContentDiv>
        {isLoginComponent ? (
          <LoginForm className="form" />
        ) : (
          <SignUpForm className="form" />
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
