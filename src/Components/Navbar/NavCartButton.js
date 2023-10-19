import { Button } from "react-bootstrap";

const NavCartButton = (props) => {
  return (
    <>
      <Button className="border-primary rounded-3" onClick={props.cartProp}>Cart 0</Button>
    </>
  );
};

export default NavCartButton;
