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
   const res = await client.getEntries({ content_type: "asset", 'fields.categories': 'headgear' })

   return {
      props: {
         headgears: res.items,
      }
   }
}




const Headgear = ({ headgears }) => {

   // console.log(headgears)

   return (
      <section className='py-20'>
         <article className="w-4/5 mx-auto h-full">
            <BreadCrumb category={"headgear"} />
            <IndexTitle title={"headgear"} />
            {/* <input type="text" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."></input> */}
            <ul className='flex lg:flex-wrap gap-4'>
               <CategoryCard src={"/asset_category_card_2.png"} title={"CROWNS"} desc={"Historical crowns."} reference={"/assets/headgear/crowns"} />
               <CategoryCard src={"/asset_category_card_2.png"} title={"WARGEAR"} desc={"Warfare related headgear."} reference={"/assets/headgear/wargear"} />
               <CategoryCard src={"/asset_category_card_2.png"} title={"OTHER"} desc={"Other type of headgear from cultural hats to veils and everything in between."} reference={"/assets/headgear/other"} />
            </ul>

            <ul className='grid grid-cols-6 gap-6 mt-10 pt-10 border-t border-cyan-50'>
               {
                  headgears.slice(0, 25).map(asset => (
                     <AssetCard key={asset.sys.id} asset={asset}></AssetCard>
                  ))
               }
            </ul>
         </article>
      </section>
   );
}

export default Headgear;