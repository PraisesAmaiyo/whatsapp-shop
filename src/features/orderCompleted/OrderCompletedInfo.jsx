import styled from 'styled-components';
import orderCompletedImage from '../../assets/images/order-complete.png';
import Heading from '../../ui/Heading';

const OrderCompletedImageContainer = styled.div`
  margin: 3rem auto;
  height: 16rem;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 100%;
    width: auto;
    margin: 0 auto;
  }
`;

const OrderCompletedTextContainer = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

function OrderCompletedInfo() {
  return (
    <>
      <OrderCompletedImageContainer>
        <img
          src={orderCompletedImage}
          alt="Order completed ceebration visual"
        />
      </OrderCompletedImageContainer>

      <OrderCompletedTextContainer>
        <Heading as="h2">Thank you for your purchase</Heading>
        <Heading as="h3">Your order has been successfully processed.</Heading>
        <Heading as="h3">Here are the details</Heading>
      </OrderCompletedTextContainer>
    </>
  );
}

export default OrderCompletedInfo;
