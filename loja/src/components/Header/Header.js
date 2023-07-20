import logo from "../../utils/logo.jpg";
import { Nav, DivImg, Img, Menu } from "./HeaderStyle";
import SearchBar from "../filters/searchBar/SearchBar";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { SideBarContext } from "../../hooks/SideBarContext";
import { CartContext } from "../../hooks/CartContext";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { amount } = useContext(CartContext);
  const toogleNav = () =>{
    setIsOpen(!isOpen);
  }

  const toogleNavCart = () => {
    setIsOpen(isOpen);
  };
  return (
    <header>
      <Nav>
      
        <DivImg>
          
          <div>
            <span>
              <Link to="/cards">
                <Img src={logo} alt="logo foguete pequeno com um fundo roxo" />
              </Link>
            </span>
            
          </div>
          
        </DivImg>
        <div className="flex justify-start ml-10 items-center"><SearchBar /></div>
        <div className="lg:hidden bg-white h-10 rounded-sm border-none">
        
          <Menu onClick={toogleNav}>
            {""}
            ({amount})
            <BsFillCartFill size={23} /> {""}
          </Menu>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "" : "hidden "
          } lg:block pt-4`}
        >
          <ul className=" lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <div className="pt-2 relative mx-auto text-gray-600">
                
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-5 mr-4"
                ></button>
              </div>
            </li>

            <li className="mr-3">
              <div
                className="inline-block text-white	 no-underline hover:text-blue-200 ease-in-out  py-2 px-4 cursor-pointer"
                onClick={toogleNav}
              >
                 
                ({amount})
                <BsFillCartFill size={20} />
              </div>
            </li>
          </ul>
        </div>
      </Nav>
    </header>
  );
};

export default Header;
