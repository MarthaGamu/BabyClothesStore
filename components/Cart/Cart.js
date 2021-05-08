import React from 'react';
import styled from 'styled-components';
import { useBasket } from '../ContextApi/Context';
import Link from 'next/link';
import Product from '../Product/Product';
import { createCheckoutSession } from 'next-stripe/client';
import { loadStripe } from '@stripe/stripe-js';
const EmptyBasket = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .shopLink {
    background-color: #54c8d7;
    color: white;
    padding: 1rem 2rem;
  }
`;

const Container = styled.div`
  width: 80vw;
  margin: auto;
  display: flex;

  .InnerWrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .infoWrapper {
    width: 100%;
    display: flex;
    padding-bottom: 2rem;
    border-bottom: 1px solid grey;
  }
  .image {
    width: 10rem;
    margin-top: 1rem;

    img {
      width: 100%;
    }
  }
  .Quantity {
    border: 1px solid black;
    width: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
  .QuantityRow {
    display: flex;
  }
  .OrderSummary {
    flex: 1;
    padding-left: 10rem;
  }
  .Details {
    margin-left: 2rem;
  }
  button {
    margin-top: 1rem;
    background: #54c8d7;
    color: white;
    padding: 1rem 2rem;
    border: none;
    outline: grey;
  }
  .checkout {
    padding: 1rem 5rem;
    background: black;
    color: white;
    text-transform: uppercase;
  }
  .orderWrapper {
    width: 50%;
    padding-bottom: 2rem;
    border: 1px solid grey;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1500px) {
      width: 100%;
    }
  }
`;
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
const Cart = () => {
  const { basket, removeItem, Increment, Decrement, totalBasket } = useBasket();

  const subtotal = basket.reduce((acc, curr) => {
    return acc + (curr.quantity * curr.unit_amount) / 100;
  }, 0);

  console.log('subtotal => ', subtotal);

  const Buynow = async () => {
    const stripe = await stripePromise;
    console.log('basket =>', basket);

    const basketItems = basket.map((item) => {
      return {
        name: item.product.name,
        slug: item.product.name.toLowerCase().replace(/ /g, '-'),
        unit_amount: item.unit_amount,
        currency: item.currency,
        quantity: item.quantity,
      };
    });
    const session = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        basketItems,
      }),
    }).then((resp) => resp.json());

    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return basket.length > 0 ? (
    <>
      <h2>
        SHOPPING BAG({totalBasket}){totalBasket === 1 ? 'item' : 'items'}
      </h2>
      <Container>
        <div className="InnerWrapper">
          {basket.map((product) => (
            <div className="infoWrapper">
              <div className="image">
                <img src={product.product.images} alt="basket image" />
              </div>
              <div className="Details">
                <h2>{product.product.name}</h2>
                <div className="QuantityRow">
                  <strong> QTY: </strong>
                  <div className="Quantity">
                    <div
                      className="decrement"
                      onClick={() => Decrement(product.id)}
                    >
                      -
                    </div>
                    <div>{product.quantity}</div>
                    <div
                      className="increment"
                      onClick={() => Increment(product.id)}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="amount">
                  Price:£{(product.unit_amount / 100).toFixed(2)}
                </div>

                <button onClick={() => removeItem(product.id)}>
                  REMOVE ITEM
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="OrderSummary">
          <div className="orderWrapper">
            <h2>Order Summary</h2>
            <p>Subtotal: £{subtotal.toFixed(2)}</p>
            <button className="checkout" onClick={() => Buynow()}>
              {' '}
              Checkout
            </button>
          </div>
        </div>
      </Container>
    </>
  ) : (
    <EmptyBasket>
      <h2>Basket is Empty</h2>
      <Link href="/products">
        <p className="shopLink">SHOP NOW</p>
      </Link>
    </EmptyBasket>
  );
};

export default Cart;
