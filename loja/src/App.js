import Header from "./components/header/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import SideBar from "./components/cart/SideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/cards" element={<Card />} />
        </Routes>
        <Footer />
        <SideBar />
      </BrowserRouter>
    </>
  );
}

export default App;
