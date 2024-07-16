import styled from 'styled-components';
import Table from '../../ui/Table';
import CartRow from './CartRow';

import { cartItems, OrderSummary } from './storeCartItems';
import OrderSummaryRow from './OrderSummaryRow';

console.log(OrderSummary);
console.log(cartItems);

const StyledCart = styled.div`
  display: grid;
  grid-template-columns: 69% 29%;
  gap: 2rem;
`;

function CartTable() {
  return (
    <StyledCart>
      <Table columns="30rem 1.8fr 2.2fr 1fr 1fr ">
        <Table.Header role="row">
          <div>Product</div>

          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={cartItems}
          render={(cartItem) => (
            <CartRow cartItem={cartItem} key={cartItem.id} />
          )}
        />
      </Table>

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

export default CartTable;
