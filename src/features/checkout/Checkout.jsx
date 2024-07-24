import styled from 'styled-components';

import BillingDetailsForm from './BillingDetailsForm';
import ShippingDetailsForm from './ShippingDetailsForm';

import Row from '../../ui/Row';
import CartSummary from '../cart/CartSummary';
import CartItems from '../cart/CartItems';

const Header = styled.div`
  padding: 1rem;
  font-size: 3rem;
  font-weight: 600;
  margin: 2rem 0;
`;

const StyledCartSummary = styled.div`
  display: grid;
  grid-template-columns: 67% 31%;
  gap: 2rem;

  .quantity {
    padding-left: 1rem;
  }
`;

function Checkout() {
  return (
    <>
      <Header>
        <span>Billing Details</span>
      </Header>
      <Row>
        <BillingDetailsForm />
        <ShippingDetailsForm />

        <Header>
          <span>Cart Summary</span>
        </Header>

        <StyledCartSummary>
          <CartItems />
          <CartSummary />
        </StyledCartSummary>
      </Row>
    </>
  );
}

export default Checkout;
