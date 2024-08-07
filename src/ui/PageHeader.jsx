import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Heading from './Heading';

const StyledPageHeader = styled.div`
  /* padding: 3rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

function PageHeader() {
  const urlLocation = useLocation();

  const isOrderCompletePage = urlLocation.pathname === '/order-completed';
  const orderCompletePageText = isOrderCompletePage ? 'Order Completed' : '';

  const isProductPage = urlLocation.pathname === '/products';
  const productPageText = isProductPage ? 'Products/Shirt/Product Details' : '';

  const isCartPage = urlLocation.pathname === '/cart';
  const cartPageText = isCartPage ? 'Shopping Cart' : '';

  const isCheckoutPage = urlLocation.pathname === '/checkout';
  const checkoutPageText = isCheckoutPage ? 'Shopping Cart/Checkout' : '';

  const isPaymentPage = urlLocation.pathname === '/payment';
  const paymentPageText = isPaymentPage ? 'Shopping Cart/Checkout/Payment' : '';

  return (
    <StyledPageHeader>
      {isOrderCompletePage ? (
        <Heading as="h2">{orderCompletePageText}</Heading>
      ) : (
        ''
      )}

      {isProductPage ? <Heading as="h2">{productPageText}</Heading> : ''}

      {isCartPage ? <Heading as="h2">{cartPageText}</Heading> : ''}

      {isCheckoutPage ? <Heading as="h2">{checkoutPageText}</Heading> : ''}

      {isPaymentPage ? <Heading as="h2">{paymentPageText}</Heading> : ''}
    </StyledPageHeader>
  );
}

export default PageHeader;
