import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({ children }) {
   return (
      <>
         <Header></Header>
         <main className="main-content-wrapper">
            {children}
         </main>
         <Footer></Footer>
      </>
   )
}