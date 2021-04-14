import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/globals.css';
import { CartProvider } from '../components/ContextApi/Context';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </>
  );
}

export default MyApp;
