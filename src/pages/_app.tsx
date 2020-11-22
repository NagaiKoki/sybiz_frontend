import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
// import store
import store from '../slices/store'
// import components
import Layout from '../components/Layout'
import '../../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store()}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
