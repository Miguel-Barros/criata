import '../styles/globals.css'
import '../config/firebase-config'
import { AuthProvider } from '../hook/auth'

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp