import Styled from 'styled-components';

const AlertComponent = Styled.div`
    position: absolute; 
    top: 2vh;
    right: 0;

    p {
        min-height:30px; 
        padding: 5px 10px;
        font-size: 0.8rem;
        font-weight: 500;
        position: relative;
        border-radius: 5px;

        ${props =>
          props.type === 'error' &&
          'background-color: #ff555522; color: #ff5555;'}
        ${props =>
          props.type === 'success' &&
          'background-color: #55ff5533; color: #55aa55;'}

        p::before {
            content: "",
            position: absolute;
            width: 10px;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 10;
            background-color: #dd5555;
            
        }
 
    }
    
`;

const Alert = ({ message, type }) => {
  return (
    <AlertComponent type={type}>
      <p className="message">{message}</p>
    </AlertComponent>
  );
};

export default Alert;
