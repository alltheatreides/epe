import Image from 'next/image'
import Layout from '../layout/GeneralLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
