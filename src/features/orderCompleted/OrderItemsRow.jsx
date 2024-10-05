import styled from 'styled-components';

import Table from '../../ui/Table';
import { formatNumber } from '../../utils/helpers';

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 30rem;
`;

const Img = styled.img`
  display: block;
  height: 6rem;
  width: 6rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  border-radius: var(--border-radius-md);
`;

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
`;

const Price = styled.div`
  font-weight: 600;
`;

const Quantity = styled.div`
  font-weight: 600;
`;

const SubTotal = styled.div`
  font-weight: 600;
`;

function OrderItemsRow({ item }) {
  const {
    newCartItemName,
    newCartItemPrice,
    newCartItemImage,
    quantity,
    totalItemPrice,
  } = item;

  return (
    <Table.Row>
      <Group>
        <Img src={newCartItemImage} />
        <Name>{newCartItemName}</Name>
      </Group>

      <Price>
        <span className="naira-sign">₦</span>
        {formatNumber(totalItemPrice)}
      </Price>

      <Quantity>{quantity}</Quantity>

      <SubTotal>
        <span className="naira-sign">₦</span>
        {formatNumber(totalItemPrice > 0 ? totalItemPrice : newCartItemPrice)}
      </SubTotal>
    </Table.Row>
  );
}

export default OrderItemsRow;
