import Stripe from 'stripe';
import CheckoutForm from '../components/Checkoutform';
import { parseCookies, setCookie } from 'nookies';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
export const getServerSideProps = async (ctx) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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
