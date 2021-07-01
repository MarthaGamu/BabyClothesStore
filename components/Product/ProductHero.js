import React from 'react';
import styled from 'styled-components';
import smilingmother from '../../public/sechero.jpg';
import Navbar from '../Navbar/Navbar';

const Container = styled.div`
  width: 100vw;
  height: 55vh;
  margin-bottom: 7rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    width: 100vw;
    height: 55vh;
    background: rgba(0, 0, 0, 0.3);
    top: 0%;
    display: grid;
    place-items: center;
    font-size: 2rem;
    color: white;
    font-weight: 600;
  }
`;

const ProductHero = () => {
  return (
    <Container>
      <img src={smilingmother} alt="hero image product" />
      <div className="overlay">LATEST TODDLER'S FASHION...</div>
    </Container>
  );
};

export default ProductHero;
