import Stripe from 'stripe';
import Product from '../components/Product/Product';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  position: relative;
  justify-content: center;
  z-index: 0;
  gap: 2rem 3rem;
  @media (min-width: 1000px) {
    width: 90vw;
  }
  @media (min-width: 2000px) {
    width: 60vw;
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
    <Container>
      {products.data.length > 0
        ? products.data.map((product) => <Product price={product} />)
        : null}
    </Container>
  );
};

export default Products;
