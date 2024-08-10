import styled from 'styled-components';
import Heading from '../../ui/Heading';

const TextInfro = styled.div`
  text-align: left;
  margin: 4rem auto;
  width: 70%;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: ${(props) => (props.as === 'h3' ? '1rem' : '0')};

  a {
    color: var(--color-gold-500);

    &:hover {
      color: var(--color-gold-600);
      text-decoration: underline;
    }
    &:active {
      color: var(--color-gold-800);
      text-decoration: none;
    }
  }
`;

function OrderStatusText() {
  return (
    <TextInfro>
      <Heading as="h1">Order Status</Heading>

      <StyledHeading as="h3">
        Your order is now complete and will be processed for shipment. You wil
        receive a confirmation email shortly with tracking information once your
        items have been dispatched.
      </StyledHeading>

      <StyledHeading as="h3">
        Thank you for shopping with us! If you have any questions or concerns,
        please don't hesitate to contact our customer support at
      </StyledHeading>

      <StyledHeading as="h3">
        Email:{' '}
        <a href="mailto:amaiyo.praises@gmail.com">amaiyo.praises@gmail.com</a>
      </StyledHeading>

      <StyledHeading as="h3">
        Phone No: <a href="tel:+2348130909020">+2348130909020</a>
      </StyledHeading>
    </TextInfro>
  );
}

export default OrderStatusText;
