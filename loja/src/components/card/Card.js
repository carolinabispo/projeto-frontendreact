import React, { useContext } from "react";
import { ProductContext } from "../../hooks/useProductContext";
import {
  Div,
  DivCard,
  DivImg,
  StyledImg,
  ContainerOne,
  DivName,
  ContainerTwo,
  Span,
  DivButton,
} from "./CardStyle";
import SelectMenu from "../filters/selectMenu/SelectMenu";
import FilterPrice from "../filters/filterPrice/FilterPrice";
import formatCurrency from "../../utils/formatCurrency";
import { CartContext } from "../../hooks/CartContext";

const Card = ({product}) => {
  const { products, searchName, filterCategory, filteredPrice } =
    useContext(ProductContext);
  const {addCart} = useContext(CartContext)
  const {price, name, imagem, category, discription, id} = product
  return (
    <>
      <SelectMenu />
      <FilterPrice />
      <Div className="flex flex-wrap h-2/4 justify-center">
        {products
          .filter(filterCategory)
          .filter(searchName)
          .filter(filteredPrice)
          .map((item) => (
            <DivCard key={item.id}>
              <DivImg>
                <StyledImg src={item.image} alt="imagem-do-produto" />
              </DivImg>
              <ContainerOne>
                <DivName>
                  <h2>{item.name}</h2>
                  <h3>{item.description}</h3>
                </DivName>
              </ContainerOne>
              <ContainerTwo onClick={()=>addCart(product,id)}>
                <Span>{formatCurrency(item.price, "BRL")}</Span>
                <DivButton >  Adicionar ao carrinho</DivButton>
              </ContainerTwo>
            </DivCard>
          ))}
      </Div>
    </>
  );
};

export default Card;
