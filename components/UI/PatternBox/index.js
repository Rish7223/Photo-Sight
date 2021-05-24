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
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .paragraph {
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    @media screen and (max-width: 700px){
        height: 411px;
        justify-content: flex-start;
    }
`;

const LoginFormPattern = () => {
  return (
    <LoginPattern>
      <Heading color="#FFFFFF" fontSize="3rem" className="heading">
        Photosight
      </Heading>
      <Paragraph center color="#fff" fontSize="1.2rem" className="paragraph">
        Login with your social accounts and start sharing your moment at the
        worlds best social platform
      </Paragraph>
    </LoginPattern>
  );
};

export default LoginFormPattern;
