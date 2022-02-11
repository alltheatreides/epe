import Image from "next/image";
import BreadCrumb from "./BreadCrumb";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


const AssetDetailsSection = (props) => {
   return (
      <section className='py-20'>
         <article className='w-4/5 mx-auto h-full'>
            <BreadCrumb category={props.breadCrumbCategory1} sub={props.breadCrumbCategory2} item={props.title} />
            <figure className="mt-4 grid lg:grid-cols-2 gap-12">
               {/* <div className="w-full"> */}

               <Image src={'https:' + props.url} width={props.image.width} height={props.image.height} layout="responsive" className="" alt="image of an asset" />
               {/* </div> */}
               <figcaption>
                  <h2 className='text-5xl uppercase tracking-[.25rem] mb-8'>{props.title2}</h2>

                  <div className="categories mb-10">
                     <h3 className='uppercase text-xl font-light tracking-[.25rem]'>Categories</h3>
                     <ul className='flex gap-4 font-light'>
                        {props.categories.map(ing => <li key={ing} className='uppercase'>{ing}</li>)}
                     </ul>
                  </div>

                  <div className="description">
                     <h3 className='uppercase text-xl font-light tracking-[.25rem] mb-6'>Description:</h3>
                     <div>{documentToReactComponents(props.description)}</div>
                  </div>
               </figcaption>
            </figure>
         </article>
      </section>
   );
}

export default AssetDetailsSection;