import Styled from 'styled-components';

export const UserIcon = Styled.div`
    height: 25px;
    width: 25px;
    background-image: url('${props => props.img}');
    background-size: 110%;
    background-position: top;
    border-radius: 50%;
`;
