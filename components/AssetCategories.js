import CategoryCard from "./CategoryCard";

const AssetCategories = () => {
   return (
      <article id="assets" className="mt-40">
         <p className="uppercase text-xl font-light tracking-[.25rem]">mod features</p>
         <h2 className="text-4xl uppercase tracking-[.25rem] lg:w-3/12 my-4">Discover our new assets</h2>

         <ul className="flex justify-between my-6">
            <CategoryCard src={"/asset_category_card_1.png"} title={"CLOTHING"} desc={"Additional clothing as well as retextured vanilla assets."} />
            <CategoryCard src={"/asset_category_card_2.png"} title={"HEADGEAR"} desc={"A variety of new headgears, from helmets, turbans and crowns"} />
            <CategoryCard src={"/asset_category_card_3.png"} title={"ETHNICITIES"} desc={"Thousands of manually crafted new ethnicities"} />
         </ul>
      </article>
   );
}

export default AssetCategories;