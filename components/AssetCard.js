import Image from 'next/image'
import Link from 'next/link'

export default function AssetCard({ asset }) {
   const { title, slug, categories, thumbnail } = asset.fields

   return (
      <figure className="card relative min-h-[10rem] mb-4">
         <div className="featured absolute inset-0 -z-10">
            <Image
               src={'https:' + thumbnail.fields.file.url}
               width="480"
               height="270"
               className=''
            />
         </div>
         <figcaption className="content">
            <div className="info">
               <h4>{title}</h4>
               {/* <p>{categories.map}</p> */}
            </div>
            <div className="actions">
               <Link href={'/assets/' + slug}><a>See more</a></Link>
            </div>
         </figcaption>
      </figure>
   )
}