import styled from 'styled-components';
import Header from '../features/homepage/Header';
import Main from '../features/homepage/Main';
import Benefits from '../features/homepage/Benefits';
import Recommended from '../features/homepage/Recommended';

const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 1.2rem 4.8rem;
`;

const GradientWrapper = styled.div`
  background: radial-gradient(
      circle at center top,
      var(--color-brand-500),
      var(--color-brand-900) 70%
    ),
    linear-gradient(to bottom, var(--color-brand-900), var(--color-brand-900));
  color: var(--color-grey-50);
`;

const WhiteWrapper = styled.div`
  background-color: var(--color-brand-50);
  color: var(--color-brand-950);
`;

function Homepage() {
  return (
    <>
      <GradientWrapper>
        <Container>
          <Header />
          <Main />
        </Container>
      </GradientWrapper>
      <WhiteWrapper>
        <Container>
          <Benefits />
          <Recommended />
        </Container>
      </WhiteWrapper>
    </>
  );
}

export default Homepage;
