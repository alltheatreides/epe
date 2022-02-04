import { createClient } from 'contentful'
import Skeleton from '../../../../components/Skeleton'
import AssetDetailsSection from '../../../../components/AssetDetailsSection'

// Contentful access information
const client = createClient({
   space: process.env.CONTENTFUL_SPACE_ID,
   accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
   const res = await client.getEntries({
      content_type: "asset"
   })

   const paths = res.items.map(item => {
      return {
         params: { slug: item.fields.slug }
      }
   })

   return {
      paths,
      fallback: true
   }
}

export const getStaticProps = async ({ params }) => {
   const { items } = await client.getEntries({
      content_type: 'asset',
      'fields.slug': params.slug
   })

   if (!items.length) {
      return {
         redirect: {
            destination: '/',
            permanent: false,
         },
      }
   }

   return {
      // There is only one item of course
      props: { asset: items[0] },
      revalidate: 1
   }
}

const AssetDetails = ({ asset }) => {
   if (!asset) return <Skeleton></Skeleton>
   const { title, slug, categories, featuresImage, description } = asset.fields
   return (
      <AssetDetailsSection
         breadCrumbCategory1={categories[0]}
         breadCrumbCategory2={categories[1]}
         title={title}
         categories={categories}
         url={featuresImage.fields.file.url}
         image={featuresImage.fields.file.details.image}
         description={description}>
      </AssetDetailsSection>
   );
}

export default AssetDetails;