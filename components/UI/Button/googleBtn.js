import styled from 'styled-components';

const ButtonComponent = styled.button`
  border: none;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 15px 20px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 0px 5px #e5e5e5;
  border-radius: 10px;

  :hover {
    opacity: 1;
  }

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }
`;

const GoogleAuthButton = ({ onclick }) => {
  return (
    <ButtonComponent type="button" onClick={onclick}>
      <img
        src="/Images/google_icon.svg"
        alt="google icon"
        width={25}
        height={25}
      />
      <p>Login with Google</p>
    </ButtonComponent>
  );
};

export default GoogleAuthButton;
