import Navigation from '../components/Navigation/Navigation';
import '../styles/base/normalize.css';
import '../styles/base/base.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Navigation />
    <Component {...pageProps} />
  </>
}

export default MyApp
