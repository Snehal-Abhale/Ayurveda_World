import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product details based on the productId
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`); // Replace with your API endpoint
        const data = await response.json();

        if (data) {
          setProduct(data);
          setLoading(false);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} alt={product.name} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>Vendor: {product.vendor}</Card.Text>
              <Card.Text>Price: {product.price}</Card.Text>
              {/* Add more details as needed */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          {/* Additional product details or description */}
          <p>{product.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
