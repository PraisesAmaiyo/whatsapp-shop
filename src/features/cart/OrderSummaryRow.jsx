import styled from 'styled-components';

import Table from '../../ui/Table';
import { formatNumber } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useShipping } from '../../context/ShippingContext';

const Group = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr;
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
`;

function OrderSummaryRow({ summary }) {
  const navigate = useNavigate();
  const urlLocation = useLocation();

  const isCheckoutPage = urlLocation.pathname.includes('checkout');
  const buttonText = isCheckoutPage
    ? 'Proceed to Payment'
    : 'Proceed to Checkout';
  const navigatePath = isCheckoutPage ? '/payment' : '/checkout';

  const { shippingDetails } = useShipping();
  const { amount, location } = shippingDetails;
  const { subtotal } = summary;

  let shippingAmount = amount;

  if (location === 'Customer') {
    shippingAmount = 0;
  }

  return (
    <Table.Row istotalrow="istotalrow">
      <Group>
        <Title>Subtotal</Title>
        <div>
          <span className="naira-sign">₦</span>
          {formatNumber(subtotal)}
        </div>
      </Group>

      <Group>
        <Title>Shipping</Title>

        <div>
          {location === 'Customer' ? (
            <span>{shippingAmount}</span>
          ) : (
            <span className="naira-sign">₦{formatNumber(shippingAmount)} </span>
          )}
        </div>
      </Group>

      <TotalRow>
        <Title>Total</Title>
        <div>
          <span className="naira-sign">₦</span>
          {formatNumber(subtotal + shippingAmount)}
        </div>
      </TotalRow>

      <CheckoutBtn>
        <Button
          variation="primary"
          size="large"
          onClick={() => navigate(navigatePath)}
        >
          {buttonText}
        </Button>
      </CheckoutBtn>
    </Table.Row>
  );
}

export default OrderSummaryRow;
