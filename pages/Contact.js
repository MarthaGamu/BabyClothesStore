import React from 'react';
import styled from 'styled-components';
import ContactHero from '../components/Contact/ContactHero';
import ContactCards from '../components/Contact/ContactCards';
import Hero from '../components/Organisms/Hero';
import kids from '../public/kid4.jpg';
const Container = styled.div``;
const Contact = () => {
  return (
    <Container>
      <Hero image={kids} overlayText="CONTACT US" />
      <ContactCards />
    </Container>
  );
};

export default Contact;
