const LinkCard = (props) => {
   return (
      <figure className="max-w-sm bg-gradient-to-b from-zinc-900 to-[#1A1B1C] rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
         <a href={props.link}>
            <img className="rounded-t-lg" src={props.image} alt={props.alt} />
         </a>
         <figcaption className="p-5">
            <a href={props.link}>
               <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{props.title}</h5>
            </a>
            <p className="mb-3 font-normal text-white dark:text-gray-400">{props.desc}</p>
         </figcaption>
      </figure>
   );
}

export default LinkCard;