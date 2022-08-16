import '../styles/globals.css'
import '../config/firebase.config'
import { AuthProvider } from '../hook/auth'
import AuthStateChanged from '../layout/AuthStateChanged'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthStateChanged>
      <Component {...pageProps} />
      </AuthStateChanged>
    </AuthProvider>
  )
}

export default MyApp