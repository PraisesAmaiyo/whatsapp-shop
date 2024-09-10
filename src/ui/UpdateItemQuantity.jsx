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

function UpdateItemQuantity({
  itemId,
  defaultBuyingQuantity,
  onQuantityChange,
}) {
  const { cartItems, updateItemQuantity } = useAddItemToCart();

  const item = cartItems.find((item) => item.id === itemId);

  const [itemNumber, setItemNumber] = useState(
    item?.quantity || defaultBuyingQuantity
  );

  useEffect(() => {
    setItemNumber(item?.quantity || defaultBuyingQuantity);
  }, [item, defaultBuyingQuantity]);

  const decreaseQuantity = () => {
    if (itemNumber > 1) {
      const newQuantity = itemNumber - 1;
      setItemNumber(newQuantity);
      updateItemQuantity(itemId, newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const increaseQuantity = () => {
    const newQuantity = itemNumber + 1;
    setItemNumber(newQuantity);
    updateItemQuantity(itemId, newQuantity);
    onQuantityChange(newQuantity);
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
