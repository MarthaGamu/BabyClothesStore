import Stripe from 'stripe';
import CheckoutForm from '../components/Checkoutform';
import { parseCookies, setCookie } from 'nookies';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  'pk_test_51I0kmUEhHUADxxMxZ0xjv1GXiorHZwEYYE5rChINrCyjaXH4URPx1AnGLa96jSyjFlmX6UNNoUZgGFwcdORr3MpQ00P45tn0x4'
);
export const getServerSideProps = async (ctx) => {
  const stripe = new Stripe(
    'sk_test_51I0kmUEhHUADxxMxL3O5JljiCObTTl1JuSmMLEzpwgoZ2Goxn1zo4S9YVyTPsU9h1lpwjYQeTrxSZZZKtqKbxA3D00IuKNCWow'
  );

  let paymentIntent;

  const { paymentIntentId } = await parseCookies(ctx);

  if (paymentIntentId) {
    paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    return {
      props: {
        paymentIntent,
      },
    };
  }
  paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: 'gbp',
  });

  setCookie(ctx, 'paymentIntentId', paymentIntent.id);
  return {
    props: {
      paymentIntent,
    },
  };
};

const CheckoutPage = ({ paymentIntent }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm paymentIntent={paymentIntent} />
  </Elements>
);

export default CheckoutPage;
