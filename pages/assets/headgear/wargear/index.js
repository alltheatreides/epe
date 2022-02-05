import { createClient } from 'contentful'
import { useEffect, useState } from 'react'
import AssetCard from '../../../../components/AssetCard'
import AssetCategoryIndex from '../../../../components/AssetCategoryIndex'
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
   const res = await client.getEntries({ content_type: "asset", 'fields.categories': 'wargear' })

   return {
      props: {
         wargears: res.items,
      }
   }
}

const Wargear = ({ wargears }) => {

   const [filterParam, setFilterParam] = useState("");

   useEffect(() => {

   }, []);


   return (
      <AssetCategoryIndex
         breadCrumbCategory1={wargears[0].fields.categories[0]}
         breadCrumbCategory2={wargears[0].fields.categories[1]}
         filterParam={filterParam}
         setFilterParam={setFilterParam}
         slice={wargears.slice}
         props={wargears}
      />
   );
}

export default Wargear;