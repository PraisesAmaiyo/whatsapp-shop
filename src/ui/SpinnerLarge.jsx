import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const gradientWobble = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

const StyledSpinnerLarge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    45deg,
    var(--color-brand-100),
    var(--color-brand-200),
    var(--color-brand-400)
  );
  background-size: 200% 200%;
  animation: ${gradientWobble} 3s ease infinite;
`;

const Img = styled.img`
  height: 6rem;
  width: auto;
  min-width: 17rem;
  animation: ${bounce} 2s infinite;

  &:hover {
    cursor: pointer;
  }
`;

function SpinnerLarge() {
  const src = '/logo-dark.png';

  return (
    <StyledSpinnerLarge>
      <Img src={src} alt="Logo" />
    </StyledSpinnerLarge>
  );
}

export default SpinnerLarge;
