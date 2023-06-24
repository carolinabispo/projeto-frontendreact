import { createContext, useEffect, useState } from "react";

// PRODUTOS
import data from "../data/data";

// Varivel de crição do contexto
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  /* USEEFFECT QUE FAZ RENDERIÇÃO DO MEU ARRAY DE PRODUTOS */
  useEffect(() => {
    setProducts(data);
  }, []);

  /* FUNÇÃO QUE FILTRA O NOME DO PRODUTO  */

  const searchName = (product) => {
    return product.name.toLowerCase().includes(searchProducts.toLowerCase());
  };

  const filterCategory = (product) => {
    if (searchCategory === "NaveEspacial") {
      return product.category.includes(searchCategory);
    } else if (searchCategory === "Foguetes") {
      return products.category.includes(searchCategory);
    } else if (searchCategory === "Canecas") {
      return product.category.includes(searchCategory);
    } else {
      return true;
    }
  };

  //FUNÇÃO FILTER PRICE



  const filteredPrice = (product) => {
    if(minPrice && maxPrice){
      return product.price >= minPrice && product.price <= maxPrice
    }else if(minPrice){
      return product.price >= minPrice
    }else if(maxPrice){
      return product.price <= maxPrice
    }
    return product
  };


  return (
    <ProductContext.Provider
      value={{
        products,
        searchProducts,
        setSearchProducts,
        searchName,
        searchCategory,
        setSearchCategory,
        filterCategory,
        minPrice,
        maxPrice,
        setMinPrice,
        setMaxPrice,
filteredPrice
        
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
