import { createContext, useContext, useState } from 'react';

const AddItemToCartContext = createContext();

export const AddItemToCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (newCartItem) => {
    const {
      newArrivalImage,
      newArrivalName,
      newArrivalPrice,
      similarItemsImage,
      similarItemsName,
      similarItemsPrice,
      frequentlyViewedItemsImage,
      frequentlyViewedItemsName,
      frequentlyViewedItemsPrice,
    } = newCartItem;

    const newCartItemPrice =
      newArrivalPrice || similarItemsPrice || frequentlyViewedItemsPrice;

    const newCartItemName =
      newArrivalName || similarItemsName || frequentlyViewedItemsName;

    const newCartItemImage =
      newArrivalImage || similarItemsImage || frequentlyViewedItemsImage;

    setCartItems((prevItems) => {
      const itemExists = prevItems.some((item) => item.id === newCartItem.id);

      if (itemExists) {
        console.log('Item is already in the cart');
        return prevItems;
      } else {
        const quantity = newCartItem.quantity || 1;

        const itemWithTotalPrice = {
          ...newCartItem,
          newCartItemName,
          newCartItemImage,
          newCartItemPrice,
          quantity,
          totalItemPrice: newCartItemPrice * quantity,
        };

        return [...prevItems, itemWithTotalPrice];
      }
    });
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        const itemPrice =
          item.newArrivalPrice ||
          item.similarItemsPrice ||
          item.frequentlyViewedItemsPrice;

        return item.id === itemId
          ? {
              ...item,
              quantity: newQuantity,
              totalItemPrice: itemPrice * newQuantity,
            }
          : item;
      })
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum +
      (item.totalItemPrice
        ? item.totalItemPrice
        : (item.newArrivalPrice ||
            item.similarItemsPrice ||
            item.frequentlyViewedItemsPrice) * item.quantity),
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

function useAddItemToCart() {
  const context = useContext(AddItemToCartContext);
  if (context === undefined)
    throw new Error(
      'AddItemToCartContext was used outside of AddItemToCartProvider'
    );

  return context;
}

export { useAddItemToCart };

// export const useAddItemToCart = () => useContext(AddItemToCartContext);
