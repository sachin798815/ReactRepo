import { useState } from "react";
import CartContext from "./cart-context";

const ContextProvider=(props)=>{
    const [items,setItems]=useState([]);

    const addItemToStore=(item)=>{
        const index=items.findIndex((currItem)=>{
            return currItem.title===item.title;
        })
        if(index!==-1){
            const newItems=[...items];
            newItems[index].quantity+=1;
            setItems(newItems);
        }
        else{
            setItems([...items,{...item,quantity:1}]);
        }
    }

    const contextObj={
        items:items,
        addItem:addItemToStore,
        removeItem:(item)=>{}
    }

    return(
        <CartContext.Provider value={contextObj}>
            {props.children}
        </CartContext.Provider>
    )
}


export default ContextProvider;