import Styled, { keyframes } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const waveEffect = keyframes`
  0% {
    box-shadow: 0 0 0 0px rgba(235,20,97,0.2);
  }
  100% {
    box-shadow: 0 0 0 5px  rgba(235,20,97,0);
  }
`;

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

export const IconLink = Styled.section`
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
        border-radius: 10px;
    }  
    
    .like {
      animation: ${waveEffect} 0.3s ease-out; 
    }
`;

export const UserIcon = ({ img, stroke }) => {
  return (
    <Icon stroke={stroke}>
      <LazyLoadImage src={img} layout="fill" className="img" alt="user icon" />
    </Icon>
  );
};
