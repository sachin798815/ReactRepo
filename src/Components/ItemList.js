import { useContext } from "react";
import CartContext from "./cart-context/cart-context";

const ItemList=props=>{
    const ctx=useContext(CartContext);
    
    const buyButtonHandler=(name,type)=>{
        ctx.removeItem(name,type);
    }

    const currentItem=(
        ctx.inventory.map(item=>{
            return <li key={Math.random()}>
                <span>{item.name} </span>
                <span>{item.description} </span>
                <span>{item.price} </span>
                <span>
                    <button onClick={()=>{buyButtonHandler(item,"large")}}>Buy large ({item.largeQuantity})</button>
                    <button onClick={()=>{buyButtonHandler(item,"medium")}}>Buy medium ({item.mediumQuantity})</button>
                    <button onClick={()=>{buyButtonHandler(item,"small")}}>Buy small ({item.smallQuantity})</button>
                </span>
            </li>
        })
    )
    return(
        <ul>
            {currentItem}
        </ul>
    )
}

export default ItemList;