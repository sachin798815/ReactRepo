import { useContext } from "react";
import classes from "./MealItemForm.module.css";
import CartContext from "../../store/cart-context";


const MealItemForm=props=>{
    const cartCtx=useContext(CartContext);
    
    const addButtonHandler=(e)=>{
        e.preventDefault();
        let quantity=document.getElementById(props.id).value;
        cartCtx.addItem({...props.item,quantity:quantity})
    }
    return(
        <form action="" className={classes.form}>
            <label htmlFor="amountId">Amount</label>
            <input type="number" name="amountId" id={props.id} min="0" max="5" defaultValue="1"/>
            <button onClick={addButtonHandler}>+ Add</button>
        </form>
    )
}

export default MealItemForm;