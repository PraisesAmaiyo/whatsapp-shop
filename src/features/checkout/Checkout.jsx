import styled from 'styled-components';

import BillingDetailsForm from './BillingDetailsForm';
import ShippingDetailsForm from './ShippingDetailsForm';

import Row from '../../ui/Row';
import CartSummary from '../cart/CartSummary';
import CartItems from '../cart/CartItems';
import { useForm } from 'react-hook-form';

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
  const { register, handleSubmit, formState, getValues } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    console.log('Form Submitted:', data);
  }

  return (
    <>
      <Header>
        <span>Billing Details</span>
      </Header>
      <Row>
        <BillingDetailsForm register={register} errors={errors} />
        <ShippingDetailsForm register={register} errors={errors} />

        <Header>
          <span>Cart Summary</span>
        </Header>

        <StyledCartSummary>
          <CartItems />
          <CartSummary onProceed={handleSubmit(onSubmit)} />
        </StyledCartSummary>
      </Row>
    </>
  );
}

export default Checkout;
