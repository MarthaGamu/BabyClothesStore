import Stripe from 'stripe';
import React from 'react';
import styled from 'styled-components';
// import Modal from '../components/Modal/Modal';
import { ImStarFull } from 'react-icons/im';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import CartButtons from '../../components/CartButtons/CartButtons';

const Container = styled.div`
  width: 100vw;
  height: 70vh;
  display: grid;
  place-items: center;
`;
const InnerContainer = styled.div`
  width: 80vw;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 1800px) {
    width: 60vw;
  }
  .image {
    flex: 1;
    display: grid;
    justify-content: flex-end;

    .imageWrapper {
      width: 25rem;

      img {
        width: 100%;
      }
    }
  }
  .productDetails {
    flex: 1;
    margin-left: 3rem;
    h2 {
      font-size: 2.5rem;
    }
    .price {
      font-size: 2rem;
    }
  }
`;
const ProductDetails = ({ item }) => {
  return (
    <Container>
      <InnerContainer>
        <div className="image">
          <div className="imageWrapper">
            <img src={item.product.images} alt="Product image" />
          </div>
        </div>
        <div className="productDetails">
          <div>
            <h2>{item.product.name}</h2>
            <p>
              <ImStarFull className="icon" />
              <ImStarFull className="icon" />
              <ImStarFull className="icon" />
              <ImStarFull className="icon" />
              <ImStarFull className="icon" />
              (Customer Reviews)
            </p>
            <p> {item.product.description}</p>
            <p className="price">£{item.unit_amount / 100}.00</p>
            <CartButtons product={item} />
          </div>
        </div>
      </InnerContainer>
    </Container>
  );
};
export async function getStaticPaths() {
  const stripe = new Stripe(
    'sk_test_51I0kmUEhHUADxxMxL3O5JljiCObTTl1JuSmMLEzpwgoZ2Goxn1zo4S9YVyTPsU9h1lpwjYQeTrxSZZZKtqKbxA3D00IuKNCWow'
  );

  let products;
  // if (stripe) {
  products = await stripe.prices.list({
    limit: 20,
    expand: ['data.product'],
  });

  const paths = products.data.map((product) => ({
    params: {
      id: product.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
  // }
}
export async function getStaticProps({ params }) {
  console.log('I am params id', params.id);
  const stripe = new Stripe(
    'sk_test_51I0kmUEhHUADxxMxL3O5JljiCObTTl1JuSmMLEzpwgoZ2Goxn1zo4S9YVyTPsU9h1lpwjYQeTrxSZZZKtqKbxA3D00IuKNCWow'
  );

  const item = await stripe.prices.retrieve(params.id, {
    expand: ['product'],
  });

  return {
    props: { item },
  };
}

// export async function getServerSideProps(req, res) {
//   let item = {};
//   try {
//     const id = req.query.id;
//     const stripe = new Stripe(
//       'sk_test_51I0kmUEhHUADxxMxL3O5JljiCObTTl1JuSmMLEzpwgoZ2Goxn1zo4S9YVyTPsU9h1lpwjYQeTrxSZZZKtqKbxA3D00IuKNCWow'
//     );

//     const product = await stripe.products.retrieve(id);
//     console.log('product ==> ', product);

//     item = await product; //.json();
//     console.log('item', item);
//   } catch (error) {
//     console.log('alex error ', error);
//   }
//   return {
//     props: { item },
//   };
// }

export default ProductDetails;
