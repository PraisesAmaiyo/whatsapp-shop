import styled from 'styled-components';

import { FaTimes } from 'react-icons/fa';

import Table from '../../ui/Table';
import ButtonText from '../../ui/ButtonText';
import UpdateItemQuantity from '../../ui/UpdateItemQuantity';
import { formatNumber } from '../../utils/helpers';

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

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

const SubTotal = styled.div`
  font-weight: 600;
`;

const DeleteItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    padding: 1rem;
    border-radius: var(--border-radius-full);
    background-color: transparent;
    outline: 1.5px solid var(--color-brand-600);

    svg {
      color: var(--color-brand-600);
    }

    &:hover {
      background-color: var(--color-brand-200);
      svg {
        transform: scale(1.1);
      }
    }
  }
`;

function CartRow({ cartItem }) {
  const {
    cartItemsImage,
    cartItemsName,
    cartItemsPrice,
    quantity,
    id: itemId,
    totalItemPrice,
  } = cartItem;

  return (
    <Table.Row>
      <Group>
        <Img src={cartItemsImage} />
        <Name>{cartItemsName}</Name>
      </Group>

      <Price>
        <span className="naira-sign">₦</span>
        {formatNumber(cartItemsPrice)}
      </Price>

      <UpdateItemQuantity quantity={quantity} itemId={itemId} />

      <SubTotal>
        <span className="naira-sign">₦</span>
        {formatNumber(totalItemPrice)}
      </SubTotal>

      <DeleteItem>
        <ButtonText>
          <div>
            <FaTimes />
          </div>
        </ButtonText>
      </DeleteItem>
    </Table.Row>
  );
}

export default CartRow;
