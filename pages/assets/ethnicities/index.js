import { createClient } from 'contentful'
import AssetCard from '../../../components/AssetCard'
import BreadCrumb from '../../../components/BreadCrumb'
import CategoryCard from '../../../components/CategoryCard'
import IndexTitle from '../../../components/IndexTitle'


export async function getStaticProps() {

   // Contentful access information
   const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
   })

   // Get the result and Contentful content type
   // Reference: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/full-text-search-on-a-field/query-entries/console/js
   const res = await client.getEntries({ content_type: "asset", 'fields.categories': 'ethnicities' })

   return {
      props: {
         ethnicities: res.items,
      }
   }
}

const Headgear = ({ ethnicities }) => {

   // console.log(ethnicitiess)

   return (
      <section className='py-20'>
         <article className="w-4/5 mx-auto h-full">
            <BreadCrumb category={"ethnicities"} />
            <IndexTitle title={"ethnicities"} />
            <ul className='flex flex-col md:flex-row gap-4'>
               <CategoryCard src={"/asset_category_card_4.png"} title={"EUROPE"} desc={"European ethnicities with the broadest geographical sense of europe, with russia up to the urals as well as anatolia."} reference={"/assets/ethnicities/europe"} />
               <CategoryCard src={"/asset_category_card_4.png"} title={"AFRICA"} desc={"North africa as well as sub-saharan africa."} reference={"/assets/ethnicities/africa"} />
               <CategoryCard src={"/asset_category_card_4.png"} title={"ASIA"} desc={"Asia in the broadest sense including central asia."} reference={"/assets/ethnicities/asia"} />
            </ul>

            <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10 pt-10 border-t border-cyan-50'>
               {
                  ethnicities.slice(0, 25).map(asset => (
                     <AssetCard key={asset.sys.id} asset={asset}></AssetCard>
                  ))
               }
            </ul>
         </article>
      </section>
   );
}

export default Headgear;