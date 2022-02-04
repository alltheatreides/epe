import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
   const router = useRouter()

   useEffect(() => {
      setTimeout(() => {
         router.push('/')
      }, 12000)
   }, [])

   return (
      <section className='py-20 h-screen'>
         <article className="w-4/5 mx-auto text-center">
            <h1 className='text-5xl uppercase tracking-[.25rem] mt-4 mb-8'>404</h1>
            <h2 className='text-xl mb-20'>Oops! That page cannot be found :(</h2>
            <p className='uppercase'>Redirecting to <Link href="/"><a>Homepage</a></Link></p>
         </article>
      </section>
   );
}

export default NotFound;