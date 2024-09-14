import { StyleSheetManager } from 'styled-components';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import { ShippingProvider } from './context/ShippingContext';
import { AddItemToCartProvider } from './context/AddItemToCartContext';
import ScrollToTop from './services/ScrollToTop';

import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import PageNotFound from './pages/PageNotFound';
import OrderCompleted from './pages/OrderCompleted';
import ContactUs from './pages/ContactUsPage';

import AppLayout from './ui/AppLayout';
import { Toaster } from 'react-hot-toast';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <AppLayout />
      </>
    ),
    children: [
      { index: true, element: <Navigate replace to="home" /> },
      {
        path: '/home',
        element: <Homepage />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <ProductDetails />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/payment',
        element: <Payment />,
      },
      {
        path: '/order-completed',
        element: <OrderCompleted />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <AddItemToCartProvider>
        <ShippingProvider>
          <StyleSheetManager shouldForwardProp={(prop) => prop !== 'variation'}>
            <RouterProvider router={router} />
          </StyleSheetManager>

          <Toaster
            position="top=center"
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 4000,
              },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: 'var(--color-grey-0',
                color: 'var(--color-grey-700)',
              },
            }}
          />
        </ShippingProvider>
      </AddItemToCartProvider>
    </>
  );
}

export default App;

// function Apps() {
//   return (
//     <>
//       <GlobalStyles />
//       <AddItemToCartProvider>
//         <ShippingProvider>
//           <createBrowserRouter>
//             <ScrollToTop />
//             <StyleSheetManager
//               shouldForwardProp={(prop) => prop !== 'variation'}
//             >
//               <Routes>
//                 <Route element={<AppLayout />}>
//                   <Route index element={<Navigate replace to="home" />} />
//                   <Route path="home" element={<Homepage />} />
//                   <Route path="products" element={<Products />} />
//                   <Route path="products/:id" element={<ProductDetails />} />
//                   <Route path="cart" element={<Cart />} />
//                   <Route path="checkout" element={<Checkout />} />
//                   <Route path="payment" element={<Payment />} />
//                   <Route path="order-completed" element={<OrderCompleted />} />
//                   <Route path="contact" element={<ContactUs />} />

//                   <Route path="*" element={<PageNotFound />} />
//                 </Route>
//               </Routes>
//             </StyleSheetManager>
//           </createBrowserRouter>

//           <Toaster
//             position="top=center"
//             gutter={12}
//             containerStyle={{ margin: '8px' }}
//             toastOptions={{
//               success: {
//                 duration: 3000,
//               },
//               error: {
//                 duration: 4000,
//               },
//               style: {
//                 fontSize: '16px',
//                 maxWidth: '500px',
//                 padding: '16px 24px',
//                 backgroundColor: 'var(--color-grey-0',
//                 color: 'var(--color-grey-700)',
//               },
//             }}
//           />
//         </ShippingProvider>
//       </AddItemToCartProvider>
//     </>
//   );
// }

// export default App;
