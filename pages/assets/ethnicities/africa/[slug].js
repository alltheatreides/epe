import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Skeleton from '../../../../components/Skeleton'
import BreadCrumb from '../../../../components/BreadCrumb'

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
      <section className='py-20'>
         <article className='w-4/5 mx-auto h-full'>
            <BreadCrumb category={"ethnicities"} sub={"africa"} item={title} />
            <figure className="mt-4 grid grid-cols-2 gap-12">
               <Image
                  src={'https:' + featuresImage.fields.file.url}
                  width={featuresImage.fields.file.details.image.width}
                  height={featuresImage.fields.file.details.image.height}
               />

               <figcaption>
                  <h2 className='text-5xl uppercase tracking-[.25rem] mb-8'>{title}</h2>

                  <div className="categories mb-10">
                     <h3 className='uppercase text-xl font-light tracking-[.25rem]'>Categories</h3>
                     <ul className='flex gap-4 font-light'>
                        {categories.map(ing => (
                           <li key={ing} className='uppercase'>{ing}</li>
                        ))}
                     </ul>
                  </div>

                  <div className="description">
                     <h3 className='uppercase text-xl font-light tracking-[.25rem] mb-6'>Description:</h3>
                     <div>{documentToReactComponents(description)}</div>
                  </div>
               </figcaption>
            </figure>
         </article>
      </section>
   );
}

export default AssetDetails;