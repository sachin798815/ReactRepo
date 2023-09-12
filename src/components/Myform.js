import { useRef } from "react";
import Button from "./Button";

const Myform = (props) => {
  const idRef = useRef();
  const priceRef = useRef();
  const nameRef = useRef();
  const categoryRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const obj = {
      id: idRef.current.value,
      price: priceRef.current.value,
      name: nameRef.current.value,
      category: categoryRef.current.value,
    };

    localStorage.setItem(obj.id, JSON.stringify(obj));
    props.onAdd(obj);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="productID">Product ID</label>
      <input
        type="number"
        min="0"
        id="productID"
        name="productID"
        ref={idRef}
      />
      <label htmlFor="price">Selling Price</label>
      <input type="number" min="0" id="price" name="price" ref={priceRef} />
      <label htmlFor="name">Product Name</label>
      <input type="text" id="name" name="name" ref={nameRef} />
      <select name="category" id="category" ref={categoryRef}>
        <option value="electronics">Electronics</option>
        <option value="food">Food</option>
        <option value="skincare">Skincare</option>
      </select>
      <Button type="submit" label="Add Product"></Button>
    </form>
  );
};

export default Myform;
