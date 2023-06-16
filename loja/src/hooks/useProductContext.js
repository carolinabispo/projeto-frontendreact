import { createContext, useEffect, useState } from "react";

// PRODUTOS
import data from '../data/data'

// Varivel de crição do contexto
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('')



  /* USEEFFECT QUE FAZ RENDERIÇÃO DO MEU ARRAY DE PRODUTOS */
  useEffect(() => {
    setProducts(data);
  }, []);

  /* FUNÇÃO FILTERNAME */

  




  return (
    <ProductContext.Provider
      value={{ products,search,setSearch}}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;