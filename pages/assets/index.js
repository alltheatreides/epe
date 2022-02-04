import { createClient } from 'contentful'
import { useEffect } from 'react'
import AssetCard from '../../components/AssetCard'
import IndexTitle from '../../components/IndexTitle'

export async function getStaticProps() {

   // Contentful access information
   const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
   })

   // Get the result and Contentful content type
   const res = await client.getEntries({ content_type: "asset" })

   return {
      props: {
         assets: res.items,
      }
   }
}

const AssetsList = ({ assets }) => {

   useEffect(() => {
      // console.log(assets)
   }, []);

   return (
      <section className='py-20'>
         <article className="w-4/5 mx-auto h-full">
            <IndexTitle title={"assets"} />
            <ul className='grid grid-cols-6 gap-6'>
               {
                  assets.slice(0, 25).map(asset => (
                     <AssetCard key={asset.sys.id} asset={asset}></AssetCard>
                  ))
               }
            </ul>
         </article>
      </section>
   );
}

export default AssetsList;