import { createContext, useContext, useState } from 'react';
import { cartItems as initialCartItems } from '../features/cart/storeCartItems';

const AddItemToCartContext = createContext();

export const AddItemToCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateCartItems = (newCartItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((item) => item.id === newCartItem.id);

      if (itemExists) {
        console.log('Item is already in the cart');
        return prevItems;
      } else {
        return [...prevItems, newCartItem];
      }
    });
  };

  return (
    <AddItemToCartContext.Provider value={{ cartItems, updateCartItems }}>
      {children}
    </AddItemToCartContext.Provider>
  );
};

export const useAddItemToCart = () => useContext(AddItemToCartContext);
