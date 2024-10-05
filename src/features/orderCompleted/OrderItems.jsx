import styled from 'styled-components';
import Table from '../../ui/Table';
import OrderItemsRow from './OrderItemsRow';
import Spinner from '../../ui/Spinner';
import { useFetchOrder } from '../../context/FetchOrderContext';

const Container = styled.div`
  margin: 4rem auto;
  width: 70%;
`;

function OrderItems() {
  const { order } = useFetchOrder();

  if (!order) {
    return <Spinner />;
  }

  const { cartItems } = order;

  return (
    <Container>
      <Table columns="30rem 8rem auto 9rem">
        <Table.Header role="row">
          <div>Product</div>
          <div>Price</div>
          <div className="quantity">Quantity</div>
          <div>Subtotal</div>
        </Table.Header>

        <Table.Body
          data={cartItems}
          render={(item) => <OrderItemsRow item={item} key={item.id} />}
        />
      </Table>
    </Container>
  );
}

export default OrderItems;
