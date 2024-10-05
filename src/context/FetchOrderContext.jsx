import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../services/ApiProducts';

const FetchOrderContext = createContext();

export const FetchOrderProvider = ({ children }) => {
  const [order, setOrder] = useState(null);
  const { id: orderID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Hello', orderID);
        const receivedOrder = await getOrder(orderID);

        console.log(receivedOrder);
        setOrder(receivedOrder[0]);
      } catch (error) {}
    };

    if (orderID) fetchData();
  }, [orderID]);

  return (
    <FetchOrderContext.Provider value={{ order }}>
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
