import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Container, Row, Col, Card ,Button, Form} from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

const ProductDetailsPage = () => {

  const loaderData = useLoaderData();
  const [product, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart
    console.log(`Added ${quantity} ${product.name} to the cart`);
  };

  const handleBuyNow = () => {
    // Implement your logic to initiate the buying process
    console.log(`Buying ${quantity} ${product.name} now`);
  };


  useEffect(() => {
       
    if (loaderData && loaderData.productDetailsByIdData) {
        const data = loaderData.productDetailsByIdData;
        console.log("loader Data:",data.product)
        console.log("")
        if (data.product) {
            setProducts(data.product);
            setLoading(false);
        } else {
            console.error("Invalid data:", data);
        }
    }
}, [loaderData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-10">
      <Card.Header as="h2" className="text-center">{product.name}</Card.Header>

    <Row>
    
      <Col md={4} >
        <Card style={{ height:"50rem", width: '20rem',border: "none", boxShadow: "none" }} >
          <Card.Img   className="responsive-image" variant="top" src={product.image} alt={product.name} />
        </Card>
      </Col>
      <Col md={8}>
        <Card style={{ height:"50rem", width: '50rem' , border: "none", boxShadow: "none"}} >
          <Card.Body>
            
            <Card.Text className="text-left" >{product.description}</Card.Text>
            <Card.Text>Vendor: {product.vendor}</Card.Text>
            <Card.Text>Price: {product.price}</Card.Text>
            <Form.Group controlId="quantity">
                <Form.Label>Quantity:</Form.Label>
                <div className="d-flex align-items-center">
                  <Button
                    variant="secondary"
                    className="me-2"
                    onClick={handleIncreaseQuantity}
                  >
                    <BsPlus /> {/* Plus icon */}
                  </Button>
                  <Form.Control
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </Form.Group>
            <br></br>
            <Button variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>{" "}
            <Button variant="success" onClick={handleBuyNow}>
              Buy Now
            </Button>{" "}
            
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
};

export default ProductDetailsPage;
