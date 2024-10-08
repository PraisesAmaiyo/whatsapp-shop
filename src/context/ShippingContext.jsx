import { createContext, useContext, useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

const ShippingContext = createContext();

export const ShippingProvider = ({ children }) => {
  const [shippingDetails, setShippingDetails] = useLocalStorageState(
    {
      location: null,
      amount: null,
    },
    'shippingDetails'
  );

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

function useShipping() {
  const context = useContext(ShippingContext);
  if (context === undefined)
    throw new Error('ShippingContext was used outside of ShippingProvider');

  return context;
}

// export const useShipping = () => useContext(ShippingContext);

export { useShipping };
