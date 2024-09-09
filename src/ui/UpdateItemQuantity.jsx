import { useState, useEffect } from 'react';
import Button from './Button';
import styled from 'styled-components';
import { useAddItemToCart } from '../context/AddItemToCartContext';

const StyledUpdateItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  background-color: var(--color-brand-100);
  width: min-content;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-full);
`;

function UpdateItemQuantity({ itemId }) {
  const { cartItems, updateItemQuantity } = useAddItemToCart();

  //   console.log(cartItemsWithQuantity);

  const item = cartItems.find((item) => item.id === itemId);

  const [itemNumber, setItemNumber] = useState(item?.quantity || 1);

  useEffect(() => {
    setItemNumber(item?.quantity || 1);
  }, [item]);

  const decreaseQuantity = () => {
    if (itemNumber > 1) {
      setItemNumber(itemNumber - 1);
      updateItemQuantity(itemId, itemNumber - 1);
    }
  };

  const increaseQuantity = () => {
    setItemNumber(itemNumber + 1);
    updateItemQuantity(itemId, itemNumber + 1);
  };

  return (
    <StyledUpdateItemQuantity>
      <Button type="primary" size="small" onClick={decreaseQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{itemNumber}</span>
      <Button type="primary" size="small" onClick={increaseQuantity}>
        +
      </Button>
    </StyledUpdateItemQuantity>
  );
}

export default UpdateItemQuantity;
