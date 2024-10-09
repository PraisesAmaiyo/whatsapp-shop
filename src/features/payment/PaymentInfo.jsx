import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

import { useAddItemToCart } from '../../context/AddItemToCartContext';
import { formatNumber, generateOrderID } from '../../utils/helpers';

import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import { useShipping } from '../../context/ShippingContext';
import { useEffect, useState } from 'react';
import { useOrderId } from '../../context/OrderIdContext';
import { createOrder } from '../../services/ApiProducts';
import toast from 'react-hot-toast';
import SpinnerMini from '../../ui/SpinnerMini';

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
  const [orderID, setOrderIDState] = useState(null);
  const { totalPrice, cartItems, setCartItems } = useAddItemToCart();

  const { shippingDetails } = useShipping();
  const { amount: shippingFee, location: shippingLocation } = shippingDetails;
  const { getOrderID, setOrderID } = useOrderId();

  useEffect(() => {
    const existingOrderID = getOrderID();

    if (!existingOrderID) {
      const newOrderID = generateOrderID(6);
      setOrderID(newOrderID);
      setOrderIDState(newOrderID);
    } else {
      setOrderIDState(existingOrderID);
    }
  }, [getOrderID, setOrderID]);

  //   const orderID = getOrderID();

  const orderLink = `http://localhost:5173/order/${orderID}`;

  const sendOrderConfirmationEmail = (
    orderDetails,
    customerDetails,
    paymentScreenshot
  ) => {
    const orderSummaryHTML = `
   <table style="width: 100%; border-collapse: collapse;">
     <thead>
       <tr>
         <th style="border: 2px solid #dddddd; padding: 8px; text-align: left;">Item Name</th>
         <th style="border: 2px solid #dddddd; padding: 8px; text-align: left;">Quantity</th>
         <th style="border: 2px solid #dddddd; padding: 8px; text-align: left;">Price (₦)</th>
         <th style="border: 2px solid #dddddd; padding: 8px; text-align: left;">Total Price (₦)</th>
       </tr>
     </thead>
     <tbody>
       ${cartItems
         .map(
           (item) => `
             <tr>
               <td style="border: 2px solid #dddddd; padding: 8px;">
                 <div style="display: flex; align-items: center; gap: 5px;">
                   <img src="${
                     item.newCartItemImage
                   }" alt="Item Image" style="max-width: 40px; height: auto; display: block;" />
                   <p style="font-size: 13px; font-weight: bold; margin: auto 5px;">${
                     item.newCartItemName
                   }</p>
                 </div>
               </td>
               <td style="border: 2px solid #dddddd; padding: 8px;">${
                 item.quantity
               }</td>
               <td style="border: 2px solid #dddddd; padding: 8px;">${formatNumber(
                 item.newCartItemPrice
               )}</td>
               <td style="border: 2px solid #dddddd; padding: 8px;">${formatNumber(
                 item.totalItemPrice
               )}</td>
             </tr>`
         )
         .join('')}
     </tbody>
   </table>
   `;

    const templateParams = {
      // customer_name: customerDetails.name,
      // customer_email: customerDetails.email,
      // customer_phone: customerDetails.phone,
      // payment_screenshot: paymentScreenshot,
      customer_name: 'Praises Amaiyo',
      customer_email: 'amaiyo.praises@gmail.com',
      customer_phone: '+2347057540749',
      order_summary: orderSummaryHTML,
      shipping_amount: formatNumber(shippingFee),
      shipping_location: shippingLocation,
      order_link: orderLink,
      cart_total: formatNumber(totalPrice),
      total_price: formatNumber(totalPrice + shippingFee),
      orderID: orderID,
      order_date: new Date().toLocaleString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }),
      payment_screenshot:
        'https://media.istockphoto.com/id/1169144637/vector/atm-bill-in-slot-vector-realistic-illustrations-set.jpg?s=612x612&w=0&k=20&c=lOFwWer_E14As5LzlJCAHNc_Y0Ee3Kx50-yg0IxBVVM=',
    };

    //  emailjs
    //    .send(
    //      'service_7mqikbg',
    //      'template_4kintgm',
    //      templateParams,
    //      'Pst9J84YbTStWUs0M',

    //      {
    //        is_html: true,
    //      }
    //    )
    //    .then((response) => {
    //      console.log('Email sent successfully!', response.status, response.text);
    //    })
    //    .catch((err) => {
    //      console.log('Failed to send email:', err);
    //    });
  };

  async function handlePaymentSubmission() {
    const orderData = {
      orderID,
      cartItems,
      totalPrice,
      shippingFee,
      // more to be details added soon
    };
    setIsSubmitting(true);

    if (cartItems.length > 0) {
      try {
        console.log(orderData);
        const createdOrder = await createOrder(orderData);

        if (createdOrder) {
          sendOrderConfirmationEmail();
          toast.success(`Order ${orderID} placed successfully!`);

          localStorage.removeItem('shippingDetails');
          localStorage.removeItem('cartItems');
          setCartItems([]);

          //  sessionStorage.setItem('lastOrderID', orderID);
          localStorage.removeItem('orderID');
          navigate(`/order/${orderID}`);
        }
      } catch (error) {
        toast.error('Failed to place order. Please try again.');
        console.error('Failed to create order:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.error('Cart is empty, cannot complete payment.');
      toast.error('Cart is empty. Please add items before proceeding.');
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Heading as="h2">
        Copy the account number and pay the total of{' '}
        <span className="naira-sign">
          ₦{formatNumber(totalPrice + shippingFee)}
        </span>{' '}
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
          {isSubmitting ? (
            <>
              Placing order... <SpinnerMini />
            </>
          ) : (
            'Confirm Payment'
          )}
        </Button>
      </ButtonContainer>
    </>
  );
}

export default PaymentInfo;
