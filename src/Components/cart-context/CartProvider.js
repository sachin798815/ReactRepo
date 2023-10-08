import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider=props=>{
    const [items,setItems]=useState([]);

    const addItemHandler=item=>{
        setItems([...items,item])
    }

    const removeItemHandler=(receivedName,type)=>{
        let updatedItems=[...items];
        const index=updatedItems.findIndex((item)=>receivedName===item.name);
        if(type==="large"){
            updatedItems[index].largeQuantity=Number(updatedItems[index].largeQuantity)-1;
            setItems(updatedItems);
        }
        else if(type==="medium"){
            updatedItems[index].mediumQuantity=Number(updatedItems[index].mediumQuantity)-1;
            setItems(updatedItems);
        }
        else{
            updatedItems[index].smallQuantity=Number(updatedItems[index].smallQuantity)-1;
            setItems(updatedItems);
        }
    }

    const contextObject={
        items:items,
        totalAmount:0,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return(
        <CartContext.Provider value={contextObject}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;