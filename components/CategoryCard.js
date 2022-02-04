import Image from "next/image";
import Link from "next/link";

const CategoryCard = (props) => {
   return (
      <li className="w-1/3">
         <figure className="">
            <Link href={props.reference}>
               <Image src={props.src} width="483" height="410" className="cursor-pointer" />
            </Link>
            <figcaption className="">
               <h3 className="md:text-xl lg:text-2xl tracking-[.25rem] uppercase mt-2">{props.title}</h3>
               <p className="font-light my-4 lg:pr-12">{props.desc}</p>
            </figcaption>
         </figure>
      </li>
   );
}

export default CategoryCard;