import { createContext, useContext } from 'react';

// Create context
const OrderIdContext = createContext();

// Provide the context
export const OrderIdProvider = ({ children }) => {
  const getOrderID = () => {
    const orderID = localStorage.getItem('orderID');
    return orderID ? orderID.replace(/"/g, '').trim() : null;
  };

  const setOrderID = (id) => {
    localStorage.setItem('orderID', id);
  };

  return (
    <OrderIdContext.Provider value={{ getOrderID, setOrderID }}>
      {children}
    </OrderIdContext.Provider>
  );
};

// Custom hook to access the context
function useOrderId() {
  const context = useContext(OrderIdContext);
  if (context === undefined)
    throw new Error('OrderIdContext was used outside of OrderIdProvider');

  return context;
}

export { useOrderId };
