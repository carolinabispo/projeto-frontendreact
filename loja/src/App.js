import Filter from "./components/Filters/Filter";
import Home from "./components/ProductList/Home/Home";
import ProductCard from "./components/ProductList/ProductCard/ProductCard";
import Cart from "./components/ShoppingCart/Cart/Cart";
import Item from "./components/ShoppingCart/item/Item";

function App() {
  
  return (
    <div>
        <Home />
        <Item />
        <ProductCard />
        <Filter />
        <Cart />
        
    </div>
  );
}

export default App;
