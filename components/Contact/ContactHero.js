import React from 'react';
import styled from 'styled-components';
import Hero from '../Product/ProductHero';
import Link from 'next/link';

const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;

  .content {
    display: flex;
    margin-left: 3rem;
    flex-direction: column;
    cursor: pointer;
    p {
      font-size: 1rem;
    }
    span {
      color: #54c8d7;
    }
  }
`;

const ContactHero = () => {
  return (
    <Container>
      <Hero />
      <div className="content">
        <p>
          <Link href="/">
            <span>Home/ </span>
          </Link>
          Contact Us
        </p>
      </div>
    </Container>
  );
};

export default ContactHero;
