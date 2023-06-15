import React from 'react'
import {DivFilter} from './FilterStyle'
const Filter = () => {
  return (
    <DivFilter>
        <h1>FILTERS</h1>
        <p>Valor máximo</p>
        <input type="text" />
        <p>Valor Mínimo </p>
        <input type="text" />
        <p>Busca por nome</p>
        <input type="text" />
        
    </DivFilter>
  )
}

export default Filter