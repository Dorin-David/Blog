import NavBar from '../components/NavBar';
import '../styles/main.css'

function MyApp({ Component, pageProps }) {
  return <>
    <NavBar></NavBar>
    <Component {...pageProps} />
  </>
}

export default MyApp
