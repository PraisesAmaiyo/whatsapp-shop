import styled from 'styled-components';
import { useAddItemToCart } from '../../context/AddItemToCartContext';
import Table from '../../ui/Table';
import CompletedOrderSummaryRow from './CompletedOrderSummaryRow';
import { useFetchOrder } from '../../context/FetchOrderContext';
import Spinner from '../../ui/Spinner';

const Container = styled.div`
  margin: 0 auto;
  width: 70%;
`;

function CompletedOrderSummary() {
  //   Table.Body takes in a data which shoukd be an array of object, however the `totalPrice` from context is just a number alone. so I created an array for it.

  const { order } = useFetchOrder();

  if (!order) {
    return <Spinner />;
  }

  console.log(order);

  const { totalPrice, shippingFee } = order;

  const orderSummary = [
    {
      subtotal: totalPrice,
    },
  ];

  return (
    <Container>
      <Table columns="1fr ">
        <Table.Header role="row">
          <div>Order Summary</div>
        </Table.Header>

        <Table.Body
          data={orderSummary}
          render={(summary) => (
            <CompletedOrderSummaryRow
              summary={summary}
              key={summary}
              orderID={order.orderID}
              totalPrice={totalPrice}
              shippingFee={shippingFee}
            />
          )}
        />
      </Table>
    </Container>
  );
}

export default CompletedOrderSummary;
