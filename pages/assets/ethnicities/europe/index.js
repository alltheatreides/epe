import { createClient } from 'contentful'
import { useState } from 'react'
import AssetCard from '../../../../components/AssetCard'
import BreadCrumb from '../../../../components/BreadCrumb'
import IndexTitle from '../../../../components/IndexTitle'

export async function getStaticProps() {

   // Contentful access information
   const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
   })

   // Get the result and Contentful content type
   // Reference: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/full-text-search-on-a-field/query-entries/console/js
   const res = await client.getEntries({ content_type: "asset", 'fields.categories': 'europe' })

   return {
      props: {
         europe: res.items,
      }
   }
}

const Cloaks = ({ europe }) => {
   const [filterParam, setFilterParam] = useState("");
   return (
      <section className='py-20'>
         <article className="w-4/5 mx-auto h-full">
            <div className='flex content-center'>
               <BreadCrumb category={"ethnicities"} sub={"europe"} />
               <div className='flex-1 flex justify-end'>
                  <input type="text" className="block p-2 pl-10 w-4/12 text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 sm:text-sm focus:ring-blue-200 focus:border-blue-200" placeholder="Search..." value={filterParam} onChange={(e) => setFilterParam(e.target.value)}></input>
               </div>
            </div>
            <IndexTitle title={"europe"} />
            <ul className='grid grid-cols-6 gap-6'>
               {
                  europe.slice(0, 25).filter(europe => europe.fields.title.toLowerCase().includes(filterParam.toLowerCase())).map(asset => (
                     <AssetCard key={asset.sys.id} asset={asset}></AssetCard>
                  ))
               }
            </ul>
         </article>
      </section>
   );
}

export default Cloaks;