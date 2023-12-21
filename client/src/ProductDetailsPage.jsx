import React, { useState, useEffect } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form, Alert } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

const ProductDetailsPage = () => {
  const loaderData = useLoaderData();
  const [product, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState(loaderData.cartItemsdata.cart_data);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = (product_id, product_category, product_name, product_image, product_price, quantity) => {
    const total_price = parseFloat(product_price.replace("$", "")) * quantity;
   

    fetch(`/add_to_cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        product_id : product_id,
        product_category:product_category,
        product_name: product_name,
        product_image :product_image,
        quantity: quantity,
        price: product_price,
        total: total_price.toFixed(2),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((newCartItem) => {
        setCartItems([...cartItems, newCartItem]);
        setShowAlert(true);
      })
      .catch((error) => {
        console.error("Error submitting post:", error);
      });
  };
  console.log("cart items:", cartItems)
  const handleBuyNow = () => {
    console.log(`Buying ${quantity} ${product.name} now`);
  };

  useEffect(() => {
    if (loaderData && loaderData.productDetailsByIdData) {
      const data = loaderData.productDetailsByIdData;
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
      <Card.Header as="h2" className="text-center">
        {product.name}
      </Card.Header>
      <Row>
        <Col md={4}>
          <Card style={{ height: "50rem", width: "20rem", border: "none", boxShadow: "none" }}>
            <Card.Img className="responsive-image" variant="top" src={product.image} alt={product.name} />
          </Card>
        </Col>
        <Col md={6}>
          <Card style={{ height: "50rem", width: "50rem", border: "none", boxShadow: "none" }}>
            <Card.Body>
              <Card.Text className="text-center"> <strong>Description:</strong> {product.description}</Card.Text>
              <Card.Text><strong>Brand:</strong> {product.brand}</Card.Text>
              <Card.Text><strong>Vendor:</strong> {product.vendor}</Card.Text>
              <Card.Text> <strong>Price:</strong> {product.price}</Card.Text>
              <Form.Group controlId="quantity">
                <Form.Label> <strong>Quantity:</strong></Form.Label>
                <div className="d-flex align-items-center">
                  <Button variant="secondary" className="me-2" onClick={handleIncreaseQuantity}>
                    <BsPlus /> {/* Plus icon */}
                  </Button>
                  <Form.Control type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
              </Form.Group>
              <br></br>
              <Button variant="primary" onClick={() => handleAddToCart(product.id, product.category, product.name, product.image, product.price, quantity)}>
                Add to Cart
              </Button>{" "}
              <Button variant="success" onClick={() => handleBuyNow()}>
                Buy Now
              </Button>{" "}
              <br></br> <br></br><br></br><br></br><br></br>
              <div>
              {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                  <p>{`${quantity}  ${product.name} has been added to the cart`}</p>
                </Alert>
              )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
