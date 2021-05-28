import Styled from 'styled-components';

export const GridLayout = Styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem;
margin: 3rem auto;
max-width: 1000px;
width: 100%;
min-width: 600px;
`;
