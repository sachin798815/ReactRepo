import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "./cart-context/cart-context";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const cartItems = (
    <ul>
      {ctx.cartList.map((item) => {
        return (
          <li key={item.name}>
            {item.name} {item.largeQuantity}L {item.mediumQuantity}M {item.smallQuantity}S total:{((Number(item.largeQuantity)+Number(item.mediumQuantity)+Number(item.smallQuantity))*Number(item.price)).toFixed(2)}
          </li>
        );
      })}
    </ul>
  );

  const cartTotal = (
    ctx.cartList.reduce((prev,item)=>{
        return prev+ ((item.largeQuantity+item.mediumQuantity+item.smallQuantity)*item.price);
    },0)
  )
  return (
    <Modal>
        {cartItems}
        <span>Grand Total : {cartTotal}</span>
      <button>Place Order</button>
      <button onClick={props.onClose}>cancel</button>
    </Modal>
  );
};

export default Cart;
