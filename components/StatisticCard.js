import Image from "next/image";

const StatisticCard = (props) => {
   return (
      <figure className="lg:w-full p-7 border rounded-lg grid grid-cols-2 gap-6 justify-center place-content-center">
         {props.svg}
         <figcaption className="flex flex-col gap-2">
            <h4 className="text-3xl">{props.title}</h4>
            <p className="">{props.desc}</p>
         </figcaption>
      </figure>
   );
}

export default StatisticCard;