import React, { useContext } from "react";
import { ProductContext } from "../../../hooks/useProductContext";

const FilterPrice = () => {
  const {    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice, } =
    useContext(ProductContext);



  return (
    <>
      <label htmlFor="valorMin">Valor Mínimo</label>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <label htmlFor="valorMax">Valor máximo</label>
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        
      />
     
    </>
  );
};

export default FilterPrice;
