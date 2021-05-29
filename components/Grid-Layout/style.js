import Styled from 'styled-components';

export const GridLayout = Styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem;
margin: 3rem auto;
max-width: 900px;
width: 100%;    

@media screen and (max-width: 800px){
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
}
`;
