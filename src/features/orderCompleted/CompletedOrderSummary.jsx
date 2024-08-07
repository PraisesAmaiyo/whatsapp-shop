import { useItemQuantity } from '../../context/ItemQuantityContext';
import Table from '../../ui/Table';
import CompletedOrderSummaryRow from './CompletedOrderSummaryRow';

function CompletedOrderSummary() {
  const { totalPrice } = useItemQuantity();

  //   Table.Body takes in a data which shoukd be an array of object, however the `totalPrice` from context is just a number alone. so I created an array for it.
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
          <CompletedOrderSummaryRow summary={summary} key={summary} />
        )}
      />
    </Table>
  );
}

export default CompletedOrderSummary;
