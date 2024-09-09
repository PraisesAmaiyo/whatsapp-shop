// import { createContext, useContext, useEffect, useState } from 'react';
// import { useAddItemToCart } from '../context/AddItemToCartContext';

// const ItemQuantityContext = createContext();

// export const ItemQuantityProvider = ({ children }) => {
//   const { cartItems } = useAddItemToCart();
//   const [cartItemsWithQuantity, setCartItemsWithQuantity] = useState([]);

//   useEffect(() => {
//     setCartItemsWithQuantity(cartItems);
//   }, [cartItems]);

//   console.log(cartItemsWithQuantity);

//   const updateItemQuantity = (itemId, newQuantity) => {
//     setCartItemsWithQuantity((prevCartItems) =>
//       prevCartItems.map((item) =>
//         item.id === itemId
//           ? {
//               ...item,
//               quantity: newQuantity,
//               totalItemPrice: item.newArrivalPrice * newQuantity,
//             }
//           : item
//       )
//     );
//   };

//   const totalPrice = cartItemsWithQuantity.reduce(
//     (sum, item) => sum + item.totalItemPrice,
//     0
//   );

//   return (
//     <ItemQuantityContext.Provider
//       value={{ cartItemsWithQuantity, updateItemQuantity, totalPrice }}
//     >
//       {children}
//     </ItemQuantityContext.Provider>
//   );
// };

// export const useItemQuantity = () => useContext(ItemQuantityContext);
