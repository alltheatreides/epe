import Link from "next/link";
import Image from "next/image";
const HeroSection = () => {
   return (
      <section className="hero-section container mx-auto mb-40">
         <figure className="relative w-4/5 mx-auto ">
            <ul className="flex relative">
               <li className="opacity-60 translate-y-4">
                  <Image src="/card1.png" height="804.31" width="197.28" />
               </li>
               <li className="opacity-60">
                  <Image src="/card2.png" height="804.31" width="197.28" />
               </li>
               <li className="opacity-60 translate-y-4">
                  <Image src="/card3.png" height="804.31" width="197.28" />
               </li>
               <li className="opacity-60">
                  <Image src="/card4.png" height="804.31" width="197.28" />
               </li>
               <li className="opacity-60 translate-y-2">
                  <Image src="/card5.png" height="804.31" width="197.28" />
               </li>
               <li className="opacity-60 translate-y-4">
                  <Image src="/card6.png" height="804.31" width="197.28" />
               </li>
               <li className="opacity-60">
                  <Image src="/card7.png" height="804.31" width="197.28" />
               </li>
            </ul>
            <figcaption className="absolute inset-0 grid place-content-center text-center">
               <h1 className="text-5xl font-bold w-4/6 mx-auto pt-14 leading-normal">
                  ONE MOD, <br></br>COUNTLESS NEW ASSETS TO IMPROVE YOUR GAMES
               </h1>
               <Link href="/assetCategories">
                  <a className="relative cta place-self-center my-4">
                     <button className="px-12 py-4 rounded-xl text-xl uppercase font-bold underline relative z-10">
                        discover
                     </button>
                  </a>
               </Link>
            </figcaption>
         </figure>
      </section>

   );
};

export default HeroSection;
