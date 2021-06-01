import Styled, { keyframes } from 'styled-components';

const pulsAnimation = keyframes`
    0% {
        box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    }
    100% {
        box-shadow: 0 0 0 100px rgba(0, 0, 0, 0);
    }
`;

export const PhotoCard = Styled.div`
    display: flex;
    flex-direction: column;
    min-width: 160px;
    position: relative;
    height: 500px;

    .Image {
        position: relative;
        flex: 1;
        width: 100%;
        overflow: hidden;
        background-color: #ddd7;

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

        
        .img, img {
            object-fit: cover;
            position: relative;
            z-index: 10;
        }
    }


    .info {
        padding: 0 10px;
        background-color: #fff;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .user {
            display: flex;
            align-items: center;

            .user_detail {
                transform: translateY(5px);
                margin-left: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;

                h3 {
                    text-transform: capitalize;
                    font-size: 0.9rem;
                    line-height: 0.7;
                    color: #2b2b2b;
                }

                p {
                    font-size: 0.8rem;
                    color: #2b2b2baa;
                }
            }
        }
    }

    .actions {
        display: flex;
        align-items: center;

        .likes {
            font-size: 0.9rem;
            font-weight: 700;
            margin-right: 10px;

            .number {
                margin-right: 2px;
            }
        }
    }
`;
