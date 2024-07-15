import Table from '../../ui/Table';
import CabinRow from './CartRow';

import Menus from '../../ui/Menus';

import { cartItems } from './storeCartItems';

function CabinTable() {
  return (
    <Menus>
      <Table columns="30rem 1.8fr 2.2fr 1fr 1fr ">
        <Table.Header role="row">
          <div>Product</div>

          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={cartItems}
          render={(cartItem) => (
            <CabinRow cartItem={cartItem} key={cartItem.id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
