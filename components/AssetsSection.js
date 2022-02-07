import gsap from "gsap/dist/gsap";
import { Power3 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useRef, useState } from "react";
import CategoryCard from "./CategoryCard";

const AssetsSection = (props) => {

   gsap.registerPlugin(ScrollTrigger, Power3)

   useEffect(() => {
      gsap.from([".text", ".text2", ".si", ".test"], {
         duration: 4,
         ease: Power3.easeOut,
         y: "100vh",
         opacity: 0,
         stagger: 0.5,
         scrollTrigger: {
            // markers: true,
            trigger: "#assets",
            // once: true,
            start: "top bottom",
            end: "top top",
            scrub: true,
         },
      });

   }, []);


   return (
      <section id={props.id} className="assets-section" className={props.padding}>
         <article id="assets" className="w-4/5 mx-auto">
            <p className="text uppercase lg:text-xl font-light tracking-[.25rem]">mod features</p>
            <h2 className="text2 text-2xl md:text-3xl lg:text-5xl uppercase tracking-[.25rem] lg:w-4/12 mt-4 mb-8">Discover our new assets</h2>

            <ul id="cat" className="text2 flex flex-col md:flex-row justify-between md:my-6 gap-4">
               <CategoryCard src={"/asset_category_card_1.png"} title={"CLOTHING"} desc={"Additional clothing as well as retextured vanilla assets with diverse collection of Arabic, Iranian, Steppe, and European cultural wear with unique patterns, subdivided along religious and geographic boundaries."} reference={"/assets/clothing"} />
               <CategoryCard src={"/asset_category_card_2.png"} title={"HEADGEAR"} desc={"A variety of new headgears, including a multitude of circlets, war attire, crowns and veils, custom crowns as well as historical crowns."} reference={"/assets/headgear"} />
               <CategoryCard src={"/asset_category_card_3.png"} title={"ETHNICITIES"} desc={"Hundreds of manually crafted new ethnicities based off actual photographs coupled with HD retextures of skin as well as face and eye details."} reference={"/assets/ethnicities"} />
            </ul>
         </article>
      </section>
   );
}

export default AssetsSection;