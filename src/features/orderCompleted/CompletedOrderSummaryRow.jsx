import styled from 'styled-components';

import Table from '../../ui/Table';
import { formatNumber } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useShipping } from '../../context/ShippingContext';
import { useAddItemToCart } from '../../context/AddItemToCartContext';
import { FaWhatsapp } from 'react-icons/fa';
import { getDate } from '../../utils/helpers';

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

const WhatsappBtn = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 2rem 0;
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
  const { totalPrice, cartItems } = useAddItemToCart();
  const { shippingDetails } = useShipping();
  const { amount, location } = shippingDetails;
  const { subtotal } = summary;

  let shippingAmount = amount;

  if (location === 'Customer') {
    shippingAmount = 0;
  }

  const { id: orderID } = useParams();
  //   const lastOrderID = sessionStorage.getItem('lastOrderID') || orderID;

  const orderLink = `http://localhost:5173/order/${orderID}`;

  const checkoutCart = () => {
    const phoneNumber = '+2348130909020'; // Your WhatsApp number
    const cartDetails = cartItems
      .map(
        (
          item
        ) => `*${item.quantity}x* ${item.newCartItemName} = *₦${item.newCartItemPrice}*
     `
      )
      .join('\n');

    const message = encodeURIComponent(
      `Hello, I would like to order the following items:\n\n${cartDetails}\n\nCart Total: *₦${formatNumber(
        totalPrice + amount
      )}*\n\nCustomer: Praises +2348130909020\n\nPayment Receipt: LINK_TO_PAYMENT-RECEIPT\n\nOrder Link: ${orderLink}`
    );

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open the URL to trigger WhatsApp with the pre-filled message
    window.open(whatsappURL, '_blank');
  };

  return (
    <Table.Row istotalrow="istotalrow">
      <Group>
        <Title>Order Number</Title>
        <div>#{orderID}</div>
      </Group>

      <Group>
        <Title>Date</Title>
        <div>{getDate()}</div>
      </Group>

      <Group>
        <Title>Items Purchased</Title>

        <div>{cartItems.length} total Items</div>
      </Group>

      <TotalRow>
        <Title>Shipping Fee</Title>
        <div>
          <span className="naira-sign">₦</span>
          {formatNumber(shippingAmount)}.00
        </div>
      </TotalRow>

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
          onClick={() => navigate('/products')}
        >
          Continue Shopping
        </StyledButton>
      </CheckoutBtn>

      <WhatsappBtn>
        <Button
          variation="secondary"
          size="large"
          onClick={() => checkoutCart()}
        >
          Send to whatsapp <FaWhatsapp />{' '}
        </Button>
      </WhatsappBtn>
    </Table.Row>
  );
}

export default CompletedOrderSummaryRow;
