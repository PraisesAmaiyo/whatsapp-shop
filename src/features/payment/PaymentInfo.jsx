import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

import { useAddItemToCart } from '../../context/AddItemToCartContext';
import { formatNumber, generateOrderID } from '../../utils/helpers';

import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import { useShipping } from '../../context/ShippingContext';
import { useLocalStorageState } from '../../hooks/useLocalStorageState';
import { useEffect, useState } from 'react';
import { useOrderId } from '../../context/OrderIdContext';
import { createOrder } from '../../services/ApiProducts';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { totalPrice, cartItems, setCartItems } = useAddItemToCart();

  const { shippingDetails } = useShipping();
  const { amount: shippingFee } = shippingDetails;
  const { getOrderID, setOrderID } = useOrderId();

  useEffect(() => {
    // Check if orderID exists
    const existingOrderID = getOrderID();
    if (!existingOrderID) {
      // Generate and set a new order ID if it doesn't exist
      const newOrderID = generateOrderID(6);
      setOrderID(newOrderID);
    }
  }, [getOrderID, setOrderID]);

  const orderID = getOrderID();

  const orderLink = `http://localhost:5173/order-completed/${orderID}`;

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
      order_link: orderLink,
      total_price: formatNumber(totalPrice),
      orderID: orderID,
      order_date: new Date().toLocaleDateString(),
      payment_screenshot:
        'https://media.istockphoto.com/id/1169144637/vector/atm-bill-in-slot-vector-realistic-illustrations-set.jpg?s=612x612&w=0&k=20&c=lOFwWer_E14As5LzlJCAHNc_Y0Ee3Kx50-yg0IxBVVM=',
    };

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

  async function handlePaymentSubmission() {
    const orderData = {
      orderID,
      cartItems,
      totalPrice,
      shippingFee,
      // Add other relevant details
    };
    setIsSubmitting(true);

    if (cartItems.length > 0) {
      try {
        console.log(orderData);
        const createdOrder = await createOrder(orderData);

        if (createdOrder) {
          //  localStorage.removeItem('cartItems');
          //  setCartItems([]);
          navigate('/order-completed');
          setIsSubmitting(false);
        }
      } catch (error) {
        console.error('Failed to create order:', error);
      }
    } else {
      console.error('Cart is empty, cannot complete payment.');
    }
  }

  return (
    <>
      <Heading as="h2">
        Copy the account number and pay the total of
        <span className="naira-sign">
          ₦{formatNumber(totalPrice + shippingFee)}
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
          disabled={isSubmitting}
          onClick={() => handlePaymentSubmission()}
        >
          {isSubmitting ? 'Placing order....' : ' Confirm Payment'}
        </Button>
      </ButtonContainer>
    </>
  );
}

export default PaymentInfo;
