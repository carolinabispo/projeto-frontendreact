import Header from "./components/header/Header";
import Home from "./pages/Home";
import{BrowserRouter, Routes,Route} from 'react-router-dom'
import Cart from './components/cart/Cart'
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";



function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="" element={ <Home />}/>
      <Route path="/cart/" element={<Cart/>}/>
      <Route path="/cards" element={<Card/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
   
       
       
   
  );
}

export default App;
