import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAddShoppingCart } from 'react-icons/md';
import { GrFavorite } from 'react-icons/gr';
import { MdFavorite } from 'react-icons/md';
import { useBasket } from '../ContextApi/Context';
const Container = styled.div`
  .addToCart {
    display: flex;
    /* justify-content: center; */
    margin-top: 1rem;
  }
  .cart {
    background: #23232c;
    color: white;
    padding: 0.6rem 2rem;
    font-size: 1.5rem;
  }
  .quantityCounter {
    padding: 0.6rem 3rem;
    margin-right: 1rem;
    font-size: 1.5rem;
    border: 1px solid #23232c;
    display: flex;
    justify-content: space-between;
  }
  .decrement,
  .actualPrice,
  .increment {
    flex: 1;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .favorite {
    padding: 0.6rem 2rem;
    border: 1px solid #23232c;
    margin-left: 1rem;
    font-size: 1.5rem;
  }
`;

const CartButtons = ({ product }) => {
  const [favorite, setfavorite] = useState(false);
  const { addToBasket, Increment, Decrement } = useBasket();

  console.log('Product was successfully captured', product);

  return (
    <Container>
      <div className="addToCart">
        {/* <div className="quantityCounter">
          <div
            className="decrement"
            onClick={() => {
              Decrement(product.id);
            }}
          >
            -
          </div>

          <div className="actualPrice"></div>
          <div
            className="increment"
            onClick={() => {
              Increment(product.id);
            }}
          >
            +
          </div>
        </div> */}
        <div
          className="cart"
          onClick={() => {
            addToBasket(product);
          }}
        >
          <MdAddShoppingCart className="cartIcon" />
          Add To Cart
        </div>
        <div className="favorite">
          {!favorite ? (
            <GrFavorite onClick={() => setfavorite(!favorite)} />
          ) : (
            <MdFavorite onClick={() => setfavorite(!favorite)} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default CartButtons;
