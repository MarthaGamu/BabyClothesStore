import React from 'react';
import styled from 'styled-components';
import boy from '../../public/boyy.png';
import girl from '../../public/girl.png';
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;

  .boys {
    flex: 1;
    background: #82b7e1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 20rem;
    }
    @media (max-width: 1000px) {
      display: grid;
      place-items: center;
      img {
        width: 12rem;
      }
    }
  }
  .girls {
    flex: 1;
    background: #f3c4b4;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 20rem;
    }
    @media (max-width: 1000px) {
      display: grid;
      place-items: center;
      img {
        width: 12rem;
      }
    }
  }
  h2 {
    font-size: 4.5rem;
    color: white;
    letter-spacing: 1rem;
  }
`;
const Heading = styled.div`
  width: 100vw;
  margin: auto;

  h2 {
    font-size: 2rem;
  }
  @media (min-width: 1000px) {
    width: 90vw;
  }
  @media (min-width: 1200px) {
    width: 82vw;
  }
  @media (min-width: 1800px) {
    width: 70vw;
  }
`;

const Banner = () => {
  return (
    <>
      <Container>
        <div className="boys">
          <img src={boy} alt="boy banner image" />
          <h2>BOYS</h2>
        </div>
        <div className="girls">
          <h2>GIRLS</h2>
          <img src={girl} alt="boy banner image" />
        </div>
      </Container>
      <Heading>
        <h2>Our Products</h2>
      </Heading>
    </>
  );
};

export default Banner;
