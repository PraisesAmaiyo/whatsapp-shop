import { useItemQuantity } from '../../context/ItemQuantityContext';
import Table from '../../ui/Table';
import OrderSummaryRow from './OrderSummaryRow';

function CartSummary() {
  const { totalPrice } = useItemQuantity();

  //   Table.Body takes in a data which shoukd be an array of object, however the `totalPrice` from context is jsut a number alone. sp i created an array for it
  const orderSummary = [
    {
      subtotal: totalPrice,
    },
  ];

  return (
    <Table columns="1fr ">
      <Table.Header role="row">
        <div>Order Summary</div>
      </Table.Header>

      <Table.Body
        data={orderSummary}
        render={(summary) => (
          <OrderSummaryRow summary={summary} key={summary} />
        )}
      />
    </Table>
  );
}

export default CartSummary;
