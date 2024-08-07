import styled from 'styled-components';

import Header from '../ui/Header';
import Main from '../features/homepage/Main';
import Benefits from '../ui/Benefits';
import Recommended from '../features/homepage/Recommended';
import FeaturedCategories from '../features/homepage/FeaturedCategories';
import TrendingProducts from '../features/homepage/TrendingProducts';
import NewArrivals from '../features/homepage/NewArrivals';
import JoinCommunity from '../ui/JoinCommunity';
import Footer from '../ui/Footer';

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
          <FeaturedCategories />
          <TrendingProducts />
          <NewArrivals />
          <JoinCommunity />
        </Container>
        <Footer />
      </WhiteWrapper>
    </>
  );
}

export default Homepage;
