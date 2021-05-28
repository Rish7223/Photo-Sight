import Styled from 'styled-components';

export const PostButton = Styled.button`
    position: fixed;
    right: 6rem;
    bottom: 10vh;
    height: 50px;
    width: 50px;
    background-color: #eb1461;
    border: 2px solid #fff;
    border-radius: 20%;
    box-shadow: 0 0 20px #eb146199;
    color: #fff;
    cursor: pointer;
    z-index: 20;

    .svg {
        height: 35px;
        width: 35px;
    }
`;
