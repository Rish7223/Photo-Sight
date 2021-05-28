import Styled from 'styled-components';

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
        
        .img, img {
            object-fit: cover !important;
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
                    font-size: 0.9rem;
                    line-height: 0.5;
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
