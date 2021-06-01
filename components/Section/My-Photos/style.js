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

        .info {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 50px;
            color: #fff;
            width: 100%;
            z-index: 10;
            background-color: rgba(0,0,0,0.5);
            font-size: 0.9rem;
            line-height: 1.5;
            padding: 0 0.4rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            section {
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
            }

            .svg {
                height: 25px;
                width: 25px;
                cursor: pointer;
                transition: all 0.2s ease;

                &:hover {
                    opacity: 0.7;
                }
            }
        }

        .photo {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: bottom;
        }
    }
`;
