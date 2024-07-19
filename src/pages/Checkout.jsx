import styled from 'styled-components';

import Header from '../ui/Header';
import CheckoutHeader from '../features/checkout/CheckoutHeader';
import Checkout from '../features/checkout/Checkout';

import Footer from '../ui/Footer';
import Benefits from '../ui/Benefits';

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

function ProductDetails() {
  return (
    <>
      <GradientWrapper>
        <Container>
          <Header />
          <CheckoutHeader />
        </Container>
      </GradientWrapper>
      <WhiteWrapper>
        <Container>
          <Checkout />
          <Benefits />
        </Container>
        <Footer />
      </WhiteWrapper>
    </>
  );
}

export default ProductDetails;
