import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../../hooks/useProductContext";
import { Div, SelectDiv,Select } from "./SelectMenuStyle";
const SelectMenu = () => {
  const { searchCategory, setSearchCategory } = useContext(ProductContext);
  return (
    <Div>
      <div>
        <SelectDiv>
          <Select 
            name="filter-category"
            id="filters"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          >
            <option value="">Selecionar</option>
            <option value="NaveEspacial">Naves Espaciais</option>
            <option value="Canecas">Canecas</option>
            <option value="Foguetes">Foguetes</option>
          </Select>
        </SelectDiv>
      </div>
    </Div>
  
   
  );
};

export default SelectMenu;
