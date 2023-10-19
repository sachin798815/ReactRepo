import { Button } from "react-bootstrap";
import Modal from "./Modal";

const CartComponent = (props) => {
    const cartElements = [
      {
        title: "Colors",
        price: 100,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        quantity: 2,
      },
      {
        title: "Black and white Colors",
        price: 50,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        quantity: 3,
      },
      {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        quantity: 1,
      },
    ];

    const deleteBtnHandler=(e)=>{
    }

  const cartList=(<ul>
    {cartElements.map((item)=>{
        return(
            <li key={item.title}>
                <span> {item.title} </span>
                <span> {item.price} </span>
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
