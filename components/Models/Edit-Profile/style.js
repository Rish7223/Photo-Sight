import Styled, { keyframes } from 'styled-components';

const fadeIN = keyframes`
    from {
        transform: translateY(0);
        opacity: 0;
    }
    to {
        transform: translateY(5%);
        opacity: 1;
    }
`;

export const StyledEditProfile = Styled.div`
    max-width: 600px;
    width: 100%;
    min-width: 300px;
    min-height: 300px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px #2b2b2b44;
    margin-left: 40px;
    opacity: 0;
    position: relative;
    animation: ${fadeIN} 0.5s 0.5s ease forwards;
    padding-bottom: 40px;

    .head {
        display :flex;
        align-items: center;
        justify-content: space-between;


        button {
            background: transparent;
            color: #2b2b2b;
            cursor: pointer;
            border: none;

            .svg {
                height: 25px;
                width: 25px;
            }
        }
    }

    .edit_form {
        padding: 10px 0;
        &-data {
            margin: 10px 0;
            display: flex;
            flex-direction: column;
            label {
                font-size: 1.1rem;
                color: #2b2b2b;
                font-weight: 500;
                margin-bottom: 5px;
            }

            input {
                height: 40px;
                width: 100%;
                padding: 0 5px;
                font-size: 1rem;
                color: #2b2b2b;
                border: 2px solid #2b2b2baa;
                border-radius: 5px;
    
                &::placeholder {
                    color: #2b2b2baa;
                    font-size: 0.9rem;
                }
            }

            textarea {
                min-height: 100px;
                max-height: 100px;
                height: 100%;
                min-width: 100%;
                max-width: 100%;
                color: #2b2b2b;
                border: 2px solid #2b2b2baa;
                border-radius: 5px;
                padding: 10px 5px;
                font-size: 1rem;

                &::placeholder {
                    color: #2b2b2baa;
                    font-size: 0.9rem;
                }
    
            }

            .wordCount {
                display: flex;
                algin-items: center;
                justify-content: flex-end;
                color: #666;
                font-size: 0.8rem;
                font-weight: 500;

                .numbers {
                    margin-left: 3px;
                }
            }
        }

        .actions {
            display: flex;
            algin-items: center;
            justify-content: flex-end;
            margin: 20px 0;

            button {
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            
            .cancel {
                background-color: #fff;
                border: 1px solid #2b2b2baa;
                color: #2b2b2b;
                margin-right: 10px;
                font-size: 1rem;
            }

            .save {
                background-color: #eb1461;
                border: none;
                color: #fff;
                font-size: 1rem;
            }
        }
    }

`;
