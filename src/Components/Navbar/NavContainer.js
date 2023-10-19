import { Navbar, Nav, Container } from "react-bootstrap";
import NavCartButton from "./NavCartButton";

const NavContainer = (props) => {
  return (
    <>
      <Navbar expand="sm" bg="dark" variant="dark" className="text-light sticky-top">
        <Container className="d-flex flex-row justify-content-center">
          <Nav.Link href="HOME" className="mx-5">HOME</Nav.Link>
          <Nav.Link href="STORE" className="mx-5">STORE</Nav.Link>
          <Nav.Link href="ABOUT" className="mx-5">ABOUT</Nav.Link>
          <NavCartButton cartProp={props.cartProp}></NavCartButton>
        </Container>
      </Navbar>
    </>
  );
};

export default NavContainer;
