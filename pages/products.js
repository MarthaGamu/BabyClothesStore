import Stripe from 'stripe';
import Product from '../components/Product/Product';
import styled from 'styled-components';
import ProductHero from '../components/Product/ProductHero';

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  z-index: 0;
  gap: 2rem 3rem;
  @media (min-width: 1000px) {
    width: 90vw;
  }
  @media (min-width: 2000px) {
    width: 80vw;
  }
`;
const Heading = styled.div`
  width: 100vw;
  margin: auto;
  color: #494746;

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
    width: 80vw;
    padding-left: 8rem;
  }
`;
export const getServerSideProps = async (x) => {
  const stripe = new Stripe(
    'sk_test_51I0kmUEhHUADxxMxL3O5JljiCObTTl1JuSmMLEzpwgoZ2Goxn1zo4S9YVyTPsU9h1lpwjYQeTrxSZZZKtqKbxA3D00IuKNCWow'
  );
  let products;
  if (stripe) {
    products = await stripe.prices.list({
      limit: 20,
      expand: ['data.product'],
    });
    return {
      props: {
        products,
      },
    };
  }
};
const Products = ({ products }) => {
  return (
    <>
      <ProductHero />
      <Heading>
        <h2>Our products</h2>
      </Heading>
      <Container>
        {products.data.length > 0
          ? products.data.map((product) => <Product price={product} />)
          : null}
      </Container>
    </>
  );
};

export default Products;
