import { useLocation, useParams } from 'react-router-dom';
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
  const { id } = useParams();

  const isOrderCompletePage = urlLocation.pathname === '/order-completed';
  const orderCompletePageText = isOrderCompletePage ? 'Order Completed' : '';

  const isProductPage = urlLocation.pathname === '/products';
  const productPageText = isProductPage ? 'Products' : '';

  const isProductInfoPage = id && urlLocation.pathname.startsWith('/products');
  const productInfoPageText = isProductInfoPage
    ? 'Products/Shirt/Product Details'
    : '';

  const isCartPage = urlLocation.pathname === '/cart';
  const cartPageText = isCartPage ? 'Shopping Cart' : '';

  const isCheckoutPage = urlLocation.pathname === '/checkout';
  const checkoutPageText = isCheckoutPage ? 'Shopping Cart/Checkout' : '';

  const isPaymentPage = urlLocation.pathname === '/payment';
  const paymentPageText = isPaymentPage ? 'Shopping Cart/Checkout/Payment' : '';

  const isContactUsPage = urlLocation.pathname === '/contact';
  const ContactUsPagText = isContactUsPage ? 'Contact' : '';

  return (
    <StyledPageHeader>
      {isOrderCompletePage && (
        <Heading as="h2">{orderCompletePageText}</Heading>
      )}

      {isProductPage && <Heading as="h2">{productPageText}</Heading>}

      {isProductInfoPage && <Heading as="h2">{productInfoPageText}</Heading>}

      {isCartPage && <Heading as="h2">{cartPageText}</Heading>}

      {isCheckoutPage && <Heading as="h2">{checkoutPageText}</Heading>}

      {isPaymentPage && <Heading as="h2">{paymentPageText}</Heading>}

      {isContactUsPage && <Heading as="h2">{ContactUsPagText}</Heading>}

      {!isOrderCompletePage &&
        !isProductPage &&
        !isProductInfoPage &&
        !isCartPage &&
        !isCheckoutPage &&
        !isPaymentPage &&
        !isContactUsPage && <Heading as="h2">Page Not Found</Heading>}
    </StyledPageHeader>
  );
}

export default PageHeader;
