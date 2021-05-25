import styled from 'styled-components';

export const Input = styled.input`
  border: 2px solid #2b2b2baa;
  padding: ${props => (props.padding ? props.padding : ' 15px 0')};
  padding-left: 50px;
  padding-right: 10px;
  border-radius: 10px;
  font-size: 18px;
  color: #2b2b2b;
  transition: all 0.2s ease;
  background-color: transparent;

  ::placeholder {
    color: rgba(0, 0, 0, 0.96);
    font-size: 16px;
  }

  :focus {
    border: 2px solid #2b2b2b;
    outline: none;
  }

  margin: ${props => (props.margin ? props.margin : '0')};
  width: ${props => props.width};
`;
