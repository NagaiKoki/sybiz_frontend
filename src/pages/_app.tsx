import { AppProps } from 'next/app'
// import components
import Layout from '../components/Layout'
import '../../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
