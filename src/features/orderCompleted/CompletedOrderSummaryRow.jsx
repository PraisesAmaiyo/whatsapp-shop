import styled from 'styled-components';

import Table from '../../ui/Table';
import { formatNumber } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useShipping } from '../../context/ShippingContext';
import { useAddItemToCart } from '../../context/AddItemToCartContext';

const Group = styled.div`
  display: grid;
  grid-template-columns: 80% 1fr;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  font-weight: 600;
  font-size: 1.4rem;
`;

const Title = styled.div`
  font-size: 1.4rem;
`;

const TotalRow = styled(Group)`
  background-color: var(--color-grey-100);
  padding: 0;
  font-weight: 700;
  font-size: 1.5rem;
  padding: 1.5rem 2.4rem;
`;

const CheckoutBtn = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 95%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CompletedOrderSummaryRow({ summary }) {
  const navigate = useNavigate();

  const { shippingDetails } = useShipping();
  const { cartItems } = useAddItemToCart();

  const { amount, location } = shippingDetails;
  const { subtotal } = summary;

  let shippingAmount = amount;

  if (location === 'Customer') {
    shippingAmount = 0;
  }

  return (
    <Table.Row istotalrow="istotalrow">
      <Group>
        <Title>Order Number</Title>
        <div>#1234567890</div>
      </Group>

      <Group>
        <Title>Date</Title>
        <div>Aug 10, 2024</div>
      </Group>

      <Group>
        <Title>Items Purchased</Title>

        <div>{cartItems.length} total Items</div>
      </Group>

      <TotalRow>
        <Title>Total</Title>
        <div>
          <span className="naira-sign">₦</span>
          {formatNumber(subtotal + shippingAmount)}.00
        </div>
      </TotalRow>

      <CheckoutBtn>
        <StyledButton
          variation="primary"
          size="large"
          onClick={() => navigate('/')}
        >
          View Order Details
        </StyledButton>
      </CheckoutBtn>
    </Table.Row>
  );
}

export default CompletedOrderSummaryRow;
