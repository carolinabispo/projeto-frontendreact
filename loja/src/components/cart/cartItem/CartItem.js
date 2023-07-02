import { BsCartDash } from "react-icons/bs";
import { CartProduct, Img, Button, CartItemContent } from "./CartItemStyle";
import { useContext } from "react";
// import { ProductContext } from "../../../hooks/useProductContext";

const CartItem = ({cartItem}) => {
  // const {products} = useContext(ProductContext)
  console.log(cartItem);

  return (
    <CartProduct key={cartItem.id}>
      <Img src={cartItem.image} alt="imagem do produto" />

      <CartItemContent>
        <h3 className="text-base font-medium text-black">{cartItem.name}</h3>
        <h3 className="text-sm font-medium">{cartItem.price}</h3>
        <Button type="button">
          <BsCartDash />
        </Button>
      </CartItemContent>
    </CartProduct>
  );
};

export default CartItem;
