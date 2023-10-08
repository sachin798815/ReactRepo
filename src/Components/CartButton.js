import { useContext } from "react";
import CartContext from "./cart-context/cart-context";

const CartButton = (props) => {
  const ctx = useContext(CartContext);

  const cartTotalQuantity = ctx.cartList.reduce((prev, item) => {
    return (
      prev + (item.largeQuantity + item.mediumQuantity + item.smallQuantity)
    );
  }, 0);
  return <button onClick={props.onClick}>Cart {cartTotalQuantity}</button>;
};

export default CartButton;
