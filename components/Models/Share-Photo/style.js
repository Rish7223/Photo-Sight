import Styled from 'styled-components';

export const StyledSharePhoto = Styled.div`
    max-width: 600px;
    width: 100%;
    min-width: 300px;
    min-height: 300px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 5px #2b2b2b22;
    margin-left: 40px;

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
            border: 2px dashed #eb1461;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;

            &Img {
                width: 300px;
                height: 100%;
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
