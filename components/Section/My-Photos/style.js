import Styled, { keyframes } from 'styled-components';

const pulsAnimation = keyframes`
    0% {
        box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    }
    100% {
        box-shadow: 0 0 0 100px rgba(0, 0, 0, 0);
    }
`;

export const MyPhotoLayout = Styled.div`
    flex: 1;
    padding: 0 10rem;

    .content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
    }


    .photoBox {
        height: 350px;
        position: relative;
        min-width: 280px;
        width: 100%;
        background-color: #ddd7;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 1px;
            width: 1px;
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 50%;
            z-index: 0;
            animation: ${pulsAnimation} 2s infinite;
        }

        .photo {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: bottom;
        }
    }
`;
