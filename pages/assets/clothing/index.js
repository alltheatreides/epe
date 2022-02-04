import { createClient } from 'contentful'
import AssetCard from '../../../components/AssetCard'
import BreadCrumb from '../../../components/BreadCrumb'
import CategoryCard from '../../../components/CategoryCard'

export async function getStaticProps() {

   // Contentful access information
   const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
   })

   // Get the result and Contentful content type
   // Reference: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/full-text-search-on-a-field/query-entries/console/js
   const res = await client.getEntries({ content_type: "asset", 'fields.categories': 'clothing' })

   return {
      props: {
         clothing: res.items,
      }
   }
}

const Clothing = ({ clothing }) => {
   return (
      <section className='py-20'>
         <article className="w-4/5 mx-auto h-full">
            <BreadCrumb category={"clothing"} />
            <h1 className="text-5xl uppercase tracking-[.25rem] lg:w-3/12 mt-4 mb-8">Clothing</h1>
            <ul className='flex flex-wrap'>
               <CategoryCard src={"/asset_category_card_2.png"} title={"CLOAKS"} desc={"Historical cloaks."} reference={"/assets/clothing/cloaks"} />
            </ul>
            <ul className='grid grid-cols-6 gap-6 mt-10 pt-10 border-t border-cyan-50'>
               {
                  clothing.slice(0, 25).map(asset => (
                     <AssetCard key={asset.sys.id} asset={asset}></AssetCard>
                  ))
               }
            </ul>
         </article>
      </section>
   )
}

export default Clothing;