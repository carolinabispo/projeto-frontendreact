import React, { useContext } from "react";
import {
  DivCard,
  DivImg,
  StyledImg,
  ContainerOne,
  DivName,
  ContainerTwo,
  Span,
  DivButton,
} from "./CardStyle";
import formatCurrency from "../../utils/formatCurrency";
import { CartContext } from "../../hooks/CartContext";

const Card = ({ product }) => {
  const { addCart } = useContext(CartContext);
  const { price, name, image, description, id } = product;
  return (
    <>
      <DivCard key={id}>
        <DivImg>
          <StyledImg src={image} alt="imagem-do-produto" />
        </DivImg>
        <ContainerOne>
          <DivName>
            <h2>{name}</h2>
            <h3>{description}</h3>
          </DivName>
        </ContainerOne>
        <ContainerTwo onClick={() => addCart(product, id)}>
          <Span>{formatCurrency(price, 'BRL')}</Span>
          <DivButton> Adicionar ao carrinho</DivButton>
        </ContainerTwo>
      </DivCard>
    </>
  );
};

export default Card;
