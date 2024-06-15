import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 4rem;
  width: auto;
  min-width: 17rem;
`;

function Logo() {
  const src = '/logo-1.png';

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
