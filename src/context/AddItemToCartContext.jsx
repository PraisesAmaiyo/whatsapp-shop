import { createContext, useContext, useState } from 'react';

const AddItemToCartContext = createContext();

export const AddItemToCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (newCartItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((item) => item.id === newCartItem.id);

      if (itemExists) {
        console.log('Item is already in the cart');
        return prevItems;
      } else {
        const quantity = newCartItem.quantity || 1;

        const itemWithTotalPrice = {
          ...newCartItem,
          quantity,
          totalItemPrice: newCartItem.newArrivalPrice * newCartItem.quantity,
        };

        return [...prevItems, itemWithTotalPrice];
      }
    });
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: newQuantity,
              totalItemPrice: item.newArrivalPrice * newQuantity,
            }
          : item
      )
    );
  };
  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum +
      (item.totalItemPrice
        ? item.totalItemPrice
        : item.newArrivalPrice * item.quantity),
    0
  );

  //   const totalPrice = cartItems.reduce(
  //     (sum, item) => sum + item.totalItemPrice,
  //     0
  //   );

  return (
    <AddItemToCartContext.Provider
      value={{ cartItems, addItemToCart, updateItemQuantity, totalPrice }}
    >
      {children}
    </AddItemToCartContext.Provider>
  );
};

export const useAddItemToCart = () => useContext(AddItemToCartContext);
