import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { destroyCookies } from 'nookies';
const CheckoutForm = ({ paymentIntent }) => {
  console.log('Payment intent was send', paymentIntent);
  const stripe = useStripe();
  const elements = useElements();
  const [checkoutError, setCheckoutError] = useState();
  const [checkoutSuccess, setCheckoutSuccess] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        error,
        paymentIntent: { status },
      } = await stripe.confirmCardPayment(paymentIntent.client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (status === 'succeeded') {
        destroyCookies(null, 'paymentIntentId');
        setCheckoutError(true);
      }
    } catch (error) {
      setCheckoutError(error.message);
    }
  };
  if (checkoutSuccess) return <p>Payment successfull</p>;
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay now
      </button>
      {checkoutError && <span style={{ color: 'red' }}>{checkoutError}</span>}
    </form>
  );
};
export default CheckoutForm;
