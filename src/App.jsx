import { StyleSheetManager } from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import { ShippingProvider } from './context/ShippingContext';
import { ItemQuantityProvider } from './context/ItemQuantityContext';
import ScrollToTop from './services/ScrollToTop';

import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import PageNotFound from './pages/PageNotFound';
import OrderCompleted from './pages/OrderCompleted';

import AppLayout from './ui/AppLayout';

function App() {
  return (
    <>
      <GlobalStyles />
      <ItemQuantityProvider>
        <ShippingProvider>
          <BrowserRouter>
            <ScrollToTop />
            <StyleSheetManager
              shouldForwardProp={(prop) => prop !== 'variation'}
            >
              <Routes>
                <Route element={<AppLayout />}>
                  <Route index element={<Navigate replace to="home" />} />
                  <Route path="home" element={<Homepage />} />
                  <Route path="products" element={<ProductDetails />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="payment" element={<Payment />} />
                  <Route path="order-completed" element={<OrderCompleted />} />

                  <Route path="*" element={<PageNotFound />} />
                </Route>
              </Routes>
            </StyleSheetManager>
          </BrowserRouter>
        </ShippingProvider>
      </ItemQuantityProvider>
    </>
  );
}

export default App;
