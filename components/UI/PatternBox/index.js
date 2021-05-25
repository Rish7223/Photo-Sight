import Styled from 'styled-components';
import { Heading, Paragraph } from '../Typography';

const LoginPattern = Styled.div`
    padding: 0 5rem;
    min-width: 364px;
    width: 464px;
    height: 611px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, rgba(7, 7, 7, 0.1), rgba(7, 7, 7, 0.1)), url("/Images/loginPattern.jpg");
    background-size: cover;
    background-position: center;

    .heading {
        text-shadow: 0px 4px 4px #6d7786;
    }

    .paragraph {
        text-shadow: 0px 4px 4px #6d7786;
    }

    .cta {
      width: 100%;
      padding: 12px 10px;
      background-color: #fadddddd;
      color: #2b2b2b;
      font-size: 1.3rem;
      font-weight: 500;
      border-radius: 50px;
      margin-top: 20px;
      border: none;
      cursor: pointer;
    }

    @media screen and (max-width: 700px){
        height: 411px;
        justify-content: flex-start;
        width: 100%;
        padding: 20px 30px;
        border-radius: 2px;
    }
`;

const LoginFormPattern = ({ isLoginComponent, setLoginComponent }) => {
  return (
    <LoginPattern>
      <Heading color="#FFFFFF" fontSize="3rem" className="heading">
        Photosight
      </Heading>
      <Paragraph center color="#fff" fontSize="1.2rem" className="paragraph">
        Login with your social accounts and start sharing your moment at the
        worlds best social platform
      </Paragraph>
      <button
        type="button"
        className="cta"
        onClick={() => {
          setLoginComponent(!isLoginComponent);
        }}
      >
        {isLoginComponent ? 'Sign up' : 'Login'}
      </button>
    </LoginPattern>
  );
};

export default LoginFormPattern;
