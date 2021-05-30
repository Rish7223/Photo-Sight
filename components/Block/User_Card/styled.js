import Styled from 'styled-components';

export const UserCardLayout = Styled.div`
    max-width: 250px;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .user_img {
        position: relative;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 2px solid #fff0;
        box-shadow: 0 0 0 2px #eb1461;

        .img {
            width: 100%;
            object-fit: cover;
            border-radius: 50%;
        }

        .back_icon {
            cursor: pointer;
            color: #2b2b2baa;
            position: absolute;
            height: 30px;
            width: 30px;
            top: 50%;
            left: -28%;
            transform: translateY(-50%);
            z-index: 10;
        }
    }

    .info {
        margin-top: 1rem;
        padding: 10px 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;

        &_data {
            display: flex;
            flex-direction: column;
            align-items: center;
            line-height: 1.2;

            h4 {
                font-size: 1rem;
                font-weight: 700;
                color: #2b2b2b;
            }

            p {
                font-size: 0.9rem;
                font-weight: 500;
                color: #2b2b2b99;
            }
        }
    }

    .follow {
        padding: 10px 0;
        width: 100%;
        &_btn {
            padding: 8px;
            width: 100%;
            border: none;
            border-radius: 5px;
            background-color: #059DC0;
            color: #fff;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
    
        }

    }

    .user_details {
        width: 100%;
        line-height: 1.3;
        margin-top: 3rem;
        h1 {
            font-size: 1.2rem;
            color: #2b2b2b;
            text-transform: capitalize;
        }

        p {
            font-size: 1rem;
            color: #2b2b2bdd;
            margin-top: 10px;
        }
    }

    
`;
