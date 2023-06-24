import React, { useState } from 'react'
import logo from '../../utils/logo.jpg'
// import { ProductContext } from '../../hooks/useProductContext'
import {Nav,DivImg,Img,Ul,LiInput,DivInput,Li,DivLi} from './HeaderStyle'
import SearchBar from '../filters/searchBar/SearchBar'
import Cart from '../cart/Cart'



const Header = () => {
 
  return (
    <div>
      <header>
        <Nav>
            <DivImg>
                <div>
                    <span>
                      <Img src={logo} alt="logo foguete pequeno com um fundo roxo" />
                    </span>
                </div>
            </DivImg>
            <Ul className='lg:flex flex-1'>
              <LiInput>
                  <DivInput>
                    <SearchBar />
                  </DivInput>
              </LiInput>
              <Li>
                <DivLi>
                  Login
                </DivLi>
              </Li>
              <Li>
                <DivLi>
                  Produtos
                </DivLi>
              </Li>
              <Li>
                <DivLi>
                  Contato
                </DivLi>
              </Li>
              <Li>
                <DivLi>
                  <Cart />
                </DivLi>
              </Li>
            </Ul>
        </Nav>
      </header>
    </div>
  )
}

export default Header
