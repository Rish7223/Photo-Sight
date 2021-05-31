import styled from 'styled-components';

const ButtonComponent = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
`;

export const Button = styled(ButtonComponent)`
  background-color: #ea005e;
  color: #fff;
  font-weight: 500;
  border-radius: 10px;
  font-size: ${props => (props.fontSize ? props.fontSize : '1.2rem')};
  padding: ${props => (props.padding ? props.padding : '15px 64px')};
  margin: ${props => (props.margin ? props.margin : '0')};
  width: ${props => props.width};

  .svg {
    color: #fff;
  }
`;
