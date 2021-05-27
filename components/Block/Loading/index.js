import Styled from 'styled-components';

const LoadingComponent = Styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fffa;
    color: #2b2b2b;

    .svg {
        height: 60px;
        width: 60px;
    }
`;

const Loading = () => {
  return (
    <LoadingComponent>
      <svg
        className="svg"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#2b2b2b"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(1 1)" strokeWidth="2">
            <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </LoadingComponent>
  );
};

export default Loading;
