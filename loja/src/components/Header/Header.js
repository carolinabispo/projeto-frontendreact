import React from 'react'
import Filter from './Filters/Filter'
import Cart from '../ShoppingCart/Cart/Cart'

const Header = () => {
  return (
    <div>
        <h1>HEADER</h1>
        <Cart />
        <Filter />
    </div>
  )
}

export default Header