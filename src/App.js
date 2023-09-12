import { useState } from "react";
import "./App.css";
import Myform from "./components/Myform";
import FoodItem from "./components/ListComponents/FoodItem";
import SkincareItem from "./components/ListComponents/SkincareItem";
import ElectronicItem from "./components/ListComponents/ElectronicItem";

function App() {
  const [itemList, setItemList] = useState([]);

  const listCreater = (obj) => {
    setItemList((previous) => [
      ...previous,
      { ...obj, key: Math.random().toString() },
    ]);
  };

  // useEffect(() => {
  //   console.log(itemList); // Log itemList whenever it changes
  // }, [itemList]);

  return (
    <div>
      <Myform onAdd={listCreater}></Myform>
      <h1>Products</h1>

      <h3>Electronic Items</h3>
      <ElectronicItem items={itemList}></ElectronicItem>
      <h3>Food items</h3>
      <FoodItem items={itemList}></FoodItem>
      <h3>Skincare Items</h3>
      <SkincareItem items={itemList}></SkincareItem>
    </div>
  );
}

export default App;
