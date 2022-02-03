import { createClient } from 'contentful'
import AssetCard from '../../components/AssetCard'

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
   return (
      <section>
         <h1 className='text-3xl font-bold underline'>hello world</h1>
         <ul>
            {
               assets.slice(1, 25).map(asset => (
                  <AssetCard key={asset.sys.id} asset={asset}></AssetCard>
               ))
            }
         </ul>
      </section>
   );
}

export default AssetsList;