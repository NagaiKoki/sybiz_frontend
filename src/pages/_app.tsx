import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
// import store
import store from '../slices/store'
// import components
import Layout from '../components/Layout'
import '../../styles/globals.css'
// import utils
import { useSessionCheck } from '../utils/hooks/auth'

const App = ({ Component, pageProps }: AppProps) => {
  const [isLoggedIn, isChecked] = useSessionCheck()

  if (!isChecked) return <></>

  console.log(isLoggedIn)
  
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default App
