import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Skeleton from './Skeleton'

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
      <div>
         <div className="banner">
            <Image
               src={'https:' + featuresImage.fields.file.url}
               width={featuresImage.fields.file.details.image.width}
               height={featuresImage.fields.file.details.image.height}
            />
            <h2>{title}</h2>
         </div>

         <div className="info">
            <h3>Catégories:</h3>
            {categories.map(ing => (
               <span key={ing}>{ing}</span>
            ))}
         </div>

         <div className="method">
            <h3>Description:</h3>
            <div>{documentToReactComponents(description)}</div>
         </div>


      </div>
   );
}

export default AssetDetails;