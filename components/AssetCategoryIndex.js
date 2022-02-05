import { useEffect } from "react";
import AssetCard from "./AssetCard";
import BreadCrumb from "./BreadCrumb";
import IndexTitle from "./IndexTitle";

const AssetCategoryIndex = (props) => {

   useEffect(() => {
      // console.log(props.props)
   }, []);

   const dataArr = props.props

   return (
      <section className='py-20'>
         <article className="w-4/5 mx-auto h-full">
            <div className='flex flex-col md:flex-row content-center'>
               <BreadCrumb category={props.breadCrumbCategory1} sub={props.breadCrumbCategory2} />
               <div className='flex-1 flex md:justify-end'>
                  <input type="text" className="block md:p-2 pl-10 md:w-4/12 mt-2 md:mt-0 text-gray-900 bg-gray-50 rounded-3xl border border-gray-300 sm:text-sm focus:ring-blue-200 focus:border-blue-200" placeholder="Search..." value={props.filterParam} onChange={e => props.setFilterParam(e.target.value)}></input>
               </div>
            </div>
            <IndexTitle title={props.breadCrumbCategory2} />
            <ul className='grid grid-cols-2 md:grid-cols-6 gap-6'>
               {
                  dataArr.slice(0, 25).filter(dataArr => dataArr.fields.title.toLowerCase().includes(props.filterParam.toLowerCase())).map(asset => <AssetCard key={asset.sys.id} asset={asset}></AssetCard>)
               }
            </ul>
         </article>
      </section>
   );
}

export default AssetCategoryIndex;