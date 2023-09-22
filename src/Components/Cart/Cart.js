import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const minusBtnHandler = (item) => {
    cartCtx.removeItem({ ...item, quantity: 1 });
  };

  const plusBtnHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <li key={item.id} className={classes.list}>
            <span className={classes["list-items"]}>
              <span className={classes.bold}>Name:</span>
              {item.name}
            </span>
            <span className={classes["list-items"]}>
              <span className={classes.bold}>Price:</span>
              {Number(item.price.toFixed(2))}
            </span>
            <span className={classes["list-items"]}>
              <span className={classes.bold}>Quantity:</span>
              {item.quantity}
            </span>
            <button onClick={() => minusBtnHandler(item)}>-</button>
            <button onClick={() => plusBtnHandler(item)}>+</button>
            <hr />
          </li>
        );
      })}
    </ul>
  );

  const cartTotal = cartCtx.items.reduce((prevresult, item) => {
    return prevresult + Number(item.price) * Number(item.quantity);
  }, 0);

  return (
    <Modal onClose={props.onCloseClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartTotal.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseClick}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
