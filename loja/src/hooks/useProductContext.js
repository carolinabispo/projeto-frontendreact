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
  const [items, setitems] = useState('')


  
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
      return product.category.includes(searchCategory);
    } else if (searchCategory === "Canecas") {
      return product.category.includes(searchCategory);
    } else {
      return true;
    }
  };

  //FUNÇÃO FILTER PRICE

  const filteredPrice = (product) => {
    if (minPrice && maxPrice) {
      return product.price >= minPrice && product.price <= maxPrice;
    } else if (minPrice) {
      return product.price >= minPrice;
    } else if (maxPrice) {
      return product.price <= maxPrice;
    }
    return product;
  };

  // const handleAddCart = (data) => {
  //   setCartItens([...products, data]);
  // };

  // const initialProductsAdded = localStorage.getItem('productsAdded')
  // // guarda produtos no local storage

  // const [productsAdded, setProductsAdded] = useState(JSON.parse(initialProductsAdded) || [])
  // // cria array um array vazio ja guardando no local storage

  // const [total, setTotal] = useState(0)
  // // const pra somar o valor

  // const addProductsCart = (product) => {

  //   const newProdutcsAdded = productsAdded.concat({ ...product, amount: 1 })

  //   setProductsAdded(newProdutcsAdded)
  // }

  const value = {
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
    filteredPrice,
   items,setitems
  };

  return (
    <ProductContext.Provider
      //value correspondente a linha 52
      value={value}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
