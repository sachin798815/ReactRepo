import { useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import CartContext from "../context-store/cart-context";

const CardList = (props) => {
  const ctx = useContext(CartContext);
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const addToCartHandler = (item) => {
    ctx.addItem(item);
  };

  return (
    <>
      <Row>
        {productsArr.map((item) => {
          return (
            <Col
              key={Math.random()}
              className="col-6 d-flex justify-content-center"
            >
              <Card style={{ width: "18rem", marginBottom: "100px" }}>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price} Rs</Card.Text>
                  <Button variant="warning" onClick={()=>{addToCartHandler(item)}}>
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default CardList;
