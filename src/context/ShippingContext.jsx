import { createContext, useContext, useState } from 'react';

const ShippingContext = createContext();

export const ShippingProvider = ({ children }) => {
  const [shippingDetails, setShippingDetails] = useState({
    location: null,
    amount: null,
  });

  const updateShippingDetails = (location, amount) => {
    setShippingDetails({ location, amount });
  };

  return (
    <ShippingContext.Provider
      value={{ shippingDetails, updateShippingDetails }}
    >
      {children}
    </ShippingContext.Provider>
  );
};

export const useShipping = () => useContext(ShippingContext);
