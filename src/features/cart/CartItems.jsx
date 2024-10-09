import styled from 'styled-components';
import { useAddItemToCart } from '../../context/AddItemToCartContext';
import Table from '../../ui/Table';
import CartRow from './CartRow';
import Button from '../../ui/Button';
import { useNavigate, useNavigation } from 'react-router-dom';
import Heading from '../../ui/Heading';

const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyCartMessage = styled(Heading)`
  text-align: center;
  margin: 4rem auto 2rem auto;
`;

function CartItems() {
  const { cartItems } = useAddItemToCart();
  const navigate = useNavigate();

  return (
    <Table columns="30rem 8rem auto 9rem 6rem">
      <Table.Header role="row">
        <div>Product</div>
        <div>Price</div>
        <div className="quantity">Quantity</div>
        <div>Subtotal</div>
        <div></div>
      </Table.Header>

      {/* Bypass the Table.Body component completely when no items exist */}
      {cartItems.length > 0 ? (
        <Table.Body
          data={cartItems}
          render={(cartItem) => (
            <CartRow cartItem={cartItem} key={cartItem.id} />
          )}
        />
      ) : (
        <EmptyCartContainer>
          <EmptyCartMessage as="h2">
            Your cart is currently empty. Explore our products to find something
            you love!
          </EmptyCartMessage>
          <div>
            <Button
              variation="primary"
              size="small"
              onClick={() => navigate('/products')}
            >
              Continue Shopping
            </Button>
          </div>
        </EmptyCartContainer>
      )}
    </Table>
  );
}

export default CartItems;
