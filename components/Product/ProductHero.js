import React from 'react';
import styled from 'styled-components';
import smilingmother from '../../public/kidsonbeach.jpg';

const Container = styled.div`
  width: 100%;
  height: 50vh;
  margin-bottom: 7rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductHero = () => {
  return (
    <Container>
      <img src={smilingmother} alt="hero image product" />
    </Container>
  );
};

export default ProductHero;
