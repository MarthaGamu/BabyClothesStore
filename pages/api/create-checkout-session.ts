import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { basketItems } = req.body;

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = basketItems.map(
    (item) => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: item.currency,
          unit_amount: item.unit_amount,
          product_data: {
            name: item.name,
            metadata: {
              productSlug: item.slug,
            },
          },
        },
      };
    }
  );

  try {
    const session = await stripe.checkout.sessions.create({
      success_url:
        'http://localhost:3000/OrderSuccess?id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/products',
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
    });
    console.log('session ====> ', session);
    res.status(200).json(session);
  } catch (error) {
    console.log('Error creating checkout session ', error);
    res.status(500).json({ error: error.msg });
  }
};
