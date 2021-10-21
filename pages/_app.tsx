import '../styles/globals.css'
import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Sidebar/>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}
export default MyApp
