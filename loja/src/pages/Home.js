import React from "react";
import Card from "../components/card/Card";
import { ProductContext } from "../hooks/useProductContext";
import SelectMenu from "../components/filters/selectMenu/SelectMenu";
import FilterPrice from "../components/filters/filterPrice/FilterPrice";
import { Div } from "../components/card/CardStyle";
import { useContext } from "react";

const Home = () => {
  const { products, searchName, filterCategory, filteredPrice } =
    useContext(ProductContext);

  return (
    <>
      <div>
        <SelectMenu />
        <FilterPrice />
        <Div className="flex flex-wrap h-2/4 justify-center">
          {products
            .filter(filterCategory)
            .filter(searchName)
            .filter(filteredPrice)
            .map((product, index) => {
              return <Card product={product} key={index} />;
            })}
        </Div>
      </div>
    </>
  );
};

export default Home;
