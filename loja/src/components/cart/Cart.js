import React from "react";
import { BsFillCartFill } from "react-icons/bs";
const Cart = () => {
  return (
    <div>
      <div className="inline-block text-gray-950 no-underline hover:text-gray-200 ease-in-out hover:text-underline py-2 px-4">
       <BsFillCartFill size={20} />
      </div>
    </div>
  );
};

export default Cart;
