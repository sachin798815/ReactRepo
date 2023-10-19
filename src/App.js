import { useState } from "react";
import "./App.css";
import BodyContainer from "./Components/BodyComponents/BodyContainer";
import CartComponent from "./Components/CartComponent";
import FooterInfo from "./Components/FooterComponents/FooterInfo";
import NavContainer from "./Components/Navbar/NavContainer";
import ContextProvider from "./Components/context-store/ContextProvider";

function App() {
  const [cartOpener, setCartOpener] = useState(false);
  const cartOpenerFunction = () => {
    setCartOpener(true);
  };
  return (
    <ContextProvider>
      <NavContainer cartProp={cartOpenerFunction}></NavContainer>
      <BodyContainer></BodyContainer>
      <FooterInfo></FooterInfo>
      {cartOpener && <CartComponent></CartComponent>}
    </ContextProvider>
  );
}

export default App;
