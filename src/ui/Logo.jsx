import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 4rem;
  width: auto;
  min-width: 17rem;

  &:hover {
    cursor: pointer;
  }
`;

function Logo() {
  const navigate = useNavigate();
  const src = '/logo.png';

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" onClick={() => navigate('/')} />
    </StyledLogo>
  );
}

export default Logo;
