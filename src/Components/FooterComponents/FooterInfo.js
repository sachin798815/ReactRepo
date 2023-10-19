import { Nav, Navbar } from "react-bootstrap";

const FooterInfo = (props) => {
  return (
    <>
      <Navbar expand="sm" className="bg-secondary d-flex justify-content-around" style={{marginTop:"60px"}}>
        <Navbar.Brand href="#end" className="text-light">The Generics</Navbar.Brand>
        <Nav>
          <Nav.Link href="/aboutus" onClick={() => props.setPage("About Us")} className="text-light">
            Youtube
          </Nav.Link>
          <Nav.Link
            href="/contactus"
            onClick={() => props.setPage("Contact Us")} className="text-light"
          >
            Spotify
          </Nav.Link>
          <Nav.Link href="/faqs" onClick={() => props.setPage("FAQ's")} className="text-light">
            Facebook
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default FooterInfo;
