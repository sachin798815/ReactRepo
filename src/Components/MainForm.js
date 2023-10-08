import { useContext } from "react";
import CartContext from "./cart-context/cart-context";


const MainForm=props=>{
    const ctx=useContext(CartContext);

    const addButtonHandler=e=>{
        e.preventDefault();
        const name=document.getElementById('tshirtname').value;
        const description=document.getElementById('description').value;
        const price=document.getElementById('price').value;
        const largeQuantity=document.getElementById('large').value;
        const mediumQuantity=document.getElementById('medium').value;
        const smallQuantity=document.getElementById('small').value;

        const obj={
            name:name,
            description:description,
            price:price,
            largeQuantity:largeQuantity,
            mediumQuantity:mediumQuantity,
            smallQuantity:smallQuantity
        }

        ctx.addItem(obj);
    }

    return(
        <form action="">
            <label htmlFor="tshirtname">T-Shirt Name</label>
            <input type="text" id="tshirtname" name="tshirtname"/>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description"/>
            <label htmlFor="price">Price</label>
            <input type="number" min='.5' max='299' id="price" name="price"/>
            <span>Quantities : </span>
            <label htmlFor="large">L</label>
            <input type="number" name="large" id="large" />
            <label htmlFor="medium">M</label>
            <input type="number" name="medium" id="medium" />
            <label htmlFor="small">S</label>
            <input type="number" name="small" id="small"/>
            <button type="submit" onClick={addButtonHandler}>Add Product</button>
        </form>
    )
}

export default MainForm;