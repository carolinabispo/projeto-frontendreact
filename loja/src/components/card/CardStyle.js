import styled from "styled-components";


export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 50%;
`;

export const DivCard = styled.div`
  position: relative;
  margin: 2.5rem;
  width: 100%;
  max-width: 20rem;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: white;
  cursor: pointer;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 1px 1px 2px 2px rgba(0.1, 0.1, 0.1, 0.1);
`;

export const DivImg = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledImg = styled.img`
  height: 16rem;
  display: flex;
`;

export const ContainerOne = styled.div`
  margin-top: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-bottom: 1.25rem;
  background-color: #ffffff;
`;

export const DivName = styled.div`
  .h2 {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    font-weight: 600;
    color: slateblue;
  }
  .h3 {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* 28px */;
    font-weight: 600;
    color: slateblue;
  }
`;

export const ContainerTwo = styled.div`
  display: flex;
  justify-items: center;
  justify-content: space-between;
`;

export const Span = styled.span`
  font-size: 1.875rem /* 30px */;
  line-height: 2.25rem /* 36px */;
  margin-left: 0.5rem /* 8px */;
  font-weight: 700;
  color: #000000;
  cursor: text;
`;

export const DivButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.375rem /* 6px */;
  background-color: rgb(15 23 42);
  padding-left: 1.25rem /* 20px */;
  padding-right: 1.25rem /* 20px */;
  text-align: center;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
  color: rgb(255 255 255);
  &:hover{
    background-color: rgb(55 65 81)
  }
  &:focus{
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
