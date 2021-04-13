import Stripe from 'stripe';
import React from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal/Modal';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

const Container = styled.div``;

const ProductDetails = ({ item }) => {
  console.log('item', item);
  return (
    <>
      <p>hello</p>
    </>
  );
};
export async function getStaticPaths() {
  const stripe = new Stripe(
    'sk_test_51I0kmUEhHUADxxMxL3O5JljiCObTTl1JuSmMLEzpwgoZ2Goxn1zo4S9YVyTPsU9h1lpwjYQeTrxSZZZKtqKbxA3D00IuKNCWow'
  );

  let products;
  if (stripe) {
    products = await stripe.prices.list({
      limit: 20,
      expand: ['data.product'],
    });

    const paths = products.data.map((product) => ({
      params: {
        productDetails: product.id,
      },
    }));

    return { paths, fallback: false };
  }
}
export async function getStaticProps({ params }) {
  const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

  const product = await stripe.products.retrieve(`${params.productDetails}`);

  const item = await product.json();
  return {
    props: { item },
  };
}
export default ProductDetails;
