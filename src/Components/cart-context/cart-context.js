import React from "react";

const CartContext=React.createContext({
    inventory:[],
    cartList:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(item)=>{}
})

export default CartContext;