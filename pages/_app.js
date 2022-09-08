import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import Nav from '../component/nav';

function MyApp({ Component, pageProps }) {
  return <>
   
    <Component {...pageProps} />
  </>
}

export default MyApp
