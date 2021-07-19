import React from 'react';
import Cart from '../components/Cart/Cart';
import styled from 'styled-components';

const HeroImage = styled.div`
  width: 100vw;
  height: 12vh;
  background-color: #23232c;
`;

const CartList = () => {
  return (
    <>
      <HeroImage>{/* <img src={darkmode} alt="dark mode" /> */}</HeroImage>
      <div>
        <Cart />
      </div>
    </>
  );
};

export default CartList;
