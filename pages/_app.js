import NavBar from '../components/Navigation/Navbar';
import '../styles/base/normalize.css';
import '../styles/base/base.css';

function MyApp({ Component, pageProps }) {
  return <>
    <NavBar />
    <Component {...pageProps} />
  </>
}

export default MyApp
