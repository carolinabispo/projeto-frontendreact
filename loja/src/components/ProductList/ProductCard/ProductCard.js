import React from 'react';
import { Div,Img,Div2,MainDiv } from "./ProductCardStyle";
// import {nave} from '../../../assets/nave.jpg'
const ProductCard = () => {
  return (
    <MainDiv>
      
      <Div className='container-one'>
        {/* <Img src={nave} alt="nave-brinquedo" /> */}
      </Div>
      <Div2 className='container-two'>
        <p>Nome do produto:</p>
        <p>Valor do produto</p>
      </Div2>
    </MainDiv>
  );
}

export default ProductCard;