import React from 'react';
import styled from 'styled-components';
import { MdDrafts } from 'react-icons/md';
import { GiSmartphone } from 'react-icons/gi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { GiReturnArrow } from 'react-icons/gi';

const Container = styled.div`
  display: grid;
  grid-template-columns: 30rem 30rem;
  grid-template-rows: 20rem 20rem;
  grid-gap: 2rem;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
  .cardWrapper {
    background-color: white;
    border: 3px solid #54c8d7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      text-transform: uppercase;
    }
  }
  button {
    padding: 1rem 2rem;
    background: #54c8d7;
    border-radius: 5px;
    outline: none;
    color: white;
    font-size: 1.2rem;
  }
  .iconCenter {
    font-size: 3rem;
    color: #494746;
  }
`;

const ContactCards = () => {
  return (
    <Container>
      <div className="cardWrapper">
        <h2 className="heading">Customer Service Opening Times</h2>
        <div className="icon">
          <RiCustomerService2Fill className="iconCenter" />
        </div>
        <p>Monday-Friday : 9am-6pm</p>
        <p>Saturday : 9am-5pm</p>
        <p>Sunday : Closed</p>
        <p>Bank Holidays: Closed</p>
      </div>
      <div className="cardWrapper">
        <h2 className="heading">Email Us</h2>
        <div className="icon">
          <MdDrafts className="iconCenter" />
        </div>
        <p>Click Button Below to Email Us</p>
        <button>Email Us</button>
      </div>
      <div className="cardWrapper">
        <h2 className="heading">Call Us</h2>

        <div className="icon">
          {' '}
          <GiSmartphone className="iconCenter" />
        </div>
        <p> Call Us On: +44 775338654 </p>
      </div>

      <div className="cardWrapper">
        <h2 className="heading">Returns</h2>
        <div className="icon">
          <GiReturnArrow className="iconCenter" />
        </div>
        <p>Return all orders within 14 days of purchase.</p>
      </div>
    </Container>
  );
};

export default ContactCards;
