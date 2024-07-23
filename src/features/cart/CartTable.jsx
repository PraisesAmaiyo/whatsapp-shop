import styled from 'styled-components';

import CartItems from './CartItems';
import CartSummary from './CartSummary';

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
      <CartItems />
      <CartSummary />
    </StyledCart>
  );
}

export default CartTable;
