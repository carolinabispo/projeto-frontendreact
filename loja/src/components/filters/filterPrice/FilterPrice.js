import React, { useContext } from "react";
import { ProductContext } from "../../../hooks/useProductContext";

const FilterPrice = () => {
  const { minPrice, maxPrice, setMinPrice, setMaxPrice } =
    useContext(ProductContext);

  return (
    <div className="flex justify-center items-center h-52 bg-blue-100 ">
      <div className="flex w-72  flex-col  gap-10 " >
        <div className="relative h-10 w-full min-w-[200px] ">
          <input
            className="peer  h-full w-full rounded-[7px] border border-blue-900  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 cursor-pointer"
            placeholder=" "
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Preço mínimo
          </label>
        </div>
        <div className="relative h-11 w-full min-w-[200px]">
          <input
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="peer h-full w-full rounded-[7px] border border-blue-900  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 cursor-pointer"
            placeholder=" "
          />
           <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-blue-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Preço máximo
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterPrice;
