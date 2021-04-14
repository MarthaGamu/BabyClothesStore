import React from 'react';
import styled from 'styled-components';
import { useCart } from '../ContextApi/Context';
const Container = styled.div``;
const Cart = () => {
  const state = useCart();
  return (
    <Container>
      {state.map((product) => (
        <h2>{product.id}</h2>
      ))}
    </Container>
  );
};

export default Cart;
