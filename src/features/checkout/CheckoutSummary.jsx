import { OrderSummary } from '../cart/storeCartItems';
import OrderSummaryRow from './OrderSummaryRow';

import Table from '../../ui/Table';

function CheckoutSummary() {
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

export default CheckoutSummary;