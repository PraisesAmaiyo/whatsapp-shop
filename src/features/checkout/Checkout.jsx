import styled from 'styled-components';

import { OrderSummary } from '../cart/storeCartItems';
import OrderSummaryRow from './OrderSummaryRow';

import Table from '../../ui/Table';
import Form from '../../ui/Form';
import FormRowVertical from '../../ui/FormRowVertical';
import Input from '../../ui/Input';
import CountryStateCity from '../../ui/CountryStateCity';

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

const InputGroup = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
`;

function Checkout() {
  return (
    <>
      <Header>
        <span>Billing Details</span>
      </Header>

      <StyledCheckout>
        <Form>
          <InputGroup>
            <FormRowVertical label="First Name">
              <Input type="name" id="firstname" />
            </FormRowVertical>

            <FormRowVertical label="Last Name">
              <Input type="name" id="lastname" />
            </FormRowVertical>
          </InputGroup>

          <InputGroup>
            <FormRowVertical label="Phone Number">
              <Input type="phonenumber" id="phonenumber" />
            </FormRowVertical>

            <FormRowVertical label="Email Address">
              <Input type="email" id="email" />
            </FormRowVertical>
          </InputGroup>

          <FormRowVertical label="Address">
            <Input type="address" id="address" />
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
      </StyledCheckout>

      <CountryStateCity />
    </>
  );
}

export default Checkout;
