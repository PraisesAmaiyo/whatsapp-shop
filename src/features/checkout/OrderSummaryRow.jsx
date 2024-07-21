import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Table from '../../ui/Table';
import Button from '../../ui/Button';

import { formatNumber } from '../../utils/helpers';

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
  //   const navigate = useNavigate();

  const { subtotal, shipping, total } = summary;

  return (
    <Table.Row istotalrow="istotalrow">
      <Group>
        <Title>Subtotal</Title>
        <div>
          {' '}
          <span className="naira-sign">₦</span>
          {formatNumber(subtotal)}
        </div>
      </Group>

      <Group>
        <Title>Shipping</Title>
        {shipping === 0 ? (
          <div>Free</div>
        ) : (
          <div>
            <span className="naira-sign">₦</span>
            {formatNumber(shipping)}
          </div>
        )}
      </Group>

      <TotalRow>
        <Title>Total</Title>
        <div>
          <span className="naira-sign">₦</span>
          {formatNumber(total)}
        </div>
      </TotalRow>

      <CheckoutBtn>
        <Button
          variation="primary"
          size="large"
          //  onClick={() => navigate('/checkout')}
        >
          Proceed To XXX
        </Button>
      </CheckoutBtn>
    </Table.Row>
  );
}

export default OrderSummaryRow;
