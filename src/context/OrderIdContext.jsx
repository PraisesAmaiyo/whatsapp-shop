import { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

// Create context
const OrderIdContext = createContext();

// Provide the context
export const OrderIdProvider = ({ children }) => {
  const [orderID, setOrderID] = useLocalStorageState([], 'orderID');
  //   const [orderID, setOrderID] = useLocalStorageState([], 'orderID');

  // Sync orderID with localStorage whenever it changes
  useEffect(() => {
    if (orderID) {
      localStorage.setItem('orderID', orderID);
    }
  }, [orderID]);

  return (
    <OrderIdContext.Provider value={{ orderID, setOrderID }}>
      {children}
    </OrderIdContext.Provider>
  );
};

// Custom hook to access the context

function useOrderId() {
  const context = useContext(OrderIdContext);
  if (context === undefined)
    throw new Error('OrderIdContext was used outside of ShippingProvider');

  return context;
}

export { useOrderId };
