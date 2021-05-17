import Navigation from '../components/Navigation';
import '../styles/main.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Navigation />
    <Component {...pageProps} />
  </>
}

export default MyApp
