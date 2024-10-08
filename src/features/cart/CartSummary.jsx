import { useAddItemToCart } from '../../context/AddItemToCartContext';
import Table from '../../ui/Table';
import OrderSummaryRow from './OrderSummaryRow';

function CartSummary({ onProceed }) {
  const { totalPrice } = useAddItemToCart();

  //  NOTE: Table.Body takes in a data which shoukd be an array of object, however the `totalPrice` from context is just a number alone. so I created an array for it.
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
          <OrderSummaryRow
            summary={summary}
            key={summary}
            onProceed={onProceed}
          />
        )}
      />
    </Table>
  );
}

export default CartSummary;
