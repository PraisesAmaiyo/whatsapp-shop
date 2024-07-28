import styled from 'styled-components';

import Header from '../ui/Header';
import PaymentHeader from '../features/payment/PaymentHeader';

import Footer from '../ui/Footer';
import Benefits from '../ui/Benefits';
import Heading from '../ui/Heading';
import FileInput from '../ui/FileInput';
import FormRow from '../ui/FormRow';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 1.2rem 4.8rem;
`;

const GradientWrapper = styled.div`
  background: radial-gradient(
      circle at center top,
      var(--color-brand-500),
      var(--color-brand-900) 70%
    ),
    linear-gradient(to bottom, var(--color-brand-900), var(--color-brand-900));
  color: var(--color-grey-50);
`;

const WhiteWrapper = styled.div`
  background-color: var(--color-brand-50);
  color: var(--color-brand-950);
`;

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
    display: grid;
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

function Payment() {
  return (
    <>
      <GradientWrapper>
        <Container>
          <Header />
          <PaymentHeader />
        </Container>
      </GradientWrapper>
      <WhiteWrapper>
        <Container>
          <Heading as="h2">
            Copy the account number and pay the total of (####) to the account
            below.
          </Heading>
          <Heading as="h2">
            After payment have beeen made, kindly screenshot, save and upload
            the payment receipt in the box below for confirmation
          </Heading>
          <AccountDetails>
            <Heading as="h1">Praises Arerosuo Amaiyo</Heading>
            <Heading as="h1">2250188598</Heading>
            <Heading as="h1">UBA (United Bank of Africa)</Heading>
          </AccountDetails>

          <StyledPaymentFile>
            <div className="center">
              <FormRow
                orientation="vertical"
                label="Paste Payment Receipt here"
              >
                <FileInput accept="image/*" />
              </FormRow>
            </div>
          </StyledPaymentFile>

          <StyledPaymentFile>
            <div className="center">
              <span>Paste Payment Receipt here</span>
              <input type="file" accept="image/*" className="paymentSl" />
            </div>
          </StyledPaymentFile>
          <Benefits />
        </Container>
        <Footer />
      </WhiteWrapper>
    </>
  );
}

export default Payment;
