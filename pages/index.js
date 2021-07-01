import Head from 'next/head';
import Banner from '../components/FirstSection/Banner';
import Hero from '../components/HomeHeroSection/Hero';
import Product from '../components/Product/Product';
import Navbar from '../components/Navbar/Navbar';
import styled from 'styled-components';
import Stripe from 'stripe';
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;

  margin: 5rem auto;
  justify-content: center;
  gap: 2rem 3rem;
  @media (min-width: 1000px) {
    width: 90vw;
  }
  @media (min-width: 2000px) {
    width: 80vw;
  }
`;
export const getServerSideProps = async () => {
  const stripe = new Stripe(
    'sk_test_51I0kmUEhHUADxxMxL3O5JljiCObTTl1JuSmMLEzpwgoZ2Goxn1zo4S9YVyTPsU9h1lpwjYQeTrxSZZZKtqKbxA3D00IuKNCWow'
  );

  const prices = await stripe.prices.list({
    limit: 20,
    expand: ['data.product'],
  });
  return {
    props: {
      prices,
    },
  };
};
// export function IndexPage() {
//   return (
//     <div>
//       <Head>
//         <title>My page title</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//         <script src="https://js.stripe.com/v3/"></script>
//       </Head>
//     </div>
//   );
// }

export default function Home({ prices }) {
  return (
    <div>
      <Hero />
      {/* <Banner /> */}
      <Container>
        {prices.data.length > 0
          ? prices.data.map((price) => <Product price={price} />)
          : null}
      </Container>
    </div>
  );
}
