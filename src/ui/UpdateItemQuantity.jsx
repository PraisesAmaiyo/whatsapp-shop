import { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';

const StyedUpdateItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  background-color: var(--color-brand-100);
  width: min-content;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-full);
`;

function UpdateItemQuantity() {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <StyedUpdateItemQuantity>
      <Button type="primary" size="small" onClick={decreaseQuantity}>
        -
      </Button>

      <span className="text-sm font-medium">{quantity}</span>

      <Button type="primary" size="small" onClick={increaseQuantity}>
        +
      </Button>
    </StyedUpdateItemQuantity>
  );
}

export default UpdateItemQuantity;
