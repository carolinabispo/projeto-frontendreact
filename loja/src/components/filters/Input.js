import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../hooks/useProductContext";
import {Div,InputBox} from "../filters/InputStyle"

const Input = () => {

    const {search, setSearch} = useContext(ProductContext)
    
   
  return (
    <div>
      <Div>
        <InputBox
          type="search"
          className="bg-purple-white shadow rounded border-0 p-3"
          placeholder="Por ex: nave espacial"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
    
      </Div>
    </div>
  );
};

export default Input;
