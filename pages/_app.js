import Image from 'next/image'
import Layout from '../layout/GeneralLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* background image */}
      {/* <div className='absolute inset-0 -z-20'>
        <Image
          // src="/background.jpg" 
          src="/blank_black_template_logoless.png"
          // src="/feat1-console33.jpg" 
          height="1920"
          width="1080"  
          layout="responsive"
          // objectFit="none"
          // object-position="center"
          className=""
        />
      </div> */}
    </>
  )
}

export default MyApp
