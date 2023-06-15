import React from 'react'
import Item from '../Item/Item'
import {CartDiv} from './CartStyle'
const Cart = () => {
  return (
    <CartDiv>
      <h1>Cart</h1>
       <Item /> 
    </CartDiv>
  )
}

export default Cart