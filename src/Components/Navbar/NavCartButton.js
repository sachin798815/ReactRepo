import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../context-store/cart-context";

const NavCartButton = (props) => {
  const ctx = useContext(CartContext);

  const counter=ctx.items.reduce((prev,item)=>{
    return prev+item.quantity;
  },0)

  return (
    <>
      <Button className="border-primary rounded-3" onClick={props.cartProp}>Cart {counter}</Button>
    </>
  );
};

export default NavCartButton;
