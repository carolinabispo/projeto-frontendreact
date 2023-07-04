import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //estado pra manipular o valor de itens no carrinho
  const [amount, setAmount] = useState(0);

  //manipular o total de produtos
  const [total, setTotal] = useState(0);

  //crio o useeffect sempre monitorando o cart pra toda vez que algo for add essa funçao total vai ser mudada somando ou reduzindo um item
  useEffect(() => {
    const total = cart.reduce((accmulator, currentItem) => {
      return accmulator + currentItem.price * currentItem.amount;
    }, 0);

    setTotal(total);
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accmulator, currentItem) => {
        return accmulator + currentItem.amount;
      }, 0);
      setAmount(amount);
    }
  }, [cart]);

  const addCart = (product, id) => {
    //faz uma copia do produto  começando ele no 1
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //remover produto
  const removeCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //limpar carrinho

  const clearCart = () => {
    setCart([]);
  };

  //aumentar quantidade
  const increaseAmount = (id) => {
    const increaseCart = cart.find((item) => item.id === id);
    addCart(increaseCart, id);
  };

  //diminuir items

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeCart(id);
    }
  };
  const value = {
    cart,
    addCart,
    removeCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
    amount,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
