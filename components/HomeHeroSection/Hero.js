import React from 'react';
import styled from 'styled-components';
import smilingmother from '../../public/kid2.jpg';
import Link from 'next/link';
const Container = styled.div`
  width: 100vw;
  height: 90vh;
  /* background-image: url(${smilingmother});
*/
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.52),
      rgba(0, 0, 0, 0.4)
    ),
    url(${smilingmother});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  text-align: center;
  border-bottom: 2px solid black;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .line {
      width: 3rem;
      height: 0.2rem;
      background: white;
      margin-bottom: 1rem;
    }
    h1 {
      font-size: 3rem;
      color: white;
      letter-spacing: 0.5rem;
    }
    button {
      padding: 1.2rem 1.8rem;
      background: black;
      color: white;
      border: none;
      outline: none;
      border: 0.1px solid white;
      cursor: pointer;
    }
    button:hover {
      color: #50b5c2;
      font-weight: bold;
      font-size: medium;
    }
  }
`;
const Hero = ({ props }) => {
  return (
    <Container>
      {/* <img src={smilingmother} alt="home hero image" /> */}
      <div className="overlay">
        <h1>25% OFF ON BABY ESSENTIALS</h1>
        <div className="line"></div>
        <Link href="/products">
          <button>SHOP NOW!</button>
        </Link>
      </div>
    </Container>
  );
};

export default Hero;
