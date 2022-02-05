import { createClient } from 'contentful'
import { useState } from 'react'
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
   const res = await client.getEntries({ content_type: "asset", 'fields.categories': 'other' })

   return {
      props: {
         others: res.items,
      }
   }
}

const Other = ({ others }) => {
   const [filterParam, setFilterParam] = useState("");
   return (
      <AssetCategoryIndex
         breadCrumbCategory1={"headgear"}
         breadCrumbCategory2={"other"}
         filterParam={filterParam}
         setFilterParam={setFilterParam}
         slice={others.slice}
         props={others}
      />
   );
}

export default Other;