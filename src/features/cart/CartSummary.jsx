import Table from '../../ui/Table';
import OrderSummaryRow from './OrderSummaryRow';
import { OrderSummary } from './storeCartItems';

function CartSummary() {
  return (
    <Table columns="1fr ">
      <Table.Header role="row">
        <div>Order Summary</div>
      </Table.Header>

      <Table.Body
        data={OrderSummary}
        render={(summary) => (
          <OrderSummaryRow summary={summary} key={summary} />
        )}
      />
    </Table>
  );
}

export default CartSummary;
