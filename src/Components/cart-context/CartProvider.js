import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [cartList, setCartList] = useState([]);

  const addItemHandler = (item) => {
    setItems([...items, item]);
  };

  const removeItemHandler = (receivedItem, type) => {
    let updatedItems = [...items];
    let updatedCartList = [...cartList];
    const index = updatedItems.findIndex(
      (item) => receivedItem.name === item.name
    );
    const cartIndex = updatedCartList.findIndex(
      (item) => receivedItem.name === item.name
    );
    if (type === "large") {
      updatedItems[index].largeQuantity =
        Number(updatedItems[index].largeQuantity) - 1;
      setItems(updatedItems);
    } else if (type === "medium") {
      updatedItems[index].mediumQuantity =
        Number(updatedItems[index].mediumQuantity) - 1;
      setItems(updatedItems);
    } else {
      updatedItems[index].smallQuantity =
        Number(updatedItems[index].smallQuantity) - 1;
      setItems(updatedItems);
    }

    if (cartIndex !== -1) {
      if (type === "large") {
        updatedCartList[index].largeQuantity =
          Number(updatedCartList[index].largeQuantity) + 1;
        setCartList(updatedCartList);
      } else if (type === "medium") {
        updatedCartList[index].mediumQuantity =
          Number(updatedCartList[index].mediumQuantity) + 1;
        setCartList(updatedCartList);
      } else {
        updatedCartList[index].smallQuantity =
          Number(updatedCartList[index].smallQuantity) + 1;
        setCartList(updatedCartList);
      }
    } else {
      if (type === "large") {
        const newObj = {
          name: receivedItem.name,
          description: receivedItem.description,
          price: receivedItem.price,
          largeQuantity: 1,
          mediumQuantity: 0,
          smallQuantity: 0,
        };
        setCartList([...updatedCartList, newObj]);
      } else if (type === "medium") {
        const newObj = {
          name: receivedItem.name,
          description: receivedItem.description,
          price: receivedItem.price,
          largeQuantity: 0,
          mediumQuantity: 1,
          smallQuantity: 0,
        };
        setCartList([...updatedCartList, newObj]);
      } else {
        const newObj = {
          name: receivedItem.name,
          description: receivedItem.description,
          price: receivedItem.price,
          largeQuantity: 0,
          mediumQuantity: 0,
          smallQuantity: 1,
        };
        setCartList([...updatedCartList, newObj]);
      }
    }
  };

  const contextObject = {
    inventory: items,
    cartList: cartList,
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={contextObject}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
