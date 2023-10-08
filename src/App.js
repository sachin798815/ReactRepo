import { useState } from "react";
import "./App.css";
import MainForm from "./Components/MainForm";
import Cart from "./Components/Cart";
import ItemList from "./Components/ItemList";
import CartProvider from "./Components/cart-context/CartProvider";
import CartButton from "./Components/CartButton";

function App() {
  const [showCart, setShowCart] = useState(false);

  const makeCartVisibleHandler = () => {
    setShowCart(true);
  };
  const makeCartHiddenHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider className="App">
      {showCart&&<Cart onClose={makeCartHiddenHandler}></Cart>}
      <MainForm></MainForm>
      <CartButton onClick={makeCartVisibleHandler}></CartButton>
      <ItemList></ItemList>
    </CartProvider>
  );
}

export default App;
