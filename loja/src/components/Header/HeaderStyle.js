import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
   background-color: #111827;
    box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);
    
    padding: 1rem;
    width: 100%;
    z-index: 20;
    top: 0px;
`

export const DivImg = styled.div`
    display: flex;
    justify-items: center;
    color: rgb(255 255 255);
    margin-left: 0.75rem;
    cursor: pointer;
`

export const Img = styled.img`
height: 6rem;
width: 6rem;
border-radius: 2rem;
`

export const Ul = styled.ul`
    justify-content:center;
    align-items: center;
    flex-direction: row;
    

`

export const Li = styled.li`
    margin-left: 0.75rem;

`

export const DivLi = styled.li`
    display: inline-block;
    color: #ffffff;
    text-decoration-line: none;
    &:hover{
        color: rgb(229 231 235)
  };
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  
    padding: 0.5rem,1rem;
    cursor: pointer;
`




export const LiInput = styled.li`
margin-right:0.75rem ;

`

export const DivInput = styled.div`
    padding-top: 0.5rem/* 8px */;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    color: rgb(75 85 99);
    

`

export const Menu = styled.button`
    display: flex;
    justify-items: center;
    padding-left: 1rem/* 16px */;
    padding-right: 1rem/* 16px */;
    padding-top: 0.5rem/* 8px */;
    padding-bottom: 0.5rem/* 8px */;
    border-radius: 0.25rem;
    border-width: 1px;
    border-color: rgb(107 114 128 )

`