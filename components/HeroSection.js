import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useState } from "react";

let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1.5 } });

const homeAnimation = completeAnimation => {
   // tl.from(".line h1", 1.8, {
   //    y: 100,
   //    opacity: 0,
   //    ease: "power4.out",
   //    // delay: 1,
   //    // skewY: 7,
   //    stagger: {
   //       amount: 1
   //    }
   // })
   tl.to('.landing-image', { 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 0.6, stagger: { amount: 1.5 } })
   tl.to('h1', { 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', opacity: 1, y: 0, duration: 2.2, stagger: { amount: 1.1 } })
   tl.to('.cta', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, delay: 1 }, "-=2")
};


const HeroSection = () => {

   const [animationComplete, setAnimationComplete] = useState(false);

   const completeAnimation = () => {
      setAnimationComplete(true);
   };

   useEffect(() => {
      homeAnimation(completeAnimation);
   }, []);

   return (
      <section className="container mx-auto md:mb-20 lg:mb-40">
         <figure className="relative lg:w-4/5 mx-auto ">
            <ul className="flex relative">
               <li className="landing-image opacity-60 translate-y-4">
                  <Image src="/card1.png" height="804.31" width="197.28" />
               </li>
               <li className="landing-image opacity-60">
                  <Image src="/card2.png" height="804.31" width="197.28" />
               </li>
               <li className="landing-image opacity-60 translate-y-4">
                  <Image src="/card3.png" height="804.31" width="197.28" />
               </li>
               <li className="landing-image opacity-60">
                  <Image src="/card4.png" height="804.31" width="197.28" />
               </li>
               <li className="landing-image opacity-60 translate-y-2">
                  <Image src="/card5.png" height="804.31" width="197.28" />
               </li>
               <li className="landing-image opacity-60 translate-y-4">
                  <Image src="/card6.png" height="804.31" width="197.28" />
               </li>
               <li className="landing-image opacity-60">
                  <Image src="/card7.png" height="804.31" width="197.28" />
               </li>
            </ul>
            <figcaption className="absolute inset-0 grid place-content-center text-center">
               <h1 className="hero text-xl md:text-3xl lg:text-5xl font-bold mx-auto pt-14 leading-normal ">ONE MOD, </h1>
               <h1 className="hero text-xl md:text-3xl lg:text-5xl font-bold mx-auto leading-normal ">COUNTLESS NEW ASSETS TO</h1>
               <h1 className="hero text-xl md:text-3xl lg:text-5xl font-bold mx-auto leading-normal ">IMPROVE YOUR GAMES</h1>
               {/* <h1 className="hero text-xl md:text-3xl lg:text-5xl font-bold w-4/6 mx-auto pt-14 leading-normal ">
                  ONE MOD, <br></br>COUNTLESS NEW ASSETS TO IMPROVE YOUR GAMES
               </h1> */}
               <Link href="/asset-categories">
                  <a className="relative cta place-self-center my-4">
                     <button className="px-6 lg:px-12 py-4 rounded-xl lg:text-xl uppercase font-bold underline relative z-10">
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
