import Styled from 'styled-components';

const StyledProgressBar = Styled.div`
    height: 5px;
    background-color: #eb1461aa;
    width: ${props => (props.width ? props.width + '%' : '0%')};
`;

const ProgressBar = ({ progress }) => {
  return <StyledProgressBar width={progress} />;
};

export default ProgressBar;
