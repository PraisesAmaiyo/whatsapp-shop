import styled from 'styled-components';
import HeaderNav from './HeaderNav';
import HeaderMenu from './HeaderMenu';
import HeaderMain from './HeaderMain';
import Logo from './Logo';
import Row from './Row';

const GradientWrapper = styled.div`
  background: radial-gradient(
      circle at center top,
      var(--color-brand-500),
      var(--color-brand-900) 70%
    ),
    linear-gradient(to bottom, var(--color-brand-900), var(--color-brand-900));
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled.header`
  padding: 1.2rem 4.8rem;

  width: 120rem;
`;

function Header() {
  return (
    <GradientWrapper>
      <StyledHeader>
        <Row type="vertical">
          <Row type="horizontal">
            <Logo />
            <HeaderNav />
            <HeaderMenu />
          </Row>
          <HeaderMain />
        </Row>
      </StyledHeader>
    </GradientWrapper>
  );
}

export default Header;
