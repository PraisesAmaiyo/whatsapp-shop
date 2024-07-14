import { StyleSheetManager } from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import ScrollToTop from './services/ScrollToTop';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'variation'}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Homepage />} />
              <Route path="products" element={<ProductDetails />} />

              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </StyleSheetManager>
      </BrowserRouter>
    </>
  );
}

export default App;
