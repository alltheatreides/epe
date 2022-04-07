import Image from 'next/image'
import Link from 'next/link'

export default function AssetCard({ asset }) {
   const { title, slug, categories, featuresImage, thumbnail } = asset.fields

   return (
      <figure className="card relative mb-4 bg-[#00000073] rounded-xl p-4">
         <div className="featured cursor-pointer">
            <Link href={`/assets/${categories[0]}/${categories[1]}/${slug}`}  >
               {/* <> */}
               <Image
                  // src={'https:' + thumbnail.fields.file.url}
                  src={'https:' + thumbnail.fields.file.url}
                  width="270"
                  height="480"
                  alt={title}
               />
               {/* </> */}
            </Link>
         </div>
         <figcaption className="content relative z-[1] h-min-[480px]">
            <div className="info mt-2">
               <h4 className='uppercase font-light lg:tracking-[.25rem] w-full'>{title}</h4>
               {/* <p>{categories.map}</p> */}
            </div>
         </figcaption>
      </figure>
   )
}