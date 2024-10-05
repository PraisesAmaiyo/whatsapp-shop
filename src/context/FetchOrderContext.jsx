import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../services/ApiProducts';

const FetchOrderContext = createContext();

export const FetchOrderProvider = ({ children }) => {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id: orderID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const receivedOrder = await getOrder(orderID);

        setOrder(receivedOrder[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (orderID) fetchData();
  }, [order, orderID]);

  return (
    <FetchOrderContext.Provider value={{ order, isLoading, error }}>
      {children}
    </FetchOrderContext.Provider>
  );
};

function useFetchOrder() {
  const context = useContext(FetchOrderContext);
  if (context === undefined)
    throw new Error('FetchOrderContext was used outside of FetchOrderProvider');

  return context;
}

export { useFetchOrder };
