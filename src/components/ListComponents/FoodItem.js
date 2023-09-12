import React, { useState, useEffect } from "react";
import Button from "../Button";

const FoodItem = (props) => {
  const [newItems, setNewItems] = useState([]);

  useEffect(() => {
    const filteredList = props.items.filter(
      (item) => item.category === "food"
    );
    setNewItems(filteredList);
  }, [props.items]);

  const deleteHandler = (id) => {
    const updatedItems = newItems.filter((item) => item.id !== id);
    setNewItems(updatedItems);
    localStorage.removeItem(id);
  };
  return (
    <ul>
      {newItems.map((item) => {
        return (
          <li key={item.key}>
            {item.name} - {item.category} - {item.price}
            <Button
              type="button"
              label="Delete Product"
              onDelete={() => deleteHandler(item.id)}
            ></Button>
          </li>
        );
      })}
    </ul>
  );
};

export default FoodItem;
