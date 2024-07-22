import styled from 'styled-components';

import BillingDetailsForm from './BillingDetailsForm';
import ShippingDetailsForm from './ShippingDetailsForm';
import CheckoutSummary from './CheckoutSummary';
import CartTable from '../cart/CartTable';

import Row from '../../ui/Row';

const StyledCheckout = styled.div`
  display: grid;
  grid-template-columns: 67% 31%;
  gap: 2rem;

  .quantity {
    padding-left: 1rem;
  }
`;

const Header = styled.div`
  padding: 1rem;
  font-size: 3rem;
  font-weight: 600;
  margin: 2rem 0;
`;

function Checkout() {
  return (
    <>
      <Header>
        <span>Billing Details</span>
      </Header>
      {/* <Row> */}
      <BillingDetailsForm />
      <ShippingDetailsForm />
      {/* </Row> */}s{/* <StyledCheckout> */}
      <CartTable />
      {/* <CheckoutSummary /> */}
      {/* </StyledCheckout> */}
    </>
  );
}

export default Checkout;
