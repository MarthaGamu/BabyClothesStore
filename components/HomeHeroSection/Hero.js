import React from 'react';
import styled from 'styled-components';
import smilingmother from '../../public/mummiesboy.jpg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .line {
      width: 3rem;
      height: 0.2rem;
      background: #494746;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 3rem;
      color: #494746;
      letter-spacing: 0.5rem;
    }
    button {
      padding: 1.2rem 1.8rem;
      background: #7fb4e0;
      color: white;
      border: none;
    }
  }
`;
const Hero = () => {
  return (
    <Container>
      <img src={smilingmother} alt="home hero image" />
      <div className="overlay">
        <h1>25% OFF ON BABY ESSENTIALS</h1>
        <div className="line"></div>
        <button>SHOP NOW!</button>
      </div>
    </Container>
  );
};

export default Hero;
