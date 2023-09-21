import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartVisible,setCartVisible]=useState(false);

  const makeCartVisible=()=>{
    setCartVisible(true);
  }

  const makeCartInvisible=()=>{
    setCartVisible(false);
  }

  return (
    <Fragment>
      {cartVisible&&<Cart onCloseClick={makeCartInvisible}></Cart>}
      <Header onCartClick={makeCartVisible}></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
