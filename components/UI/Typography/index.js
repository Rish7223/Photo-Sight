import styled from 'styled-components';

export const Heading = styled.h1`
  color: ${props => (props.color ? props.color : '#909398')};
  font-size: ${props => (props.fontSize ? props.fontSize : '2rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '700')};
  margin: ${props => (props.margin ? props.margin : '0')};
  ${props => props.center && 'text-align: center;'}
`;

export const Paragraph = styled.p`
  color: ${props => (props.color ? props.color : '#909398')};
  line-height: 1.4;
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
  margin: ${props => (props.margin ? props.margin : '0')};
  ${props => props.center && 'text-align: center;'}
`;
