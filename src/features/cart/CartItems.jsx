import Table from '../../ui/Table';
import CartRow from './CartRow';
import { cartItems } from './storeCartItems';

function CartItems() {
  return (
    <Table columns="30rem 8rem auto 9rem 6rem">
      <Table.Header role="row">
        <div>Product</div>
        <div>Price</div>
        <div className="quantity">Quantity</div>
        <div>Subtotal</div>
        <div></div>
      </Table.Header>

      <Table.Body
        data={cartItems}
        render={(cartItem) => <CartRow cartItem={cartItem} key={cartItem.id} />}
      />
    </Table>
  );
}

export default CartItems;
