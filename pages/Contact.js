import React from 'react';
import styled from 'styled-components';
import ContactHero from '../components/Contact/ContactHero';
import ContactCards from '../components/Contact/ContactCards';

const Container = styled.div`
  margin-top: 3rem;
`;
const Contact = () => {
  return (
    <Container>
      <ContactHero />
      <ContactCards />
    </Container>
  );
};

export default Contact;
