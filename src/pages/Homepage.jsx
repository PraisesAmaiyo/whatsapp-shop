import styled from 'styled-components';
import Header from '../features/homepage/Header';
import Main from '../features/homepage/Main';
import Benefits from '../features/homepage/Benefits';

const Container = styled.div`
  height: 100vh;
  width: 120rem;
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
  height: 100vh;

  display: flex;
  justify-content: center;
`;

const WhiteWrapper = styled.div`
  background-color: var(--color-brand-50);
  color: var(--color-brand-950);
  height: 100vh;

  display: flex;
  justify-content: center;
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
        <Benefits />
      </WhiteWrapper>
    </>
  );
}

export default Homepage;
