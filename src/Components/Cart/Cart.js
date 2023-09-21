import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = props=>{
    const cartItems = <ul className={classes['cart-items']}>{
        [{id:'1',name:'sushi',amount:'2',price:'20'}].map(item=>{
            return <li>{item.name}</li>
        })}
    </ul>
    return(
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>75</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;