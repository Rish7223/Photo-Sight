import Styled, { keyframes } from 'styled-components';
const fadeINBox = keyframes`
    from {
        
        opacity: 0;
    }
    to {
    
        opacity: 1;
    }
`;

export const FormLayout = Styled.div`
    position: fixed;
    min-height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 30;
    background: #fff9;
    animation: ${fadeINBox} 0.2s ease forwards;
`;

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

export const StyledSharePhoto = Styled.div`
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

    .select_photo {
        margin: 20px 0;
        width: 100%;

        label {
            display: flex;
            align-items: center;
            color: #2b2b2b;
           cursor: pointer;
            font-weight: 500;
        }

        .svg {
            height: 30px;
            width: 30px;
            margin-right: 5px;
        }
        .photoInput {
            display: none;
        }
    }


    .add_detail {
        position: relative;
        &-data {
            margin: 10px 0;
            label {
                font-size: 1.1rem;
                color: #2b2b2b;
                font-weight: 500;
            }

            input {
                height: 40px;
                width: 100%;
                padding: 0 5px;
                font-size: 1rem;
                color: #2b2b2b;
                border: 2px solid #2b2b2baa;
                border-radius: 5px;
                margin-top: 5px;
    
                &::placeholder {
                    color: #2b2b2baa;
                    font-size: 0.9rem;
                }
            }
        }

        .preview {
            margin-top: 10px;
            min-height: 200px;
            max-height: 300px;
            border: 2px dashed #eb1461;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;



            .imgBox {
                max-width: 250px;
                width: 100%;
                height: 100%;
                overflow: hidden;

                .previewImg {
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                }
            }

            p {
                font-size: 1.5rem;
                font-weight: 700;
                color: #2b2b2baa;
            }
        }

        .actions {
            display: flex;
            algin-items: center;
            justify-content: flex-end;
            margin: 10px 0;

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
