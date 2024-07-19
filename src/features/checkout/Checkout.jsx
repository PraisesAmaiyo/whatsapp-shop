import styled from 'styled-components';

import { cartItems, OrderSummary } from '../cart/storeCartItems';
import OrderSummaryRow from './OrderSummaryRow';

import Table from '../../ui/Table';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';

const StyledCart = styled.div`
  display: grid;
  grid-template-columns: 67% 31%;
  gap: 2rem;

  .quantity {
    padding-left: 1rem;
  }
`;

function Checkout() {
  return (
    <StyledCart>
      <Form>
        <FormRowVertical label="Email address">
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
          />
        </FormRowVertical>
      </Form>

      <Table columns="1fr ">
        <Table.Header role="row">
          <div>Order Summary</div>
        </Table.Header>

        <Table.Body
          data={OrderSummary}
          render={(summary) => (
            <OrderSummaryRow summary={summary} key={summary} />
          )}
        />
      </Table>
    </StyledCart>
  );
}

export default Checkout;
