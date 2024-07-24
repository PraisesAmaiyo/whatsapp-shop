import cartItemsProductImage1 from '../../assets/images/cartItems/cartItems-1.jpg';
import cartItemsProductImage2 from '../../assets/images/cartItems/cartItems-2.jpg';
import cartItemsProductImage3 from '../../assets/images/cartItems/cartItems-3.jpg';
import cartItemsProductImage4 from '../../assets/images/cartItems/cartItems-4.jpg';
import cartItemsProductImage5 from '../../assets/images/cartItems/cartItems-5.jpg';

export const cartItems = [
  {
    id: 'cartItems1',
    cartItemsImage: cartItemsProductImage1,
    cartItemsName: 'Patek Phillipe',
    cartItemsPrice: 185000,
    cartItemsDiscount: 10,
    wishlist: false,
    quantity: 1,
    totalItemPrice: 185000,
  },
  {
    id: 'cartItems2',
    cartItemsImage: cartItemsProductImage2,
    cartItemsName: 'Smith Jeans Shirt ',
    cartItemsPrice: 26000,
    cartItemsDiscount: 5,
    wishlist: false,
    quantity: 2,
    totalItemPrice: 52000,
  },
  {
    id: 'cartItems3',
    cartItemsImage: cartItemsProductImage3,
    cartItemsName: 'Alexander McQUEEN Shoe',
    cartItemsPrice: 35000,
    cartItemsDiscount: 15,
    wishlist: true,
    quantity: 3,
    totalItemPrice: 105000,
  },
  {
    id: 'cartItems4',
    cartItemsImage: cartItemsProductImage4,
    cartItemsName: 'Balenciaga Black Jean',
    cartItemsPrice: 30000,
    cartItemsDiscount: 5,
    wishlist: true,
    quantity: 1,
    totalItemPrice: 30000,
  },
  {
    id: 'cartItems5',
    cartItemsImage: cartItemsProductImage5,
    cartItemsName: 'Cartier Watch (+strap)',
    cartItemsPrice: 23000,
    cartItemsDiscount: 5,
    wishlist: true,
    quantity: 2,
    totalItemPrice: 46000,
  },
];

// const updateOrderSummary = (cartItems) => {
//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.cartItemsPrice,
//     0
//   );

//   return {
//     subtotal,
//   };
// };

// export const OrderSummary = [updateOrderSummary(cartItems)];
