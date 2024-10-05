import styled from 'styled-components';

import Header from '../ui/Header';

import Footer from '../ui/Footer';
import Benefits from '../ui/Benefits';

import PageHeader from '../ui/PageHeader';
import OrderCompletedInfo from '../features/orderCompleted/OrderCompletedInfo';
import CompletedOrderSummary from '../features/orderCompleted/CompletedOrderSummary';
import OrderStatusText from '../features/orderCompleted/OrderStatusText';
import OrderItems from '../features/orderCompleted/OrderItems';
import { useFetchOrder } from '../context/FetchOrderContext';
import Spinner from '../ui/Spinner';
import ErrorBox from '../ui/ErrorBox';

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

function OrderCompleted() {
  const { isLoading, error } = useFetchOrder();

  return (
    <>
      <GradientWrapper>
        <Container>
          <Header />
          {isLoading ? '' : <PageHeader />}
        </Container>
      </GradientWrapper>
      <WhiteWrapper>
        <Container>
          {isLoading ? (
            <Spinner />
          ) : error === null || error ? (
            <ErrorBox errorName={'Order'} />
          ) : (
            <>
              <OrderCompletedInfo />
              <CompletedOrderSummary />
              <OrderItems />
              <OrderStatusText />
              <Benefits />
            </>
          )}
        </Container>
        <Footer />
      </WhiteWrapper>
    </>
  );
}

export default OrderCompleted;
