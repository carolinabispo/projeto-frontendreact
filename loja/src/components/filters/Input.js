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
          placeholder="Por ex: nave espacial"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
    
      </Div>
    </div>
  );
};

export default Input;
