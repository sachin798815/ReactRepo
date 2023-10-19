import { Button } from "react-bootstrap";
import Modal from "./Modal";
import { useContext } from "react";
import CartContext from "./context-store/cart-context";

const CartComponent = (props) => {
    const ctx=useContext(CartContext);

    const deleteBtnHandler=(e)=>{
    }

  const cartList=(<ul>
    {ctx.items.map((item)=>{
        return(
            <li key={item.title}>
                <span> {item.title} </span>
                <span> {item.price} </span>
                <span> {item.quantity} </span>
                <Button onClick={()=>{deleteBtnHandler()}}>Delete</Button>
            </li>
        )
    })}
  </ul>)
  
  return <Modal>
  <span>Cart</span>

  {cartList}
<span>Total</span>
<button className="primary">Purchase</button>
  </Modal>;
};

export default CartComponent;
