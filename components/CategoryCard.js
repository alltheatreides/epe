import Image from "next/image";

const CategoryCard = (props) => {
   return (
      <li>
         <figure>
            <Image src={props.src} width="483" height="410" />
            <figcaption>
               <h3 className="text-2xl tracking-[.25rem] uppercase mt-2">{props.title}</h3>
               <p className="font-light my-4">{props.desc}</p>
            </figcaption>
         </figure>
      </li>
   );
}

export default CategoryCard;