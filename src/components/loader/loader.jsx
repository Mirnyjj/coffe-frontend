import { keyframes, styled } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const InfiniteRotate = styled.div`
    animation: ${rotate} 2s linear infinite;
`
const LoaderContainer = ({className}) => {
  return (
    <div className={className}>
    <InfiniteRotate>
      <img className="louder" src="src/img/LABEL2.png"/>
    </InfiniteRotate>
    </div>
  )
};

export const Loader = styled(LoaderContainer)`
position: relative;
min-height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;