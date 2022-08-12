import '../styles/globals.css'
import '../config/firebase.config'
import { AuthProvider } from '../hook/auth'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp