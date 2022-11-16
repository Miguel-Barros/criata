import '../styles/globals.css'
import '../config/firebase-config'
import { AuthProvider } from '../hook/auth'
import AuthStateChanged from '../services/AuthStateChanged'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing    : "ease-out-cubic",
      once      : true,
      offset    : 50,
    });
  }, []);
  return (
    <AuthProvider>
      <AuthStateChanged>
        <Component {...pageProps} />
      </AuthStateChanged>
    </AuthProvider>
  )
}

export default MyApp