import Styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    bottom: 5vh;
  }
  to {
    opacity: 1;
    bottom: 3vh;
  }
`;

const AlertComponent = Styled.div`
    position: absolute;
    padding: 8px 15px; 
    left: 20px;
    bottom: 3vh;
    display: flex;
    align-items: center;
    background-color: #151823;
    z-index: 50;
    border-radius: 5px;
    opacity: 1;
    animation: ${fadeIn} 0.2s  ease-in forwards;

    svg {
      width: 20px;
      margin-right: 5px;
    }

    p { 
        font-size: 0.9rem;
        font-weight: 500;
        color: #F7F5F6;
    }

    .cut {
      background: transparent;
      cursor: pointer;
      border: none;
      margin: 0;
      margin-left: 40px; 
      transform: translateY(3px);
    }
    
`;

const selectIcons = type => {
  switch (type) {
    case 'error':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#EB522D"
        >
          <path
            fillRule="evenodd"
            d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 'success':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#49AD5E"
          style={{
            transform: 'translateY(2px)'
          }}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#7189ff"
        >
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      );
  }
};

const Alert = ({ message, type, closeAlert }) => {
  const closeAlertComponent = () => {
    closeAlert();
  };
  return (
    <AlertComponent type={type}>
      {selectIcons(type)}
      <p className="message">{message}</p>
      <button className="cut" onClick={closeAlertComponent} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#dfdfdf"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </AlertComponent>
  );
};

export default Alert;
