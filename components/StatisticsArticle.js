import StatisticCard from "./StatisticCard";

const StatisticsArticle = () => {
   return (
      <article id="assets" className="mt-40">
         <p className="uppercase text-xl font-light tracking-[.25rem]">the mod in numbers</p>
         <h2 className="text-4xl uppercase tracking-[.25rem] lg:w-3/12 my-4">Hundreds new assets</h2>

         <div className="flex">
            <div className="w-2/6 pr-12">
               <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nulla illum dolore odio! Non ratione eum expedita eius eveniet exercitationem ab ipsum. Ratione nesciunt praesentium est. Explicabo, deserunt! Optio, quasi!</p>
               <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro nulla illum dolore odio! Non ratione eum expedita eius eveniet exercitationem ab ipsum. Ratione nesciunt praesentium est. Explicabo, deserunt! Optio, quasi!</p>
            </div>

            <ul className="w-4/6 mx-auto flex justify-between gap-6">
               <StatisticCard></StatisticCard>
               <StatisticCard></StatisticCard>
               <StatisticCard></StatisticCard>
            </ul>
         </div>

      </article>
   );
}

export default StatisticsArticle;