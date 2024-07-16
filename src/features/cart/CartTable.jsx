import styled from 'styled-components';
import Table from '../../ui/Table';
import CartRow from './CartRow';

import { cartItems, OrderSummary } from './storeCartItems';
import OrderSummaryRow from './OrderSummaryRow';

const StyledCart = styled.div`
  display: grid;
  grid-template-columns: 67% 31%;
  gap: 2rem;

  .quantity {
    padding-left: 1rem;
  }
`;

function CartTable() {
  return (
    <StyledCart>
      <Table columns="30rem 8rem auto 9rem 6rem">
        <Table.Header role="row">
          <div>Product</div>
          <div>Price</div>
          <div className="quantity">Quantity</div>
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
