import { GetServerSideProps } from 'next';
import Stripe from 'stripe';
import styled from 'styled-components';

const Success = styled.div`
  width: 100vw;
  height: 70vh;
  display: grid;
  place-items: center;
  font-size: 1.5rem;

  @media (max-width: 1100px) {
    font-size: 1rem;
    text-align: center;
  }
`;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  console.log('query =>', query);
  const checkoutId = query.id as string;
  const { customer, customer_details, ...restOfCheckoutData } =
    await stripe.checkout.sessions.retrieve(checkoutId);
  const userData = await stripe.customers.retrieve(customer as string);

  console.log('customer_details =>', customer_details);
  return {
    props: {
      customerEmail: customer_details.email,
    },
  };
};

const OrderSuccess = ({ customerEmail }) => {
  return <Success>Your order was successfully placed {customerEmail}</Success>;
};

export default OrderSuccess;
