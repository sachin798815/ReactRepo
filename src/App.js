import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartVisible,setCartVisible]=useState(false);

  const makeCartVisible=()=>{
    setCartVisible(true);
  }

  const makeCartInvisible=()=>{
    setCartVisible(false);
  }

  return (
    <CartProvider>
      {cartVisible&&<Cart onCloseClick={makeCartInvisible}></Cart>}
      <Header onCartClick={makeCartVisible}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
