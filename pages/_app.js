import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/globals.css';
import StateProvider from '../components/ContextApi/Context';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </StateProvider>
    </>
  );
}

export default MyApp;
