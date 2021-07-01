import React from 'react';
import styled from 'styled-components';

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
    background: rgba(0, 0, 0, 0.4);
    top: 0%;
    display: grid;
    place-items: center;
    font-size: 2rem;
    color: white;
    font-weight: 600;
  }
`;

const Hero = ({image,alt ="your image", overlayText="text here"}) => {
  return (
    <Container>
      <img src={image} alt={alt} />
      <div className="overlay">{overlayText}</div>
    </Container>
  );
};

export default Hero;
