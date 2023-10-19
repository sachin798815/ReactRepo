import { Button, Col, Container, Row } from "react-bootstrap";
import CardList from "./CardList";
import { Fragment } from "react";

const BodyContainer = (prop) => {
  return (
    <Fragment>
      <h1 className=" display-1 py-4 pb-5 text-center text-light bg-secondary">
        The Generics
      </h1>
      <Container>
        <Row className="text-center mb-2">
          <h1>Music</h1>
        </Row>
        <CardList></CardList>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button className="bg-primary border-0">See the cart</Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BodyContainer;
