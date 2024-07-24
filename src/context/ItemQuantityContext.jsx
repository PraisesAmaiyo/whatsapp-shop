import { createContext, useContext, useState } from 'react';
import { cartItems as initialCartItems } from '../features/cart/storeCartItems';

const ItemQuantityContext = createContext();

export const ItemQuantityProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateItemQuantity = (itemId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: newQuantity,
              totalItemPrice: item.cartItemsPrice * newQuantity,
            }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.totalItemPrice,
    0
  );

  return (
    <ItemQuantityContext.Provider
      value={{ cartItems, updateItemQuantity, totalPrice }}
    >
      {children}
    </ItemQuantityContext.Provider>
  );
};

export const useItemQuantity = () => useContext(ItemQuantityContext);
