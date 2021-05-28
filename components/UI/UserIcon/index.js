import Styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Icon = Styled.div`
    height: 30px;
    position: relative;
    width: 30px;
    border-radius: 50%;
    box-shadow: 0 0 0 1px ${props => (props.stroke ? props.stroke : '#0009')};

    .img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid #0000;
    }

`;

export const IconLink = Styled.a`
    color: #000d;
    cursor: pointer;

    &:not(:last-child){
        margin-right: 30px;
    }

    .svg {
        height: 25px;
        width: 25px; 
       
    }   
`;

export const CardIcon = Styled.button`
  color: #000d;
  background-color: transparent;
  border: none;
  cursor: pointer;

    &:not(:last-child){
        margin-right: 10px;
        
    }

    .svg {
        height: 22px;
        width: 22px; 
       
    }   
`;

export const UserIcon = ({ img, stroke }) => {
  return (
    <Icon stroke={stroke}>
      <LazyLoadImage src={img} layout="fill" className="img" alt="user icon" />
    </Icon>
  );
};
