import Styled from 'styled-components';

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

        .photo {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: bottom;
        }
    }
`;
