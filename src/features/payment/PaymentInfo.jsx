import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

import { useAddItemToCart } from '../../context/AddItemToCartContext';
import { formatNumber } from '../../utils/helpers';

import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import { useShipping } from '../../context/ShippingContext';

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
  const { totalPrice, cartItems } = useAddItemToCart();

  console.log(cartItems);

  const { shippingDetails } = useShipping();
  const { amount } = shippingDetails;

  const sendOrderConfirmationEmail = (
    orderDetails,
    customerDetails,
    paymentScreenshot
  ) => {
    const orderSummaryHTML = `
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price (₦)</th>
              <th>Total Price (₦)</th>
            </tr>
          </thead>
          <tbody>
            ${cartItems
              .map(
                (item) => `
                <tr>
                <td>
                   <div style="display: flex; align-items: center; gap: 5px;">
                      <img src="${
                        item.newCartItemImage
                      }" alt="Item Image" style="max-width: 40px; height: auto;" />
                      <p style="font-size: 13px; font-weight: bold; margin: auto 5px">${
                        item.newCartItemName
                      }</p>
                   </div>
                </td>

                    <td>${item.quantity}</td>
                    <td>${formatNumber(item.newCartItemPrice)}</td>
                    <td>${formatNumber(item.totalItemPrice)}</td>
                  </tr>`
              )
              .join('')}
          </tbody>
        </table>
      `;

    const templateParams = {
      // order_summary: orderDetails,
      // customer_name: customerDetails.name,
      // customer_email: customerDetails.email,
      // customer_phone: customerDetails.phone,
      // payment_screenshot: paymentScreenshot,
      order_summary: orderSummaryHTML,
      customer_name: 'Praises Amaiyo',
      customer_email: 'amaiyo.praises@gmail.com',
      customer_phone: '+2347057540749',
      total_price: formatNumber(totalPrice),
      orderID: '123455',
      order_date: new Date().toLocaleDateString(),
      payment_screenshot:
        'https://media.istockphoto.com/id/1169144637/vector/atm-bill-in-slot-vector-realistic-illustrations-set.jpg?s=612x612&w=0&k=20&c=lOFwWer_E14As5LzlJCAHNc_Y0Ee3Kx50-yg0IxBVVM=',
    };

    console.log(templateParams);

    emailjs
      .send(
        'service_7mqikbg',
        'template_4kintgm',
        templateParams,
        'Pst9J84YbTStWUs0M',

        {
          is_html: true,
        }
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((err) => {
        console.log('Failed to send email:', err);
      });
  };

  const checkoutCart = () => {
    const phoneNumber = '+2348130909020'; // Your WhatsApp number
    const cartDetails = cartItems
      .map(
        (
          item
        ) => `*${item.quantity}x* ${item.newCartItemName} = *₦${item.newCartItemPrice}*
      `
      )
      .join('\n');

    const message = encodeURIComponent(
      `Hello, I would like to order the following items:\n\n${cartDetails}\n\nCart Total: *₦${formatNumber(
        totalPrice + amount
      )}*\n\nCustomer: Praises +2348130909020\n\nPayment Receipt: LINK_TO_PAYMENT-RECEIPT`
    );

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open the URL to trigger WhatsApp with the pre-filled message
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <Heading as="h2">
        Copy the account number and pay the total of
        <span className="naira-sign">
          {' '}
          ₦{formatNumber(totalPrice + amount)}{' '}
        </span>
        to the account below.
      </Heading>
      <Heading as="h2">
        After payment have been made, kindly screenshot, save and upload the
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
          onClick={() => {
            sendOrderConfirmationEmail();
            // navigate('/order-completed');
            //  onClick={() => checkoutCart()}
          }}
        >
          Confirm Payment
        </Button>
      </ButtonContainer>
    </>
  );
}

export default PaymentInfo;
