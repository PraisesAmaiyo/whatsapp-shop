import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useItemQuantity } from '../../context/ItemQuantityContext';
import { formatNumber } from '../../utils/helpers';

import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';

const AccountDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 4rem;
`;

const StyledPaymentFile = styled.div`
  display: flex;
  justify-content: center;

  .center {
    margin-top: 4rem;
    background-color: var(--color-brand-100);
    height: 15rem;
    width: 70%;
    border-radius: var(--border-radius-lg);
    display: flex;
    flex-direction: column;
    /* grid-template-columns: 70%; */
    justify-content: center;
    text-align: center;
    align-items: center;
    outline: 1.5px solid var(--color-brand-300);
  }

  input[type='file'] {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  justify-content: center;
`;

function PaymentInfo() {
  const navigate = useNavigate();
  const { totalPrice } = useItemQuantity();

  return (
    <>
      <Heading as="h2">
        Copy the account number and pay the total of
        <span className="naira-sign"> ₦{formatNumber(totalPrice)} </span>
        to the account below.
      </Heading>
      <Heading as="h2">
        After payment have beeen made, kindly screenshot, save and upload the
        payment receipt in the box below for confirmation
      </Heading>

      <AccountDetails>
        <Heading as="h1">Praises Arerosuo Amaiyo</Heading>
        <Heading as="h1">2250188598</Heading>
        <Heading as="h1">UBA (United Bank of Africa)</Heading>
      </AccountDetails>

      <StyledPaymentFile>
        <div className="center">
          <Heading as="h2">Paste Payment Receipt here</Heading>
          <FileInput accept="image/*" />
        </div>
      </StyledPaymentFile>

      <ButtonContainer>
        <Button
          variation="secondary"
          size="large"
          onClick={() => navigate('/order-completed')}
        >
          Confirm Payment
        </Button>
      </ButtonContainer>
    </>
  );
}

export default PaymentInfo;
